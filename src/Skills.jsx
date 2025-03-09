import React, { useEffect, useState } from "react";
import { supabase } from "./connection/supabaseClient.jsx";

const fetchSkillsIcon = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data, error } = await supabase
          .from("tech-stack-icons")
          .select("*"); // Fetch all columns for flexibility

        if (error) throw error;

        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="skillsContainer">
   <span>I am capable of the following
   <img src="https://media1.tenor.com/m/Y_uuSuXUX8sAAAAd/ami-fat-cat-fgcat.gif" alt="" />
   <img src="https://media.tenor.com/945lNrIkL20AAAAj/kawai-budding-pop.gif" alt="" />  
    </span>   
      <div className="skillsIcon">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <div className="titleContainer" key={skill.id}>
              <img src={skill.url} alt={skill.name} />
              <p>{skill.description}</p>
            </div>
          ))
        ) : (
          <p>No skills found.</p>
        )}
      </div>
    </div>
  );
};

export default fetchSkillsIcon;
