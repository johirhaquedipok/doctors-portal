import tooth from "../../assets/images/cavity.png";
import flouride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import SectionDivider from "../Common/SectionDivider";
import ServiceCards from "./ServiceCards/ServiceCards";
const Service = () => {
  return (
    <>
      <SectionDivider></SectionDivider>

      <div className="grid gap-4 md:grid-cols-3 ">
        <ServiceCards image={flouride}>
          <h2 className="card-title">Fluoride Treatment</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </ServiceCards>
        <ServiceCards image={tooth}>
          <h2 className="card-title">Cavity Filling</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </ServiceCards>
        <ServiceCards image={whitening}>
          <h2 className="card-title">Teeth Whitening</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </ServiceCards>
      </div>
    </>
  );
};

export default Service;
