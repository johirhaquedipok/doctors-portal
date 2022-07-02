const CommonHero = ({ image, flexProperty, style, children }) => {
  return (
    <div className="hero min-h-screen bg-base-100" style={style}>
      <div
        className={`hero-content flex-col md:gap-10 mt-7 lg:gap-18 ${flexProperty}`}
      >
        <div className="flex-1 md:flex md:items-center md:justify-center md:p-10 lg:p-20 ">
          <img src={image} className="w-full rounded-lg shadow-2xl " alt="" />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default CommonHero;
