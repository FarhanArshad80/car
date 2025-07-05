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
    description:
      "A reliable compact sedan known for great fuel efficiency and affordability. The Honda Civic combines sleek design, impressive fuel economy, and a smooth ride. With spacious interiors, advanced safety features, and a reputation for long-term dependability, it’s a favorite among urban drivers and commuters alike.",
  },
  {
    id: 2,
    name: "Toyota Corolla",
    color: "White",
    year: 2023,
    price: "$21,500",
    description:
      "A globally trusted sedan offering comfort, durability, and great resale value. The Toyota Corolla is perfect for families and professionals looking for a low-maintenance vehicle with advanced driver-assistance systems, modern infotainment, and exceptional build quality that lasts for years.",
  },
  {
    id: 3,
    name: "Ford Mustang",
    color: "Red",
    year: 2021,
    price: "$36,000",
    description:
      "An iconic American muscle car with bold looks and powerful performance. The Mustang roars with attitude, featuring aggressive styling, a powerful V8 engine, rear-wheel drive, and thrilling acceleration. It’s more than a car — it’s a legacy on wheels for driving enthusiasts.",
  },
  {
    id: 4,
    name: "Chevrolet Camaro",
    color: "Black",
    year: 2020,
    price: "$35,500",
    description:
      "A sporty performance coupe that delivers thrills with a distinctive style. The Chevrolet Camaro boasts bold aesthetics, precise handling, and a range of powerful engine options. Whether you’re cruising the boulevard or hitting the track, this car is built to impress and perform.",
  },
  {
    id: 5,
    name: "Tesla Model S",
    color: "Midnight Silver",
    year: 2024,
    price: "$89,990",
    description:
      "A luxury electric sedan offering top-tier performance and cutting-edge tech. The Tesla Model S features unmatched electric range, ludicrous acceleration, a minimalist interior with a massive touchscreen, and autonomous driving capabilities. It’s a glimpse into the future of high-performance driving.",
  },
  {
    id: 6,
    name: "BMW 3 Series",
    color: "Dark Gray",
    year: 2022,
    price: "$43,000",
    description:
      "A premium sedan blending driving pleasure with German engineering excellence. The BMW 3 Series delivers precise steering, balanced handling, and a refined interior packed with luxury touches. It’s a top choice for professionals seeking a blend of performance, prestige, and comfort.",
  },
  {
    id: 7,
    name: "Audi A4",
    color: "Silver",
    year: 2023,
    price: "$41,200",
    description:
      "A refined sedan offering a smooth drive, elegant design, and modern features. The Audi A4 showcases quattro all-wheel drive, a sleek and quiet cabin, advanced infotainment, and smooth power delivery. It’s designed to offer a premium feel without compromising on agility.",
  },
  {
    id: 8,
    name: "Mercedes-Benz C-Class",
    color: "Metallic Black",
    year: 2022,
    price: "$44,500",
    description:
      "A classy executive car that balances comfort, tech, and prestige. The Mercedes C-Class includes leather interiors, ambient lighting, MBUX voice controls, and refined suspension for a buttery-smooth ride. It brings sophistication to your daily drives and stands as a status symbol worldwide.",
  },
  {
    id: 9,
    name: "Kia Sportage",
    color: "Green",
    year: 2023,
    price: "$27,000",
    description:
      "A compact SUV known for practicality, style, and value-packed features. The Kia Sportage offers great ground clearance, spacious interiors, modern tech like a digital cockpit, and a strong warranty. Whether in the city or on an adventure, it’s a dependable and stylish companion.",
  },
  {
    id: 10,
    name: "Hyundai Elantra",
    color: "White",
    year: 2023,
    price: "$20,000",
    description:
      "A sleek and efficient compact car with modern design and technology. The Hyundai Elantra impresses with its sharp exterior, roomy cabin, user-friendly infotainment, and great mileage. Ideal for students, small families, and anyone seeking affordable sophistication with a tech-savvy edge.",
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
