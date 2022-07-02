import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import CommonButton from "../Common/CommonButton";

const AppointmentBanner = () => {
  return (
    <div className="hero min-h-screen bg-base-100 lg:flex-row ">
      <div
        className={`hero-content p-0 flex-col md:flex-row md:gap-5 lg:gap-10 lg:gap-18 px-4 py-8 md:py-0 `}
        style={{
          backgroundImage: `url(${appointment})`,
        }}
      >
        <div className=" hidden  md:flex-1 md:flex md:items-center md:justify-center ">
          <img
            src={doctor}
            className="w-full md:mt-[-2.6em]  lg:mt-[-6.25em]"
            alt=""
          />
        </div>

        <div className="md:flex-1 ">
          <p className="text-secondary font-bold mb-2">Appointment</p>
          <h2 className="text-4xl md:text-3xl font-bold text-white">
            Make an appointment Today
          </h2>
          <p className="py-4 md:py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <CommonButton address={"/appointment"}>Get Started</CommonButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
