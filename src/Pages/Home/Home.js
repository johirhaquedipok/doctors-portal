import AppointmentBanner from "./AppointmentBanner";
import HeroBanner from "./HeroBanner";
import Info from "./Info";
import MiddleBanner from "./MiddleBanner";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Info />
      <Service />
      <MiddleBanner />
      <AppointmentBanner />
    </>
  );
};

export default Home;
