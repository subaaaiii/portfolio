import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { TiFolderOpen } from "react-icons/ti";
import ThemeToggle from "./toggle";
import { IoMdDownload } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      let maxRatio = 0;
      let currentSection = activeSection;

      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio > maxRatio
        ) {
          maxRatio = entry.intersectionRatio;
          currentSection = entry.target.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    },
    {
      threshold: [0.2, 0.4, 0.6, 0.8],
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {openMobileNav && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpenMobileNav(false)}
        />
      )}
      <div
        className={`fixed bg-bg z-999 top-0 left-0 right-0 max-w-6xl mx-auto px-4 transition-all duration-300 ${scrolled ? "left-2 right-2 mt-2 shadow-md rounded-full " : ""} text-text`}
      >
        <div className="flex items-center justify-between py-4 px-2">
          <a href="/#" className="text-xl font-bold">
            Portfolio
          </a>
          <div className=" flex items-center space-x-4 md:hidden">
            <ThemeToggle />

            <button aria-label="Open navigation menu" onClick={() => setOpenMobileNav(!openMobileNav)}>
              {openMobileNav ? (
                <IoClose className="w-8 h-8" />
              ) : (
                <IoMenu className="w-8 h-8" />
              )}
            </button>
          </div>
          {openMobileNav && (
            <div className="absolute z-999 top-20 left-2 right-2 bg-bg px-4 rounded-lg ">
              <div className="flex flex-col space-y-4 my-4">
                <button
                  onClick={() => {
                    setOpenMobileNav(false);
                    handleNavigate("home");
                  }}
                  className={`hover:underline  flex items-center gap-2 px-2 py-4  ${
                    activeSection === "home"
                      ? "bg-secondary/20 font-semibold"
                      : "bg-surface"
                  } rounded-md`}
                >
                  <RiHome6Line className="w-6 h-6" />
                  <span className="text-lg">Home</span>
                </button>
                <button
                  onClick={() => {
                    setOpenMobileNav(false);
                    handleNavigate("about");
                  }}
                  className={`hover:underline  flex items-center gap-2 px-2 py-4  ${
                    activeSection === "about"
                      ? "bg-secondary/20 font-semibold"
                      : "bg-surface"
                  } rounded-md`}
                >
                  <HiOutlineUser className="w-6 h-6" />
                  <span className="text-lg">About me</span>
                </button>
                <button
                  onClick={() => {
                    setOpenMobileNav(false);
                    handleNavigate("skills");
                  }}
                  className={`hover:underline  flex items-center gap-2 px-2 py-4  ${
                    activeSection === "skills"
                      ? "bg-secondary/20 font-semibold"
                      : "bg-surface"
                  } rounded-md`}
                >
                  <FaCode className="w-6 h-6" />
                  <span className="text-lg">Skills</span>
                </button>
                <button
                  onClick={() => {
                    setOpenMobileNav(false);
                    handleNavigate("projects");
                  }}
                  className={`hover:underline  flex items-center gap-2 px-2 py-4  ${
                    activeSection === "projects"
                      ? "bg-secondary/20 font-semibold"
                      : "bg-surface"
                  } rounded-md`}
                >
                  <TiFolderOpen className="w-6 h-6" />
                  <span className="text-lg">Projects</span>
                </button>
                <button
                  onClick={() => {
                    setOpenMobileNav(false);
                    handleNavigate("contact");
                  }}
                  className={`hover:underline  flex items-center gap-2 px-2 py-4  ${
                    activeSection === "contact"
                      ? "bg-secondary/20 font-semibold"
                      : "bg-surface"
                  } rounded-md`}
                >
                  <MdOutlineCall className="w-6 h-6" />
                  <span className="text-lg">Contact</span>
                </button>
                <a
                  href="/Subairi-resume.pdf"
                  download="Subairi-CV.pdf"
                  className="hover:underline flex items-center gap-2 px-2 py-4 bg-secondary text-white rounded-lg"
                >
                  <IoMdDownload className="w-6 h-6" />
                  <span className="text-lg">Dowload cv</span>
                </a>
              </div>
            </div>
          )}
          <div className="flex md:space-x-4 lg:space-x-10 items-center hidden md:flex">
            <a
              href="/#home"
              className={`hover:font-semibold ${
                activeSection === "home" ? "text-secondary font-semibold" : ""
              }`}
            >
              Home
            </a>
            <a
              href="/#about"
              className={`hover:font-semibold ${
                activeSection === "about" ? "text-secondary font-semibold" : ""
              }`}
            >
              About me
            </a>
            <a
              href="/#skills"
              className={`hover:font-semibold ${
                activeSection === "skills" ? "text-secondary font-semibold" : ""
              }`}
            >
              Skills
            </a>
            <a
              href="/#projects"
              className={`hover:font-semibold ${
                activeSection === "projects"
                  ? "text-secondary font-semibold"
                  : ""
              }`}
            >
              Projects
            </a>
            <a
              href="/#contact"
              className={`hover:font-semibold ${
                activeSection === "contact"
                  ? "text-secondary font-semibold"
                  : ""
              }`}
            >
              Contact
            </a>
            <ThemeToggle />
            <a
              href="/Subairi-resume.pdf"
              download="Subairi-CV.pdf"
              className="hover:font-semibold py-2 px-4 bg-secondary text-white rounded-lg"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
