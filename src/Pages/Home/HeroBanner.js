import chair from "../../assets/images/chair.png";
import CommonBanner from "../Common/CommonBanner";
import CommonButton from "../Common/CommonButton";
const Banner = () => {
  return (
    <CommonBanner image={chair} flexPorperty={"lg:flex-row-reverse"}>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <CommonButton>Get Started</CommonButton>
    </CommonBanner>
  );
};

export default Banner;
