import goLogo from "../assets/go.webp";
import pythonLogo from "../assets/python.webp";
import expressLogo from "../assets/express.webp";
import reactLogo from "../assets/react.webp";
import tailwindLogo from "../assets/tailwind.webp";
const Skills = () => {
  return (
    <section id="skills"  className="max-w-6xl mx-auto px-4 min-h-screen text-text">
      <div className="grid grid-cols-2 pt-50 mb-50">
        <div className="mt-40 md:mt-0 col-span-2 md:col-span-1 order-2 md:order-1">
          <div className="relative  w-full h-full">
            <div className="absolute top-0 left-10 md:left-30 rounded-full w-20 h-20 md:w-22 md:h-22 object-contain shadow-xl bg-white ">
              <img loading="lazy" src={goLogo} alt="Go Logo" />
            </div>
            <div className="absolute top-10 right-10 md:right-30 rounded-full w-20 h-20 md:w-22 md:h-22 object-contain shadow-xl bg-white overflow-hidden">
              <img loading="lazy" src={expressLogo} alt="Express Logo" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-20 h-20 md:w-22 md:h-22 object-contain p-3 shadow-xl bg-white">
              <img loading="lazy" src={reactLogo} alt="React Logo" />
            </div>
            <div className="absolute bottom-0 right-10 md:right-30 rounded-full w-20 h-20 md:w-22 md:h-22 object-contain p-1 shadow-xl bg-white ">
              <img loading="lazy"
                src={tailwindLogo}
                alt="Tailwind Logo"
                className="rounded-full"
              />
            </div>
            <div className="absolute bottom-10 left-10 md:left-30  rounded-full w-20 h-20 md:w-22 md:h-22 object-contain p-3 shadow-xl  bg-white ">
              <img loading="lazy" src={pythonLogo} alt="Python Logo" />
            </div>
          </div>
        </div>
        <div className="md:-mt-15 col-span-2 md:col-span-1 order-1 md:order-2">
          <div className="text-4xl font-semibold">Skills</div>

          <div className="mt-4 text-lg ">
            Web development is one of my strongest areas, on the <span className="font-semibold">frontend</span> i
            primarily use <span className="font-semibold text-secondary">ReactJS</span> and <span className="font-semibold text-secondary">Tailwindcss</span> to build responsive interfaces
            and dashboards. On the <span className="font-semibold">backend</span> I primarily use <span className="font-semibold text-secondary">Go</span> and <span className="font-semibold text-secondary">ExpressJS</span> and
            I also use <span className="font-semibold text-secondary">Python</span> with <span className="font-semibold text-secondary">Flask</span> to build <span className="font-semibold">machine learning</span> when
            appropriate.
          </div>
          <div className="mt-4 space-y-6">
            <div>
              <div className="text-lg font-semibold">Frontend Development</div>
              <div className="relative flex items-center mt-3">
                <div className="absolute w-full h-2 rounded-full bg-gray-200 items-center"></div>
                <div className="absolute w-[90%] flex items-center">
                  <div className="w-full h-2 rounded-full bg-secondary"></div>
                  <div className="-ml-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center ">
                    <div className="p-[10px] bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold">Backend Development</div>
              <div className="relative flex items-center mt-3">
                <div className="absolute w-full h-2 rounded-full bg-gray-200 items-center"></div>
                <div className="absolute w-[87%] flex items-center">
                  <div className="w-full h-2 rounded-full bg-secondary"></div>
                  <div className="-ml-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center ">
                    <div className="p-[10px] bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold">AI/ML Engineering</div>
              <div className="relative flex items-center mt-3">
                <div className="absolute w-full h-2 rounded-full bg-gray-200 items-center"></div>
                <div className="absolute w-[80%] flex items-center">
                  <div className="w-full h-2 rounded-full bg-secondary"></div>
                  <div className="-ml-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center ">
                    <div className="p-[10px] bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="text-lg font-semibold">Grapich design</div>
              <div className="relative flex items-center mt-3">
                <div className="absolute w-full h-2 rounded-full bg-gray-200 items-center"></div>
                <div className="absolute w-[87%] flex items-center">
                  <div className="w-full h-2 rounded-full bg-secondary"></div>
                  <div className="-ml-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center ">
                    <div className="p-[10px] bg-bg rounded-full"></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
