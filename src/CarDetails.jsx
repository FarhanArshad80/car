import React from "react";

export default function CarDetails({ car }) {
  function handleInquiry() {
    window.alert(
      `Thank you for your interest in the ${car.name}. Our team will contact you shortly.`
    );
  }

  return (
    <article className="car-details">
      <div className="details-image-wrapper">
        <img
          src={car.image}
          alt={car.name}
          className="details-image"
        />

        <div className="details-image-overlay"></div>

        <div className="details-badge">
          Available now
        </div>
      </div>

      <div className="details-content">
        <div className="details-header">
          <div>
            <p className="details-eyebrow">
              Selected vehicle
            </p>

            <h2>{car.name}</h2>

            <p className="details-subtitle">
              {car.year} {car.type} · {car.color}
            </p>
          </div>

          <div className="details-status">
            ● In stock
          </div>
        </div>

        <div className="details-price-row">
          <div>
            <span>Starting price</span>
            <strong>{car.price}</strong>
          </div>

          <div className="details-rating">
            <span>★</span>
            <strong>4.9</strong>
            <small>Owner rating</small>
          </div>
        </div>

        <p className="details-description">
          {car.description}
        </p>

        <div className="details-specifications">
          <div>
            <span>Year</span>
            <strong>{car.year}</strong>
          </div>

          <div>
            <span>Mileage</span>
            <strong>{car.mileage}</strong>
          </div>

          <div>
            <span>Engine</span>
            <strong>{car.engine}</strong>
          </div>

          <div>
            <span>Power</span>
            <strong>{car.power}</strong>
          </div>
        </div>

        <button
          className="details-action-button"
          onClick={handleInquiry}
        >
          Request information
          <span>→</span>
        </button>
      </div>
    </article>
  );
}