import React from "react";

export default function CarDetails({ car }) {
  return (
    <article
      style={{
        background: "#d7ff3f",
        color: "#07111f",
        borderRadius: 22,
        padding: 28,
        boxShadow: "0 20px 50px rgba(215,255,63,.08)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          gap: 15,
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Selected vehicle
        </span>

        <span
          style={{
            border: "1px solid rgba(7,17,31,.25)",
            borderRadius: 30,
            padding: "6px 10px",
            fontSize: 11,
            fontWeight: 800,
          }}
        >
          IN STOCK
        </span>
      </div>

      {/* Vehicle Name */}
      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          lineHeight: 1,
          letterSpacing: -2,
          margin: "42px 0 8px",
        }}
      >
        {car.name}
      </h2>

      <p
        style={{
          opacity: 0.65,
          margin: 0,
        }}
      >
        {car.year} {car.type} · {car.color}
      </p>

      <div
        style={{
          height: 1,
          background: "rgba(7,17,31,.2)",
          margin: "26px 0",
        }}
      />

      {/* Specifications */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px 12px",
        }}
      >
        <div>
          <small style={{ opacity: 0.6 }}>Price</small>
          <strong
            style={{
              display: "block",
              fontSize: 20,
              marginTop: 4,
            }}
          >
            {car.price}
          </strong>
        </div>

        <div>
          <small style={{ opacity: 0.6 }}>Mileage</small>
          <strong
            style={{
              display: "block",
              fontSize: 20,
              marginTop: 4,
            }}
          >
            {car.mileage || "Low mileage"}
          </strong>
        </div>

        <div>
          <small style={{ opacity: 0.6 }}>Exterior</small>
          <strong
            style={{
              display: "block",
              marginTop: 4,
            }}
          >
            {car.color}
          </strong>
        </div>

        <div>
          <small style={{ opacity: 0.6 }}>Category</small>
          <strong
            style={{
              display: "block",
              marginTop: 4,
            }}
          >
            {car.type || "Premium"}
          </strong>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          lineHeight: 1.7,
          margin: "26px 0 0",
          opacity: 0.78,
        }}
      >
        {car.description}
      </p>

      {/* Contact Button */}
      <button
        style={{
          width: "100%",
          marginTop: 26,
          padding: 14,
          border: 0,
          borderRadius: 11,
          background: "#07111f",
          color: "#fff",
          fontWeight: 800,
          cursor: "pointer",
        }}
        onClick={() =>
          window.alert(
            `Thanks for your interest in the ${car.name}.`
          )
        }
      >
        Request information →
      </button>
    </article>
  );
}