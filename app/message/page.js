"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null); // Initialize with null
  const [error, setError] = useState(null); // Initialize with null

  useEffect(() => {
    fetch("api/message") // Corrected route URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Convert the response to JSON
      })
      .then((jsonData) => setData(jsonData)) // Set the data in the state
      .catch((err) => setError(err)); // Set the error in the state
  }, []);

  // console.log(data);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    return (
      <div className="viewMessage">
        <div className="layoutMessage">
          {data &&
            data.map((singleData, i) => {
              return (
                <div className="messageBox" key={i}>
                  <div className="name">{singleData.name} </div>
                  <div className="email">
                    <span>from:</span>
                    {singleData.email}
                  </div>
                  <div className="message">
                    &quot; {singleData.message}.&quot;
                  </div>
                  <div className="time">{Date(singleData.date)}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
}
