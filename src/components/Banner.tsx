import { Link } from "react-router";
import "../styles/banner-animations.css";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[350px] bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 overflow-hidden rounded-lg shadow-lg my-2 mx-1">
      {/* Animated Books */}
      <div className="absolute left-8 top-10 animate-bounce">
        <span className="text-6xl">📚</span>
      </div>
      <div className="absolute right-8 bottom-10 animate-bounce animation-delay-200">
        <span className="text-6xl">📖</span>
      </div>
      {/* Main Content */}
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg animate-fade-in-down">
          Welcome to <span className="text-yellow-800">Library Management</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-800 font-medium animate-fade-in-up">
          Discover, Borrow, and Manage Books Effortlessly!
        </p>
        <Link to="/books">
          <button className="mt-8 btn btn-primary btn-lg shadow-lg animate-pulse">
            Explore Collection
          </button>
        </Link>
      </div>
      {/* Animated floating shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-float">
        <span className="text-5xl opacity-30">✨</span>
      </div>
      <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 animate-float-slow">
        <span className="text-5xl opacity-30">🌟</span>
      </div>
    </div>
  );
};

export default Banner;
