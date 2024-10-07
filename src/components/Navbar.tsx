// Navbar component.
import { useState } from "react";
import ThemeToggle from "../utils/ThemeToggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral-100 dark:bg-nav-footer-dark p-4">
      <div className="flex justify-around items-center">
        <div className="flex justify-center items-center gap-2">
          <a
            href="#"
            className="text-[#92cfbb] dark:text-white text-2xl font-roboto"
          >
            PANAT
          </a>
        </div>

        <div className="flex justify-between items-center gap-16">
          {/* Toggle menu */}
          <div className="md:hidden gap-3">
            <button
              id="menu-toggle"
              className="dark:text-white"
              onClick={toggleMenu}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Normal menu */}
          <ul className="hidden md:flex gap-5">
            <li>
              <a
                href="#"
                className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#passions"
                className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
              >
                Passions
              </a>
            </li>

            <li>
              <a
                href="#profile"
                className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
              >
                My profile
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex flex-1">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen ? (
        <ul className="md:hidden flex flex-col items-center gap-5">
          <li className="py-2">
            <a
              href="#"
              className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
            >
              Home
            </a>
          </li>

          <li className="py-2">
            <a
              href="#about"
              className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
            >
              About
            </a>
          </li>

          <li className="py-2">
            <a
              href="#skills"
              className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
            >
              Skills
            </a>
          </li>

          <li className="py-2">
            <a
              href="#passions"
              className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
            >
              Passions
            </a>
          </li>

          <li className="py-2">
            <a
              href="#profile"
              className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
            >
              My profile
            </a>
          </li>

          <li className="py-2">
            <a
              href="#contact"
              className="dark:text-white font-kanit hover:text-green-400 dark:hover:text-green-400"
            >
              Contact
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

export default Navbar;

