const CommonHero = ({ image, flexPorperty, children }) => {
  return (
    <div className="hero min-h-screen bg-base-200 px-12">
      <div className={`hero-content flex-col ${flexPorperty}`}>
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CommonHero;
