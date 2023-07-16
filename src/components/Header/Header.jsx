import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" h-16 border-b-2">
      <nav className="default-container h-auto">
        <Link to="/" className="text-xl primary-text font-bold">
          Learnify
        </Link>
      </nav>
    </div>
  );
};

export default Header;
