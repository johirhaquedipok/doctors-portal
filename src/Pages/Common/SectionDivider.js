const SectionDivider = ({ text }) => {
  return (
    <div className={`mt-32 mb-16 ${text ? text : "text-left"}`}>
      <h2 className="text-xl font-bold text-secondary mb-1.5">OUR SERVICES</h2>
      <p className="text-3xl font-normal text-accent">SERVICES WE PROVIDE</p>
    </div>
  );
};

export default SectionDivider;
