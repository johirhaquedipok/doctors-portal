import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import BookingService from "./BookingService";
const AvailableAppointment = ({ date }) => {
  const [bookingService, setBookingService] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, "PP");
  useEffect(() => {
    const fetchService = async () => {
      const response = await fetch(
        `http://localhost:5000/available?date=${formatedDate}`
      );
      const data = await response.json();

      setBookingService(data);
    };
    fetchService();
  }, [formatedDate]);
  return (
    <div>
      <p className="text-center text-secondary text-3xl mb-4">
        You have selected : {format(date, "PP")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookingService.map((service) => (
          <BookingService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
