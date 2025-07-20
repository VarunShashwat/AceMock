import { Link } from "react-router-dom";
import AceMockLogo from "../assets/he.png";

export const LogoContainer = () => {
  return (
    <Link to="/" className="flex flex-col items-center text-center space-y-1">
      {/* App Name */}
      <h1 className="text-xl font-semibold text-gray-500 tracking-wide">AceMock</h1>



      {/* Logo */}
      <img
        src={AceMockLogo}
        alt="AceMock Logo"
        className="w-16 h-16 rounded-full object-cover"
      />

      {/* Slogan */}
      <p className="text-xs text-gray-500 tracking-wide">
        Train Today. Ace Tomorrow.
      </p>
    </Link>
  );
};
