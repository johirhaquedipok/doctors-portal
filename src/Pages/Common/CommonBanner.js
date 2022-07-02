const CommonHero = ({ image, flexProperty, children }) => {
  return (
    <div className="hero min-h-screen bg-base-100  ">
      <div className={`hero-content flex-col ${flexProperty}`}>
        <div className="">
          <img src={image} className="w-full rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default CommonHero;
