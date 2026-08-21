import React from "react";

export default function CarCard({
  car,
  index,
  selected,
  onSelect,
  onAdd,
  onDelete,
}) {
  return (
    <article
      className={`car-card ${selected ? "selected-card" : ""}`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onClick={() => onSelect(car)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onSelect(car);
        }
      }}
      tabIndex={0}
    >
      <div className="car-image-wrapper">
        <img
          src={car.image}
          alt={car.name}
          className="car-image"
        />

        <div className="car-image-overlay"></div>

        <div className="car-category">
          {car.type}
        </div>

        <div className="car-year">
          {car.year}
        </div>
      </div>

      <div className="car-card-content">
        <div className="car-card-top">
          <div>
            <h3>{car.name}</h3>

            <p>
              {car.color} <span>•</span> {car.mileage}
            </p>
          </div>

          <strong>{car.price}</strong>
        </div>

        <div className="car-card-divider"></div>

        <div className="car-card-specs">
          <span>
            <small>Engine</small>
            {car.engine}
          </span>

          <span>
            <small>Power</small>
            {car.power}
          </span>
        </div>

        <div className="car-card-actions">
          <button
            className="card-gold-button"
            onClick={(event) => {
              event.stopPropagation();
              onAdd(car);
            }}
          >
            Duplicate
          </button>

          <button
            className="card-delete-button"
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