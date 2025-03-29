import React, { useEffect, useState } from "react";
import { supabase } from "../connection/supabaseClient.jsx";

const CACHE_KEY = "skillsCache";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const SkillsIconList = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        // Check localStorage cache
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setSkills(data);
            setLoading(false);
            return;
          }
        }

        // Fetch data from Supabase
        const { data, error } = await supabase
          .from("tech-stack-icons")
          .select("*");

        if (error) throw error;

        // Update state and cache
        setSkills(data);
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data, timestamp: Date.now() })
        );
      } catch (err) {
        setError(err.message);
        console.error("Error fetching skills:", err.message);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="skillsContainer">
      <p>I'm capable of using the following:</p>
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

export default SkillsIconList;
