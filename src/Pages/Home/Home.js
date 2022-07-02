import AppointmentBanner from "./AppointmentBanner";
import HeroBanner from "./HeroBanner";
import Info from "./Info";
import MiddleBanner from "./MiddleBanner";
import Service from "./Service";

const Home = () => {
  return (
    <div className="lg:px-12">
      <HeroBanner />
      <Info />
      <Service />
      <MiddleBanner />
      <AppointmentBanner />
    </div>
  );
};

export default Home;
