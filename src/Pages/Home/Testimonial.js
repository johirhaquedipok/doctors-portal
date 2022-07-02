import quotes from "../../assets/icons/quote.svg";
const Testimonial = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between md:items-start ">
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
    </div>
  );
};

export default Testimonial;
