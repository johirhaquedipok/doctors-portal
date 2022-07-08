import { useState } from "react";
import AppointmentPageBanner from "./AppointmentPageBanner";

const AppointMent = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentPageBanner date={date} setDate={setDate} />
    </div>
  );
};

export default AppointMent;
