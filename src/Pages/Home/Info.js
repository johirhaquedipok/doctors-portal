import watch from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCards from "./InfoCards/InfoCards";
const Info = () => {
  return (
    <div className="grid p-4 md:grid-cols-3  md:p-2 lg:grid-cols-3 gap-4">
      <InfoCards
        image={watch}
        bgColor={"bg-gradient-to-r from-secondary to-primary bg-gradient-90"}
      >
        <h2 className="card-title capitalize mb-3.5">Opening Hours</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </InfoCards>
      <InfoCards image={marker} bgColor={"bg-accent"}>
        <h2 className="card-title capitalize mb-3.5">Visit our location</h2>
        <p>Brooklyn, NY 10036, United States</p>
      </InfoCards>
      <InfoCards
        image={phone}
        bgColor={"bg-gradient-to-r from-secondary to-primary bg-gradient-90"}
      >
        <h2 className="card-title capitalize mb-3.5">Contact us now</h2>
        <p>+000 123 456789</p>
      </InfoCards>
    </div>
  );
};

export default Info;
