import { useState } from "react";
import AppointmentPageBanner from "./AppointmentPageBanner";
import AvailableAppointment from "./AvailableAppointment";

const AppointMent = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="lg:px-12">
      <AppointmentPageBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
    </div>
  );
};

export default AppointMent;
