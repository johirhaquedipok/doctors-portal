import doctor from "../../assets/images/doctor.png";
import CommonBanner from "../Common/CommonBanner";
import CommonButton from "../Common/CommonButton";
const AppointmentBanner = () => {
  return (
    <CommonBanner image={doctor} flexProperty={"lg:flex-row "}>
      <h1 className="text-5xl font-bold">
        Exceptional Dental Care, on Your Terms
      </h1>
      <p className="py-6">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsumis that it has a more-or-less normal distribution of
        letters,as opposed to using 'Content here, content here', making it look
        like readable English. Many desktop publishing packages and web page
      </p>
      <CommonButton>Get Started</CommonButton>
    </CommonBanner>
  );
};

export default AppointmentBanner;
