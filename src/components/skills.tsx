import goLogo from "../assets/go.webp";
import pythonLogo from "../assets/python.webp";
import expressLogo from "../assets/express.png";
import reactLogo from "../assets/react.webp";
import tailwindLogo from "../assets/tailwind.png";
import laravelLogo from "../assets/laravel.png";
import redisLogo from "../assets/redis.png";
import gitLogo from "../assets/git.webp";
import dockerLogo from "../assets/docker.png";
import SkillBars from "./skillBar";

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 min-h-screen text-text"
    >
      <div className="grid grid-cols-2 pt-50 mb-50">
        {/*  */}
        <div className="md:-mt-15 col-span-2 md:col-span-2 order-1 md:order-2 scroll-fadeInUp">
          <div className="text-4xl font-semibold text-center ">Skills</div>

          <div className="mt-4 text-lg text-justify">
            Software development is one of my strongest areas. On the{" "}
            <span className="font-semibold">frontend</span>, I primarily use{" "}
            <span className="font-semibold text-text">ReactJS</span> and{" "}
            <span className="font-semibold text-text">Tailwind CSS</span> to
            build responsive and modern user interfaces. On the{" "}
            <span className="font-semibold">backend</span>, I mainly work with{" "}
            <span className="font-semibold text-text">Go</span>,{" "}
            <span className="font-semibold text-text">ExpressJS</span>, and{" "}
            <span className="font-semibold text-text">Laravel</span> to develop
            scalable web applications and RESTful APIs. I also use{" "}
            <span className="font-semibold text-text">Python</span> with{" "}
            <span className="font-semibold text-text">Flask</span> to build{" "}
            <span className="font-semibold">machine learning</span> applications
            when appropriate. For development workflow and deployment, I
            regularly work with{" "}
            <span className="font-semibold text-text">Docker</span> for
            containerization,{" "}
            <span className="font-semibold text-text">Redis</span> for caching
            and performance optimization, and{" "}
            <span className="font-semibold text-text">Git</span> for version
            control and collaborative development.
          </div>
          <div className="grid grid-cols-2 items-center gap-8">
            <div className="mt-4 col-span-2 md:col-span-1 scroll-fadeInUp ">
              <div className="grid grid-cols-2 lg:grid-cols-3 w-full  gap-4 ">
                  <div className="h-fit bg-[#5bc9e4] rounded-lg">
                    <div className=" ml-2 rounded-l-md rounded-r-lg flex items-center p-2 bg-text gap-2 h-fit">
                      <img
                        loading="lazy"
                        src={goLogo}
                        alt="Go Logo"
                        className="object-contain h-10"
                      />
                      <div className="font-semibold text-bg">Golang</div>
                    </div>
                  </div>
                <div className="h-fit bg-[#fefefe] rounded-lg">
                  <div className="ml-2 rounded-l-md rounded-r-lg flex items-center p-2 bg-text gap-2 h-fit">
                    <img
                      loading="lazy"
                      src={expressLogo}
                      alt="Express Logo"
                      className="object-contain h-10"
                    />
                    <div className="font-semibold text-bg">Express</div>
                  </div>
                </div>
                <div className="h-fit bg-[#fc0c08] rounded-lg">
                  <div className="ml-2 rounded-l-md rounded-r-lg flex items-center p-2  bg-text gap-2 h-fit">
                    <img
                      loading="lazy"
                      src={laravelLogo}
                      alt="Laravel Logo"
                      className="object-contain h-10 "
                    />
                    <div className="font-semibold text-bg">Laravel</div>
                  </div>
                </div>
                <div className="h-fit bg-[#3abcfa] rounded-lg">
                  <div className=" ml-2 rounded-l-md rounded-r-lg flex items-center p-2  bg-text gap-2 h-fit ">
                    <img
                      loading="lazy"
                      src={tailwindLogo}
                      alt="Tailwind Logo"
                      className="object-contain h-10 "
                    />
                    <div className="font-semibold text-bg">Tailwind</div>
                  </div>
                </div>
                <div className="h-fit bg-[#60dafa] rounded-lg">
                  <div className="ml-2 rounded-l-md rounded-r-lg flex items-center p-2  bg-text gap-2 h-fit">
                    <img
                      loading="lazy"
                      src={reactLogo}
                      alt="React Logo"
                      className="object-contain h-10 "
                    />
                    <div className="font-semibold text-bg">React</div>
                  </div>
                </div>
                <div className="h-fit bg-[#c6302b] rounded-lg">
                  <div className="ml-2 rounded-l-md rounded-r-lg flex items-center p-2  bg-text gap-2 h-fit">
                    <img
                      loading="lazy"
                      src={redisLogo}
                      alt="Redis Logo"
                      className="object-contain h-10 "
                    />
                    <div className="font-semibold text-bg">Redis</div>
                  </div>
                </div>
                <div className="h-fit bg-[#ffd242] rounded-lg">
                  <div className="ml-2 rounded-l-md rounded-r-lg flex items-center p-2  bg-text gap-2 h-fit">
                    <img
                      loading="lazy"
                      src={pythonLogo}
                      alt="Go Logo"
                      className="object-contain h-10 "
                    />
                    <div className="font-semibold text-bg">python</div>
                  </div>
                </div>
                <div className="h-fit bg-[#009ddb] rounded-lg">
                  <div className="ml-2 rounded-l-md rounded-r-lg flex items-center p-2  bg-text gap-2 h-fit">
                    <img
                      loading="lazy"
                      src={dockerLogo}
                      alt="Docker Logo"
                      className="object-contain h-10 "
                    />
                    <div className="font-semibold text-bg">docker</div>
                  </div>
                </div>
                <div className="h-fit bg-[#f05133] rounded-lg">
                  <div className="ml-2 rounded-l-md rounded-r-lg flex items-center p-2  bg-text gap-2 h-fit">
                    <img
                      loading="lazy"
                      src={gitLogo}
                      alt="Git Logo"
                      className="object-contain h-10 "
                    />
                    <div className="font-semibold text-bg">git</div>
                  </div>
                </div>
              </div>
            </div>
            <SkillBars />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
