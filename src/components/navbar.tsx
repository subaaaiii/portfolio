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
import { GoDotFill } from "react-icons/go";

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
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
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
      },
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
        <div className="flex items-center justify-between py-4 px-2 ">
          <div className=" relative flex gap-2 items-center border border-text text-text rounded-full px-4 py-1.5 animate__animated animate__fadeIn">
            <GoDotFill className="text-green-500 hidden lg:block animate__animated animate__flash [animation-delay:2500ms] animate__slower animate__infinite" />
            <div className="hidden lg:block">available for new projects</div>
            <GoDotFill className="text-green-500 block lg:hidden" />
            <div className="flex flex-col block lg:hidden">
              <div>available</div>
              <div className="absolute -bottom-1.5 left-6  bg-bg text-[10px] p-0.3">
                for new projects
              </div>
            </div>
          </div>
          <div className=" flex items-center space-x-4 md:hidden">
            <ThemeToggle />

            <button
              aria-label="Open navigation menu"
              onClick={() => setOpenMobileNav(!openMobileNav)}
            >
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
                    activeSection === "home" ? "font-semibold" : "bg-surface"
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
                    activeSection === "about" ? "font-semibold" : "bg-surface"
                  } rounded-md`}
                >
                  <HiOutlineUser className="w-6 h-6" />
                  <span className="text-lg text-">About me</span>
                </button>
                <button
                  onClick={() => {
                    setOpenMobileNav(false);
                    handleNavigate("skills");
                  }}
                  className={`hover:underline  flex items-center gap-2 px-2 py-4  ${
                    activeSection === "skills" ? "font-semibold" : "bg-surface"
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
                      ? "font-semibold"
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
                    activeSection === "contact" ? "font-semibold" : "bg-surface"
                  } rounded-md`}
                >
                  <MdOutlineCall className="w-6 h-6" />
                  <span className="text-lg">Contact</span>
                </button>
                <a
                  href="/Subairi-resume.pdf"
                  download="Subairi-CV.pdf"
                  className="hover:underline flex items-center gap-2 px-2 py-4 bg-text text-bg rounded-lg"
                >
                  <IoMdDownload className="w-6 h-6" />
                  <span className="text-lg">Download cv</span>
                </a>
              </div>
            </div>
          )}
          <div className="flex md:space-x-3 lg:space-x-10 items-center hidden md:flex animate__animated animate__fadeIn">
            <a
              href="/#home"
              className={`hover:font-semibold ${
                activeSection === "home" ? "font-semibold" : ""
              }`}
            >
              Home
            </a>
            <a
              href="/#about"
              className={`hover:font-semibold  justify-center ${
                activeSection === "about" ? "font-semibold" : ""
              }`}
            >
              About me
            </a>
            <a
              href="/#skills"
              className={`hover:font-semibold ${
                activeSection === "skills" ? "font-semibold" : ""
              }`}
            >
              Skills
            </a>
            <a
              href="/#projects"
              className={`hover:font-semibold ${
                activeSection === "projects" ? "font-semibold" : ""
              }`}
            >
              Projects
            </a>
            <a
              href="/#contact"
              className={`hover:font-semibold ${
                activeSection === "contact" ? "font-semibold" : ""
              }`}
            >
              Contact
            </a>
            <ThemeToggle />
            <a
              href="/Subairi-resume.pdf"
              download="Subairi-CV.pdf"
              className="hover:font-semibold py-2 px-4 bg-text text-bg rounded-lg animate__animated animate__fadeIn"
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
