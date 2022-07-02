import AppointmentBanner from "./AppointmentBanner";
import HeroBanner from "./HeroBanner";
import Info from "./Info";
import MiddleBanner from "./MiddleBanner";
import Service from "./Service";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="lg:px-12">
      <HeroBanner />
      <Info />
      <Service />
      <MiddleBanner />
      <AppointmentBanner />
      <Testimonial />
    </div>
  );
};

export default Home;
