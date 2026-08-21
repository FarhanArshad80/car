import React, { useEffect, useMemo, useState } from "react";
import CarCard from "./CarCard";
import CarDetails from "./CarDetails";

const defaultCars = [
  {
    id: 1,
    name: "Porsche 911",
    color: "Guards Red",
    year: 2024,
    price: "$124,900",
    type: "Performance",
    mileage: "3,420 mi",
    engine: "3.0L Twin-Turbo",
    power: "379 HP",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=90",
    description:
      "An iconic sports car engineered for pure driving emotion. The Porsche 911 combines timeless design, precision handling and thrilling performance.",
  },
  {
    id: 2,
    name: "BMW 3 Series",
    color: "Mineral Grey",
    year: 2023,
    price: "$48,500",
    type: "Luxury",
    mileage: "11,280 mi",
    engine: "2.0L Turbocharged",
    power: "255 HP",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=90",
    description:
      "A sophisticated sports sedan that blends German engineering, premium comfort and confident everyday performance.",
  },
  {
    id: 3,
    name: "Range Rover Sport",
    color: "Santorini Black",
    year: 2024,
    price: "$92,800",
    type: "SUV",
    mileage: "6,890 mi",
    engine: "3.0L Turbocharged",
    power: "355 HP",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=90",
    description:
      "A commanding luxury SUV with an elegant interior, advanced technology and the confidence to go anywhere.",
  },
  {
    id: 4,
    name: "Mercedes-Benz S-Class",
    color: "Obsidian Black",
    year: 2023,
    price: "$118,000",
    type: "Executive",
    mileage: "8,540 mi",
    engine: "3.0L Inline-6",
    power: "429 HP",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=90",
    description:
      "The definition of executive luxury, offering a serene cabin, intelligent technology and effortless performance.",
  },
  {
    id: 5,
    name: "Audi R8",
    color: "Daytona Grey",
    year: 2022,
    price: "$164,900",
    type: "Performance",
    mileage: "5,120 mi",
    engine: "5.2L V10",
    power: "602 HP",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=90",
    description:
      "A dramatic V10 supercar that delivers breathtaking acceleration, quattro grip and unmistakable road presence.",
  },
  {
    id: 6,
    name: "Tesla Model S",
    color: "Pearl White",
    year: 2024,
    price: "$89,990",
    type: "Electric",
    mileage: "4,650 mi",
    engine: "Dual Motor Electric",
    power: "670 HP",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=90",
    description:
      "A futuristic electric sedan with instant acceleration, long-range capability and a beautifully minimal cabin.",
  },
];

function getInitialCars() {
  try {
    const savedCars = localStorage.getItem("veloce-cars");

    if (savedCars) {
      return JSON.parse(savedCars);
    }

    return defaultCars;
  } catch (error) {
    return defaultCars;
  }
}

export default function DisplayCarList() {
  const [cars, setCars] = useState(getInitialCars);
  const [selectedCar, setSelectedCar] = useState(null);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("veloce-cars", JSON.stringify(cars));
  }, [cars]);

  const categories = [
    "All",
    ...new Set(cars.map((car) => car.type)),
  ];

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const searchableContent = `
        ${car.name}
        ${car.color}
        ${car.type}
        ${car.year}
      `.toLowerCase();

      const matchesSearch = searchableContent.includes(
        query.toLowerCase()
      );

      const matchesFilter =
        activeFilter === "All" || car.type === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [cars, query, activeFilter]);

  function handleAddCar(car) {
    const duplicatedCar = {
      ...car,
      id: Date.now(),
      name: `${car.name} Edition`,
    };

    setCars((currentCars) => [...currentCars, duplicatedCar]);
    setSelectedCar(duplicatedCar);
  }

  function handleDeleteCar(id) {
    setCars((currentCars) =>
      currentCars.filter((car) => car.id !== id)
    );

    setSelectedCar((currentCar) =>
      currentCar?.id === id ? null : currentCar
    );
  }

  return (
    <div className="inventory-layout">
      <div className="inventory-main">
        <div className="inventory-toolbar">
          <div>
            <p className="inventory-count">
              {cars.length} vehicles available
            </p>

            <h3 className="inventory-title">
              Curated inventory
            </h3>
          </div>

          <div className="search-wrapper">
            <span>⌕</span>

            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search vehicles..."
              aria-label="Search vehicles"
            />
          </div>
        </div>

        <div className="filter-list">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeFilter === category
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="cars-grid">
          {filteredCars.map((car, index) => (
            <CarCard
              key={car.id}
              car={car}
              index={index}
              selected={selectedCar?.id === car.id}
              onSelect={setSelectedCar}
              onAdd={handleAddCar}
              onDelete={handleDeleteCar}
            />
          ))}

          {filteredCars.length === 0 && (
            <div className="empty-state">
              <span>⌕</span>
              <h3>No vehicles found</h3>
              <p>Try another search term or category.</p>
            </div>
          )}
        </div>
      </div>

      <aside className="details-sidebar">
        {selectedCar ? (
          <CarDetails car={selectedCar} />
        ) : (
          <div className="empty-details">
            <div className="empty-details-icon">↗</div>
            <h3>Select a vehicle</h3>
            <p>
              Click any vehicle card to see its full specifications.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}