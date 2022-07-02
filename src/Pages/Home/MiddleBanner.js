import treatment from "../../assets/images/treatment.png";
import CommonBanner from "../Common/CommonBanner";
import CommonButton from "../Common/CommonButton";
const MiddleBanner = () => {
  return (
    <CommonBanner
      image={treatment}
      flexProperty={"md:flex-row md:mt-28 background"}
    >
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

export default MiddleBanner;
