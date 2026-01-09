import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
      <Link to="/" className="text-yellow-600 font-bold hover:text-yellow-800">
        Home
      </Link>
      <Link to="/dashboard" className="text-yellow-600 font-bold hover:text-yellow-800">
        Dashboard
      </Link>
      <Link to="/products" className="text-yellow-600 font-bold hover:text-yellow-800">
        Products
      </Link>
      <Link to="/signin" className="text-white bg-yellow-500 px-4 py-1 rounded hover:bg-yellow-600">
        Sign In
      </Link>
    </nav>
  );
};
