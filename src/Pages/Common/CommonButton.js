const CommonButton = ({ children }) => {
  return (
    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary bg-gradient-90 uppercase text-white font-bold">
      {children}
    </button>
  );
};

export default CommonButton;
