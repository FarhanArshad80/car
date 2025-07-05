import React, { useState, useEffect } from "react";
import CarDetails from "./CarDetails";

// Car component
function Car({ car, onClick, onDelete, addCar }) {
  return (
    <div
      onClick={() => onClick(car)}
      style={{
        cursor: "pointer",
        padding: "15px 20px",
        borderRadius: "10px",
        marginBottom: "15px",
        backgroundColor: "#f5f5f5",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        borderLeft: "6px solid #4b0082",
      }}
    >
      <h3 style={{ margin: "0", color: "#333", fontSize: "1.2rem" }}>
        {car.name}
      </h3>
      <p style={{ color: "#666", fontSize: "0.9rem" }}>
        {car.year} • {car.color} • {car.price}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addCar(car); // ✅ duplicate this car
        }}
        style={{
          backgroundColor: "#4b0082",
          color: "#fff",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Add Car
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(car.id);
        }}
        style={{
          backgroundColor: "#4b0082",
          color: "#fff",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default function DisplayCarList() {
  const [cars, setCars] = useState(() => {
    const stored = localStorage.getItem("cars");
    return stored
      ? JSON.parse(stored)
      : [
          {
            id: 1,
            name: "Honda Civic",
            color: "Blue",
            year: 2022,
            price: "$22,000",
            description: "A reliable compact sedan...",
          },
          {
            id: 2,
            name: "Toyota Corolla",
            color: "White",
            year: 2023,
            price: "$21,500",
            description: "A globally trusted sedan...",
          },
        ];
  });

  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  // ✅ Add new (duplicate) car
  function addCar(car) {
    const newCar = {
      ...car,
      id: Date.now(), // unique ID
    };
    setCars([...cars, newCar]);
  }

  // ✅ Delete car
  function deleteCar(id) {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);

    if (selectedCar && selectedCar.id === id) {
      setSelectedCar(null);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        padding: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#ffffffdd",
        borderRadius: "12px",
        boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
      }}
    >
      {/* Car List Panel */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: "2.5rem",
            color: "#4b0082",
            marginBottom: "20px",
            borderBottom: "2px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          Available Cars
        </h2>
        {cars.length === 0 ? (
          <p style={{ color: "#888", fontStyle: "italic" }}>No cars available.</p>
        ) : (
          cars.map((car) => (
            <Car
              key={car.id}
              car={car}
              onClick={setSelectedCar}
              onDelete={deleteCar}
              addCar={addCar}
            />
          ))
        )}
      </div>

      {/* Car Details Panel */}
      <div
        style={{
          flex: 2,
          backgroundColor: "#f9f9f9",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          minHeight: "300px",
        }}
      >
        {selectedCar ? (
          <CarDetails car={selectedCar} />
        ) : (
          <p
            style={{
              color: "#777",
              fontSize: "1.4rem",
              textAlign: "center",
              paddingTop: "50px",
            }}
          >
            👈 Click on a car to view its details
          </p>
        )}
      </div>
    </div>
  );
}
