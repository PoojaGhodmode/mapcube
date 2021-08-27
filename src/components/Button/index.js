import { Link } from "react-router-dom";

const Button = ({ text, linkto }) => {
  return (
    <div className="btn">
      <Link to={linkto} className="link">
        {text}
      </Link>
    </div>
  );
};

export default Button;
