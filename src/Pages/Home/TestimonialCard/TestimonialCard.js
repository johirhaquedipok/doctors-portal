const TestimonialCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl p-7 mb-11 md:mb-0">
      <p className="mb-9">
        It is a long established fact that by the readable content of a lot
        layout. The point of using Lorem a more-or-less normal distribu to using
        Content here, content
      </p>
      <div className="flex items-center">
        {/* avatar */}
        <div class="avatar pr-3.5 ">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        {/* title */}
        <div>
          <p className="font-bold">Winson Herry</p>
          <p>California</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
