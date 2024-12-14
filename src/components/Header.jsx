import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/signup" className="hover:underline">Signup</Link></li>
          <li><Link to="/profile" className="hover:underline">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
