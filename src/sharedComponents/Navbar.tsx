import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Pass setMenuOpen(false) to close menu on mobile link click
  const navLinks = (onLinkClick?: () => void) => (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `block py-2 px-4 rounded transition text-white  ${
            isActive ? "bg-yellow-400 text-gray-900 font-bold" : ""
          }`
        }
        onClick={onLinkClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/books"
        className={({ isActive }) =>
          `block py-2 px-4 rounded transition text-white  ${
            isActive ? "bg-yellow-400 text-gray-900 font-bold" : ""
          }`
        }
        onClick={onLinkClick}
      >
        AllBooks
      </NavLink>
      <NavLink
        to="/create-book"
        className={({ isActive }) =>
          `block py-2 px-4 rounded transition text-white  ${
            isActive ? "bg-yellow-400 text-gray-900 font-bold" : ""
          }`
        }
        onClick={onLinkClick}
      >
        Add Book
      </NavLink>
      <NavLink
        to="/borrow-summary"
        className={({ isActive }) =>
          `block py-2 px-4 rounded transition text-white  ${
            isActive ? "bg-yellow-400 text-gray-900 font-bold" : ""
          }`
        }
        onClick={onLinkClick}
      >
        Borrow Summary
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gray-500 bg-opacity-95">
      <div className="w-[95%] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-yellow-400 font-extrabold text-2xl md:text-3xl tracking-wide"
            >
              Library Management
            </Link>
          </div>

          {/* Desktop/Tablet Nav */}
          <div className="hidden md:flex gap-2">{navLinks()}</div>

          {/* Hamburger - mobile only */}
          <div className="flex md:hidden">
            <button
              className="text-gray-200 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                // Cross Icon
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 mt-12 bg-opacity-40 backdrop-blur-sm transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        } md:hidden`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute left-0 right-0 top-0 mx-4 mt-4 rounded-lg bg-gray-500 bg-opacity-95 shadow-lg transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
          style={{ pointerEvents: menuOpen ? "auto" : "none" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center py-6 space-y-2">
            {navLinks(() => setMenuOpen(false))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
