import Skills from "./skills";
import AboutMe from "./about";
import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";
import { useLocation } from "react-router";
import { useEffect } from "react";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default LandingPage;
