import React, { useEffect, useState } from "react";

const Card = ({ flag, name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        padding: "10px",
        border: "1px solid grey",
        borderRadius: "4px",
        height: "200px",
        width: "200px",
      }}
    >
      <img
        src={flag}
        alt={`Flag of ${name}`}
        style={{
          height: "75px",
          width: "100px",
        }}
      />
      <p>{name}</p>
    </div>
  );
};

const API = "https://xcountries-backend.labs.crio.do/all";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await fetch(API);

      // optional but safe
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching data: ",error);
    }
  };

  fetchCountries();
}, []);


  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {countries.map((country) => (
        <Card
          key={country.abbr}
          flag={country.flag}
          name={country.name}
        />
      ))}
    </div>
  );
}
