import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import logo from "../../assets/images/logo.jpg";

import Container from "../ui/Container";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        isScrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-white"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div>
            {/* <h1 className="text-2xl font-bold text-slate-900 sm:hidden">
              Metcare
            </h1> */}

            <img src={logo} alt="Metcare" className="sm:h-16 h-11" />

            {/* <p className="text-sm text-green-600">Healthcare Solutions</p> */}
          </div>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-green-600"
                    : "text-slate-700 transition hover:text-green-600"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl md:hidden"
          >
            {isOpen ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="pb-6 md:hidden">
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-green-600" : "text-slate-700"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
