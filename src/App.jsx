import React from "react";
import DisplayCarList from "./DisplayCarList";

export default function App() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606925797301-0f381b0d15cc?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
        color: "#fff",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "1200px",
          margin: "0 auto",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            color: "#f9c74f",
            textAlign: "center",
            textShadow: "2px 2px 10px #000",
            marginBottom: "40px",
          }}
        >
          Our Premium Car Collection <br />
          <span style={{ fontSize: "1.5rem", color: "#90e0ef" }}>2025 Showcase</span>
        </h1>

        <DisplayCarList />
      </div>

      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
          marginTop: "50px",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "#f1f1f1",
        }}
      >
        <h2 style={{ fontSize: "2rem", color: "#90e0ef", marginBottom: "20px" }}>
          Car Maintenance Tips
        </h2>
        <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          <li>🔧 Check your oil every month and change it as recommended.</li>
          <li>🚿 Wash your car regularly to prevent rust and maintain paint quality.</li>
          <li>🛞 Rotate your tires every 5,000–8,000 miles for even wear.</li>
          <li>💨 Keep your tires properly inflated for safety and fuel efficiency.</li>
          <li>🔋 Test your battery twice a year — replace it every 3-5 years.</li>
          <li>💡 Replace wiper blades yearly to ensure visibility during rain.</li>
        </ul>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "1.3rem",
          color: "#fff",
          textShadow: "1px 1px 3px #000",
        }}
      >
         2025 Latest Models - Style Meets Performance
      </p>
    </div>
  );
}
