import React from "react";

function CarDetails({ car }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        lineHeight: "1.6",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h1
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          color: "#2c3e50",
          fontSize: "2rem",
          marginBottom: "20px",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px",
        }}
      >
        <i> Car Details</i>
      </h1>

      <h2
        style={{
          fontSize: "1.6rem",
          color: "#34495e",
          marginBottom: "10px",
        }}
      >
        {car.name}
      </h2>

      <p style={{ color: "#555", fontSize: "1rem" }}>
        <strong>Color:</strong> {car.color}
      </p>
      <p style={{ color: "#555", fontSize: "1rem" }}>
        <strong>Year:</strong> {car.year}
      </p>
      <p
        style={{
          fontWeight: "bold",
          color: "#27ae60",
          fontSize: "1.1rem",
          margin: "10px 0",
        }}
      >
        <strong>Price:</strong> {car.price}
      </p>

      <p
        style={{
          fontStyle: "italic",
          color: "#333",
          backgroundColor: "#f7f9fa",
          padding: "12px",
          borderRadius: "8px",
        }}
      >
        {car.description}
      </p>
    </div>
  );
}

export default CarDetails;
