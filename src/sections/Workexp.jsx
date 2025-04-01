import React, { useEffect, useState } from "react";
import { supabase } from "../connection/supabaseClient";
import { LuBriefcaseBusiness } from "react-icons/lu";
import "../css/Timeline.css";

const CACHE_KEY = "workExpCache";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const WorkExp = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWorks = async () => {
      try {
        // Check localStorage cache
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setWorks(data);
            setLoading(false);
            return;
          }
        }

        // Fetch data from Supabase
        const { data, error } = await supabase
          .from("work-experience")
          .select("*");

        if (error) throw error;

        // Update state and cache
        setWorks(data);
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data, timestamp: Date.now() })
        );
      } catch (err) {
        setError(err.message);
        console.error("Error fetching works:", err.message);
      } finally {
        setLoading(false);
      }
    };

    loadWorks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="l-container">
      <p className="work-section-header">
        <LuBriefcaseBusiness />
        Experience
      </p>

      <div className="timeline">
        {works.length > 0 ? (
          works.map((work, index) => (
            <div className="timeline-item" key={work.id}>
              <div className={`bullet ${index === 0 ? "filled" : ""}`}>
                <div className="w-container">
                  <p>{work.work}</p>
                </div>
              </div>
              
              <div className="w-time-description">
                <div className="w-time">
                 <p>{work.time}
                  </p>
                </div>
                
                <p>{work.wText}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No works found in DB</p>
        )}
      </div>
    </div>
  );
};

export default WorkExp;
