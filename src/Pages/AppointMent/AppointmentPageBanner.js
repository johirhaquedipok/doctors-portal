import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
const AppointmentPageBanner = ({ date, setDate }) => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div
          className={`hero-content flex-col md:gap-10 mt-7 lg:gap-18 md:flex-row-reverse`}
        >
          <div className="flex-1 md:flex md:items-center md:justify-center md:p-10 lg:p-20 ">
            <img src={chair} className="w-full rounded-lg shadow-2xl " alt="" />
          </div>
          <div className="flex-1 md:flex md:items-center md:justify-center md:p-10 lg:p-20">
            <DayPicker mode="single" date={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPageBanner;
