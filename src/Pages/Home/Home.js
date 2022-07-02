import AppointmentBanner from "./AppointmentBanner";
import ContactWithUs from "./ContactWithUs";
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
      <ContactWithUs />
    </div>
  );
};

export default Home;
