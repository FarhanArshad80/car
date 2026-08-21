import React, { useEffect, useMemo, useState } from "react";
import CarDetails from "./CarDetails";

const starterCars = [
  {
    id: 1,
    name: "Honda Civic",
    color: "Blue",
    year: 2022,
    price: "$22,000",
    type: "Sedan",
    mileage: "18,420 mi",
    description:
      "A dependable, efficient sedan with a refined cabin, confident handling and everyday practicality.",
  },
  {
    id: 2,
    name: "Toyota Corolla",
    color: "White",
    year: 2023,
    price: "$21,500",
    type: "Sedan",
    mileage: "12,800 mi",
    description:
      "A smart and comfortable commuter with legendary reliability, modern safety tech and excellent value.",
  },
  {
    id: 3,
    name: "Ford Mustang",
    color: "Red",
    year: 2021,
    price: "$36,000",
    type: "Coupe",
    mileage: "21,100 mi",
    description:
      "An iconic performance coupe with bold styling, thrilling acceleration and unmistakable character.",
  },
  {
    id: 4,
    name: "Tesla Model S",
    color: "Midnight Silver",
    year: 2024,
    price: "$89,990",
    type: "Electric",
    mileage: "4,650 mi",
    description:
      "A luxurious electric sedan pairing instant performance with a minimalist, technology-first interior.",
  },
  {
    id: 5,
    name: "BMW 3 Series",
    color: "Dark Gray",
    year: 2022,
    price: "$43,000",
    type: "Luxury",
    mileage: "16,300 mi",
    description:
      "German engineering, balanced handling and a premium interior in one timeless sports sedan.",
  },
  {
    id: 6,
    name: "Kia Sportage",
    color: "Green",
    year: 2023,
    price: "$27,000",
    type: "SUV",
    mileage: "9,870 mi",
    description:
      "A stylish and spacious SUV ready for city life, family weekends and everything between.",
  },
];

const styles = {
  section: {
    padding: "20px 0 0",
  },

  card: {
    background: "#0c192b",
    border: "1px solid #1e293b",
    borderRadius: 20,
    overflow: "hidden",
  },

  button: {
    border: 0,
    borderRadius: 10,
    padding: "11px 15px",
    cursor: "pointer",
    fontWeight: 800,
    fontSize: 13,
  },
};

function getInitialCars() {
  try {
    const savedCars = localStorage.getItem("veloce-cars");

    if (savedCars) {
      return JSON.parse(savedCars);
    }

    return starterCars;
  } catch {
    return starterCars;
  }
}

function CarCard({ car, selected, onSelect, onAdd, onDelete }) {
  const isRedCar = car.color.toLowerCase() === "red";

  return (
    <article
      onClick={() => onSelect(car)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onSelect(car);
        }
      }}
      tabIndex={0}
      style={{
        ...styles.card,
        cursor: "pointer",
        borderColor: selected ? "#d7ff3f" : "#1e293b",
        transition: "transform .2s, border-color .2s",
        transform: selected ? "translateY(-3px)" : "none",
      }}
    >
      {/* Car Banner */}
      <div
        style={{
          height: 130,
          padding: 20,
          display: "flex",
          alignItems: "end",
          background: `linear-gradient(
            135deg,
            ${isRedCar ? "#5b1720" : "#13263b"},
            #0c192b
          )`,
        }}
      >
        <span
          style={{
            color: "#d7ff3f",
            fontSize: 12,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          {car.type}
        </span>
      </div>

      {/* Car Information */}
      <div style={{ padding: 20 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: 18,
              }}
            >
              {car.name}
            </h3>

            <p
              style={{
                color: "#64748b",
                margin: "7px 0 0",
                fontSize: 13,
              }}
            >
              {car.year} · {car.color} · {car.mileage}
            </p>
          </div>

          <strong
            style={{
              color: "#d7ff3f",
              whiteSpace: "nowrap",
            }}
          >
            {car.price}
          </strong>
        </div>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 18,
          }}
        >
          <button
            style={{
              ...styles.button,
              background: "#d7ff3f",
              color: "#07111f",
            }}
            onClick={(event) => {
              event.stopPropagation();
              onAdd(car);
            }}
          >
            Duplicate
          </button>

          <button
            style={{
              ...styles.button,
              background: "#17263a",
              color: "#cbd5e1",
            }}
            onClick={(event) => {
              event.stopPropagation();
              onDelete(car.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}

export default function DisplayCarList() {
  const [cars, setCars] = useState(getInitialCars);
  const [selectedCar, setSelectedCar] = useState(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("veloce-cars", JSON.stringify(cars));
  }, [cars]);

  const categories = ["All", ...new Set(cars.map((car) => car.type))];

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const searchableText = `${car.name} ${car.color} ${car.type}`;

      const matchesQuery = searchableText
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesFilter = filter === "All" || car.type === filter;

      return matchesQuery && matchesFilter;
    });
  }, [cars, query, filter]);

  function addCar(car) {
    const duplicateCar = {
      ...car,
      id: Date.now(),
      name: `${car.name} (New)`,
    };

    setCars((currentCars) => [...currentCars, duplicateCar]);
    setSelectedCar(duplicateCar);
  }

  function deleteCar(id) {
    setCars((currentCars) =>
      currentCars.filter((car) => car.id !== id)
    );

    setSelectedCar((currentCar) =>
      currentCar?.id === id ? null : currentCar
    );
  }

  return (
    <section style={styles.section}>
      <div
        style={{
          width: "min(1180px, calc(100% - 40px))",
          margin: "0 auto",
        }}
      >
        {/* Heading and Search */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: 20,
            flexWrap: "wrap",
            marginBottom: 22,
          }}
        >
          <div>
            <p
              style={{
                color: "#64748b",
                margin: 0,
                fontSize: 13,
              }}
            >
              {cars.length} vehicles in collection
            </p>

            <h2
              style={{
                fontSize: 30,
                margin: "8px 0 0",
                letterSpacing: -1,
              }}
            >
              Browse inventory
            </h2>
          </div>

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search vehicles..."
            aria-label="Search vehicles"
            style={{
              width: "min(100%, 270px)",
              padding: "13px 16px",
              borderRadius: 11,
              border: "1px solid #334155",
              background: "#0c192b",
              color: "#fff",
              outline: "none",
            }}
          />
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            paddingBottom: 20,
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={{
                ...styles.button,
                background:
                  filter === category ? "#d7ff3f" : "#17263a",
                color:
                  filter === category ? "#07111f" : "#cbd5e1",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0, 1.2fr) minmax(300px, .8fr)",
            gap: 20,
            alignItems: "start",
          }}
        >
          {/* Car Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(245px, 1fr))",
              gap: 14,
            }}
          >
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                selected={selectedCar?.id === car.id}
                onSelect={setSelectedCar}
                onAdd={addCar}
                onDelete={deleteCar}
              />
            ))}

            {filteredCars.length === 0 && (
              <p
                style={{
                  color: "#94a3b8",
                  padding: 20,
                }}
              >
                No vehicles match your search.
              </p>
            )}
          </div>

          {/* Details Panel */}
          <div
            style={{
              position: "sticky",
              top: 96,
            }}
          >
            {selectedCar ? (
              <CarDetails car={selectedCar} />
            ) : (
              <div
                style={{
                  ...styles.card,
                  padding: 30,
                  minHeight: 250,
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                  color: "#64748b",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 36,
                      marginBottom: 12,
                    }}
                  >
                    ↗
                  </div>

                  <p>Select a vehicle to view its full profile.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}