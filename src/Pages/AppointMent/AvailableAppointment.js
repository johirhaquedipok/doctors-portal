import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import BookingService from "./BookingService";
const AvailableAppointment = ({ date }) => {
  const [bookingService, setBookingService] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    const fetchService = async () => {
      const response = await fetch("services.json");
      const data = await response.json();

      setBookingService(data);
    };
    fetchService();
  }, []);
  return (
    <div>
      <p className="text-center text-secondary">
        You have selected : {format(date, "PP")}
      </p>
      <p>You have selected : {format(date, "PP")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookingService.map((service) => (
          <BookingService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} />}
    </div>
  );
};

export default AvailableAppointment;
