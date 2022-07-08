import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";
import CommonBanner from "../Common/CommonBanner";
const AppointmentPageBanner = () => {
  const [date, setDate] = useState(new Date(2022, 5, 10));

  return (
    <CommonBanner image={chair} flexProperty={"md:flex-row-reverse"}>
      <DayPicker mode="single" selected={date} onSelect={setDate} />
      <p>You have selected : {format(date, "pp")}</p>
    </CommonBanner>
  );
};

export default AppointmentPageBanner;
