import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import CommonButton from "../Common/CommonButton";

const AppointmentBanner = () => {
  return (
    <div className="hero min-h-screen bg-base-100 lg:flex-row ">
      <div
        className={`hero-content p-0 flex-col md:flex-row md:gap-10 lg:gap-18 `}
        style={{
          backgroundImage: `url(${appointment})`,
        }}
      >
        <div className="flex-1 md:flex md:items-center md:justify-center ">
          <img src={doctor} className="w-full mt-[-200px]" alt="" />
        </div>

        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <CommonButton>Get Started</CommonButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
