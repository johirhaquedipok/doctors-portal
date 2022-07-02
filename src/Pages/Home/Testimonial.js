import quotes from "../../assets/icons/quote.svg";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
const Testimonial = () => {
  return (
    <div className="p-4 my-16 md:my-28">
      {/* first part */}
      <div className="mb-10 md:mb-20 flex items-center justify-between md:items-start ">
        <div>
          <h2 className="text-xl font-bold text-secondary mb-1.5">
            Testimonial
          </h2>
          <p className="text-3xl font-normal text-accent">
            What Our Patients Says
          </p>
        </div>
        <div>
          <img src={quotes} alt="" className="w-24 md:w-32 lg:w-40" />
        </div>
      </div>
      {/* second part */}
      <div className="grid md:grid-cols-3 md:gap-7 lg:gap-12">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
