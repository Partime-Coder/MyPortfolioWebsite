import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // SMOOTH CUSTOM SCROLL FUNCTION
  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const startPosition = window.pageYOffset;
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    const easeOutExpo = (t) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const run = startPosition + distance * easeOutExpo(progress);
      window.scrollTo(0, run);

      if (progress < 1) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const goTo = (id) => {
    smoothScrollTo(id);
    setOpen(false);
  };

  return (
    <div
      className={`w-full h-15 top-0 z-50 transition-all duration-300
      ${sticky ? "fixed bg-pink-100 shadow-md" : "absolute bg-transparent"}`}
    >
      <div className="w-[95%] sm:w-[90%] mx-auto h-15 flex items-center justify-between header">

        {/* Mobile Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer sm:hidden menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Nav */}
        <div className="nav hidden sm:block">
          <ul className="flex gap-5">
            <li onClick={() => goTo("home")}>Home</li>
            <li onClick={() => goTo("skill")}>Skills</li>
            <li onClick={() => goTo("experience")}>Experience</li>
            <li onClick={() => goTo("about")}>About</li>
            <li onClick={() => goTo("project")}>Project</li>
          </ul>
        </div>

        <div onClick={() => goTo("contact")} className="contactbtn btn">
          Contact
        </div>
      </div>


      {/* Mobile Dropdown */}
      <div
        className={`sm:hidden bg-pink-100 shadow-md py-4 absolute left-0 w-full -z-10
    transition-all duration-300 ease-out 
    ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
  `}
      >
        <ul className="flex flex-col gap-4 text-center text-blue-700">
          <li onClick={() => goTo("home")}>Home</li>
          <li onClick={() => goTo("skill")}>Skills</li>
          <li onClick={() => goTo("experience")}>Experience</li>
          <li onClick={() => goTo("about")}>About</li>
          <li onClick={() => goTo("project")}>Project</li>
          <li onClick={() => goTo("contact")}>Contact</li>
        </ul>
      </div>

    </div>
  );
}

export default Header;
