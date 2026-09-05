import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import hero from "../assets/hero2.png";
import { MdArrowOutward } from "react-icons/md";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <section
      id="home"
      className="relative  max-w-6xl mx-auto pt-20 md:pt-30 px-4 min-h-screen text-text"
    >
      <div className="absolute lg:w-100 lg:h-100 bg-text/50 rounded-full blur-3xl opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className=" items-center mt-4">
        <div className="flex flex-col justify-center items-center">
          <p className="mt-2 text-lg md:text-2xl text-text animate__animated animate__fadeIn">
            Hi I am
          </p>
          <p className="text-2xl md:text-4xl font-semibold text-text  animate__animated animate__fadeIn">
            Subairi
          </p>
          <div className="mt-4 flex justify-center">
            <h1 className="text-4xl md:text-8xl font-bold text-text text-center">
              <span className="inline-block text-transparent [-webkit-text-stroke:2px_var(--color-text)] animate__animated animate__bounceInLeft">
                Software
              </span>{" "}
              <span className="inline-block animate__animated animate__bounceInRight">
                Developer
              </span>
            </h1>
          </div>
        </div>
        <div className="relative -mt-5 md:-mt-12  lg:-mt-15 ">
          <div className="flex justify-center">
            <div className="w-[75%] md:w-120 lg:w-170 animate__animated animate__fadeInUp">
              <img
                src={hero}
                alt="Profile"
                fetchPriority="high"
                loading="eager"
                className="w-full [mask-image:linear-gradient(to_bottom,black_72%,transparent_100%)]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mb-4">
            <div className="flex items-center justify-center mt-2 space-x-2 flex lg:hidden">
              <a
                href="https://github.com/subaaaiii"
                aria-label="Open GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6 cursor-pointer" />
              </a>

              <a
                href="https://wa.me/6283839772172"
                aria-label="Contact whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-6 h-6 cursor-pointer" />
              </a>

              <a
                href="https://instagram.com/subaaaiii"
                aria-label="Open Instagram profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6 cursor-pointer" />
              </a>

              <a
                href="https://linkedin.com/in/subairi"
                aria-label="Open Linkedin profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-start  lg:absolute lg:left-10 top-1/2 lg:-translate-y-1/2 ">
            <div className="flex flex-col justify-center max-w-70 md:max-w-90">
              {/* <div className="text-lg md:text-2xl font-semibold mb-2 text-text text-center lg:text-start">
                I do <span className="">Backend development</span>
              </div> */}
              <div className="flex gap-2 text-lg md:text-2xl font-semibold mb-2 text-text text-center lg:text-start">
                <div>I do </div>
                <span className="text-text border-b-2 border-text">
                  <Typewriter
                    options={{
                      strings: [
                        "Fullstack development",
                        "Frontend development",
                        "Backend development",
                        "Machine learning",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 10,
                      // wrapperClassName: "inline-block",
                    }}
                  />
                </span>
              </div>
              <div className="text-xs md:text-base mb-2 text-text text-center lg:text-start animate__animated animate__fadeIn">
                Designing digital products that are clear, usable, and
                conversion focused.
              </div>
              <div className="flex justify-center lg:justify-start animate__animated animate__fadeIn">
                <button
                  onClick={() => {
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=subairibairi689@gmail.com&su=Hiring%20Inquiry%20-%20Frontend%20%2F%20Backend%20%2F%20Fullstack%20Developer&body=Hello%20Subairi%2C%0A%0AI'm%20interested%20in%20working%20with%20you%20for%20a%20project%20or%20opportunity.%20I%20would%20like%20to%20discuss%20more%20with%20you.%0A%0APlease%20let%20me%20know%20when%20you're%20available%20for%20a%20discussion.%0A%0AThank%20you.",
                "_blank",
              );
            }}
                  className="hover:underline flex items-center gap-2 px-4 py-2 bg-text text-bg rounded-full"
                >
                  <span className="text-lg">Lets collaborate</span>
                  <MdArrowOutward className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute text-text right-4 bottom-10 mt-4 space-y-4  hidden lg:flex flex-col">
            <a
              href="https://github.com/subaaaiii"
              aria-label="Open GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-text rounded-full  py-1.5 px-4 flex gap-2 items-center animate__animated animate__bounceInUp [animation-delay:2000ms]"
            >
              <FaGithub className="w-6 h-6 cursor-pointer" />
              <div>github</div>
            </a>

            <a
              href="https://wa.me/6283839772172"
              aria-label="Contact whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-text rounded-full  py-1.5 px-4 flex gap-2 items-center  animate__animated animate__bounceInUp [animation-delay:1500ms]"
            >
              <FaWhatsapp className="w-6 h-6 cursor-pointer" />
              <div>whatsapp</div>
            </a>

            <a
              href="https://instagram.com/subaaaiii"
              aria-label="Open Instagram profile"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-text rounded-full  py-1.5 px-4 flex gap-2 items-center animate__animated animate__bounceInUp [animation-delay:1000ms]"
            >
              <FaInstagram className="w-6 h-6 cursor-pointer" />
              <div>instagram</div>
            </a>

            <a
              href="https://linkedin.com/in/subairi"
              aria-label="Open Linkedin profile"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-text rounded-full  py-1.5 px-4 flex gap-2 items-center animate__animated animate__bounceInUp [animation-delay:500ms]"
            >
              <FaLinkedin className="w-8 h-8 cursor-pointer" />
              <div>Linkedin</div>
            </a>
          </div>
        </div>
        <div className="fixed bottom-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
