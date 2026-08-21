import React from "react";
import DisplayCarList from "./DisplayCarList";

const maintenanceTips = [
  [
    "01",
    "Check fluids",
    "Inspect oil, coolant, brake fluid and windshield washer fluid regularly.",
  ],
  [
    "02",
    "Protect the finish",
    "A regular wash and wax helps preserve your car’s paint and resale value.",
  ],
  [
    "03",
    "Watch the tires",
    "Keep tires inflated correctly and rotate them every 5,000–8,000 miles.",
  ],
];

const styles = {
  page: {
    minHeight: "100vh",
    color: "#f8fafc",
    background: "#07111f",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  shell: {
    width: "min(1180px, calc(100% - 40px))",
    margin: "0 auto",
  },
};

export default function App() {
  return (
    <main style={styles.page}>
      {/* Navigation */}
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,.1)",
          background: "rgba(7,17,31,.86)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(18px)",
        }}
      >
        <div
          style={{
            ...styles.shell,
            height: 76,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                display: "grid",
                placeItems: "center",
                borderRadius: 12,
                background: "#d7ff3f",
                color: "#07111f",
                fontWeight: 900,
                fontSize: 20,
              }}
            >
              V
            </div>

            <strong
              style={{
                letterSpacing: 2,
                fontSize: 15,
              }}
            >
              VELOCE MOTORS
            </strong>
          </div>

          <span
            style={{
              color: "#94a3b8",
              fontSize: 13,
            }}
          >
            Premium vehicles · Curated for you
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          ...styles.shell,
          padding: "78px 0 42px",
        }}
      >
        <p
          style={{
            color: "#d7ff3f",
            fontWeight: 800,
            letterSpacing: 2,
            fontSize: 12,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          The art of driving
        </p>

        <h1
          style={{
            maxWidth: 720,
            fontSize: "clamp(2.8rem, 7vw, 5.8rem)",
            lineHeight: 0.95,
            letterSpacing: -4,
            margin: "18px 0",
            fontWeight: 900,
          }}
        >
          Find a car that{" "}
          <span style={{ color: "#d7ff3f" }}>feels like you.</span>
        </h1>

        <p
          style={{
            color: "#94a3b8",
            maxWidth: 560,
            lineHeight: 1.7,
            fontSize: 17,
            margin: 0,
          }}
        >
          Explore a carefully selected collection of reliable daily drivers,
          luxury sedans and performance icons.
        </p>
      </section>

      {/* Car Inventory */}
      <DisplayCarList />

      {/* Maintenance Section */}
      <section
        style={{
          ...styles.shell,
          padding: "76px 0 110px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                color: "#d7ff3f",
                fontWeight: 800,
                letterSpacing: 2,
                fontSize: 12,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Care guide
            </p>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                margin: "10px 0 0",
                letterSpacing: -2,
              }}
            >
              Keep it running beautifully.
            </h2>
          </div>

          <p
            style={{
              color: "#64748b",
              maxWidth: 300,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Small habits make a big difference to performance, safety and
            value.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          {maintenanceTips.map(([number, title, text]) => (
            <article
              key={number}
              style={{
                padding: 24,
                border: "1px solid #1e293b",
                borderRadius: 20,
                background: "#0c192b",
              }}
            >
              <span
                style={{
                  color: "#d7ff3f",
                  fontWeight: 900,
                }}
              >
                {number}
              </span>

              <h3
                style={{
                  margin: "28px 0 10px",
                  fontSize: 19,
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.6,
                  fontSize: 14,
                  margin: 0,
                }}
              >
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1e293b",
          color: "#64748b",
          textAlign: "center",
          padding: 28,
          fontSize: 13,
        }}
      >
        © 2025 Veloce Motors · Drive something memorable.
      </footer>
    </main>
  );
}