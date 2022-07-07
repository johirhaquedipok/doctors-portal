import { Link } from "react-router-dom";
const CommonButton = ({ address, children }) => {
  return (
    <Link to="/appointment">
      <button
        as={Link}
        className="btn btn-primary bg-gradient-to-r from-secondary to-primary bg-gradient-90 uppercase text-white font-bold"
      >
        {children}
      </button>
    </Link>
  );
};

export default CommonButton;
