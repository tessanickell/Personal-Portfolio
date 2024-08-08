import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NavLinks = () => {
  const location = useLocation();

  return (
    <>
      <a href="#" style={{ textDecoration: "none" }}>
        <p
          className={`${
            location.pathname === "#" ? "text-[#B988C5]" : "text-white"
          } hover:text-[#B988C5]`}
        >
          Home
        </p>
      </a>
      <a href="#about" style={{ textDecoration: "none" }}>
        <p
          className={`${
            location.pathname === "#about" ? "text-[#B988C5]" : "text-white"
          } hover:text-[#B988C5] `}
        >
          About
        </p>
      </a>
      <a href="#projects" style={{ textDecoration: "none" }}>
        <p
          className={`${
            location.pathname === "#projects" ? "text-[#B988C5]" : "text-white"
          } hover:text-[#B988C5] `}
        >
          Projects
        </p>
      </a>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <p
          className={`${
            location.pathname === "/contact"
              ? "text-[#B988C5] outline-[#B988C5]"
              : "text-white"
          } hover:text-[#B988C5] hover:outline-[#B988C5] outline outline-1 outline-white px-4 py-1`}
        >
          Contact
        </p>
      </Link>
    </>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants
  const mobileNavListVariant = {
    hidden: { y: -20, height: 0, opacity: 0 },
    show: { opacity: 1, height: "auto", y: 0 },
  };

  const mobileNavContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const mobileNavExitProps = {
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <header className="mx-auto flex w-full flex-wrap flex-col z-10 top-0 absolute md:relative">
      <nav className="flex md:pr-8 items-center justify-end overflow-hidden bg-[#141416] py-5">
        {/* Handle Navbar when full screen */}
        <div className="hidden gap-10 items-center justify-end md:flex text-lg">
          <NavLinks />
        </div>

        {/* Handle Navbar when mobile */}
        <div className="flex w-[75px] justify-end md:hidden">
          <button
            onClick={toggleNavBar}
            className="bg-transparent p-2 border-none"
          >
            {isOpen ? (
              <X size={"40px"} className=" text-white" />
            ) : (
              <Menu size={"40px"} className=" text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Animate Navbar toggle on mobile */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="basis-full md: bg-[#141416] flex flex-col items-center border-2 border-pink-300 text-xl gap-4 p-4"
          >
            <motion.div
              className="leading-3"
              variants={mobileNavListVariant}
              {...mobileNavExitProps}
            >
              <a href="/" style={{ textDecoration: "none" }}>
                <p
                  className={`${
                    location.pathname === "/" ? "text-[#B988C5] " : "text-white"
                  }`}
                >
                  Home
                </p>
              </a>
            </motion.div>
            <motion.div
              className="leading-3"
              variants={mobileNavListVariant}
              {...mobileNavExitProps}
            >
              <a href="#about" style={{ textDecoration: "none" }}>
                <p
                  className={`${
                    location.pathname === "/about"
                      ? "text-[#B988C5] "
                      : "text-white"
                  } `}
                >
                  About
                </p>
              </a>
            </motion.div>
            <motion.div
              className="leading-3"
              variants={mobileNavListVariant}
              {...mobileNavExitProps}
            >
              <a href="#projects" style={{ textDecoration: "none" }}>
                <p
                  className={`${
                    location.pathname === "/projects"
                      ? "text-[#B988C5] "
                      : "text-white"
                  } `}
                >
                  Projects
                </p>
              </a>
            </motion.div>
            <motion.div
              className="leading-3"
              variants={mobileNavListVariant}
              {...mobileNavExitProps}
            >
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <p
                  className={`${
                    location.pathname === "/contact"
                      ? "text-[#B988C5] "
                      : "text-white"
                  } `}
                >
                  Contact
                </p>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
