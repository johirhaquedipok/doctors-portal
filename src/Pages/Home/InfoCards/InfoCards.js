const InfoCards = ({ image, bgColor, children }) => {
  return (
    <div
      className={`card  shadow-xl ${bgColor} pt-6  text-white md:px-0  lg:pl-6 lg:card-side`}
    >
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default InfoCards;
