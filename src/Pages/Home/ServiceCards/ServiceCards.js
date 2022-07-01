const ServiceCards = ({ image, children }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">{children}</div>
    </div>
  );
};

export default ServiceCards;
