const InfoCards = ({ image, bgColor, children }) => {
  return (
    <div className={`card lg:card-side shadow-xl ${bgColor}  text-white px-8`}>
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default InfoCards;
