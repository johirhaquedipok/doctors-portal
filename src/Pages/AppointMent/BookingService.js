import React from "react";

const BookingService = ({ service, setTreatment, date }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="card-title justify-center text-center">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red">No slots available</span>
          )}
        </p>
        <p>{slots.length} spaces available</p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            className="btn bg-secondary border-0 text-white bg-gradient-to-r from-secondary to-primary bg-gradient-90"
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            // class="btn modal-button"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookingService;
