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
        alt={`${name} flag`}
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
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
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
          key={country.name}
          flag={country.flag}
          name={country.name}
        />
      ))}
    </div>
  );
}
