import React, { useEffect, useState } from "react";
import { supabase } from "../connection/supabaseClient.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CACHE_KEY = "certificatesCache";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds


const Certificates = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_DURATION) {
        setImages(data);
        return;
      }
    }

    const fetchImages = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("certificates")
          .list("skills");

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
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: urls, timestamp: Date.now() })
        );
      } catch (err) {
        console.error("❌ Unexpected error:", err);
      }
    };

    fetchImages();
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 5000, min: 1024 }, items: 3 },
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