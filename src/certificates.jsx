import React, { useEffect, useState } from "react";
import { supabase } from "./connection/supabaseClient.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Certificates = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("certificates")
          .list("skills");

        console.log("📂 Files in skills folder:", data);

        if (error) {
          console.error("❌ Error listing files:", error);
          return;
        }

        const urls = data.map(
          (file) =>
            supabase.storage
              .from("certificates")
              .getPublicUrl(`skills/${file.name}`).data.publicUrl
        );

        setImages(urls);
      } catch (err) {
        console.error("❌ Unexpected error:", err);
      }
    };

    fetchImages();
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="certificatesContainer">
      {images.length > 0 ? (
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          arrows
        >
          {images.map((url, index) => (
            <div key={index} className="certBox">
              <img src={url} alt={`Certificate ${index}`} />
            </div>
          ))}
        </Carousel>
      ) : (
        <p>Fetching certificates. Please wait...</p>
      )}
    </div>
  );
};

export default Certificates;
