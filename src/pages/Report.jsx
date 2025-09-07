import axios from "axios";
import React, { useEffect, useState } from "react";

const Report = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://surveillance-api.onrender.com/api/get-data"
      );
      setData(response.data.detections); // ✅ access detections array
      console.log("API Data:", response.data.detections);
    } catch (error) {
      console.error("❌ Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="cards-container">
        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image_url} alt="Detection" />
            <div className="card-content">
              <p>{item.response}</p>
              <small>
                {new Date(item.timestamp).toLocaleString()} {/* readable time */}
              </small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Report;
