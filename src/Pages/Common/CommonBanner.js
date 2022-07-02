const CommonHero = ({ image, flexProperty, children }) => {
  return (
    <div className="hero min-h-screen bg-base-200 lg:px-12">
      <div className={`hero-content flex-col ${flexProperty}`}>
        <div className="">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default CommonHero;
