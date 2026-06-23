import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import hero from "../assets/hero.webp";
const Home = () => {
  return (
    <section
      id="home"
      className="relative max-w-6xl mx-auto pt-40 md:pt-50 px-4 min-h-screen text-text"
    >
      <div className="absolute  w-100 h-100 bg-secondary/40 rounded-full blur-3xl opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="col-span-2 md:col-span-1 -mt-40 md:-mt-20 mx-4 mx:mx-0 order-2 md:order-1">
          <p className="mt-4 text-xl font-semibold">Hi I am</p>
          <p className="mt-4 text-2xl font-semibold text-secondary">Subairi</p>
          <h1 className="text-4xl md:text-7xl font-bold">Software</h1>
          <h1 className="text-4xl md:text-7xl font-bold pl-30 md:pl-46">
            Developer
          </h1>
          <p className="text-lg mt-4 text-leading">
            Seeking hands-on experience in software engineering to strengthen my
            skills in designing, developing, and maintaining scalable
            applications. Passionate about building efficient and user-friendly
            software solutions using best development practices.
          </p>
          <div className="flex justify-between items-center">
            <button
              className="py-2 px-8 bg-secondary text-white  rounded-lg mt-4 hover:bg-secondary/80 transition duration-300 cursor-pointer"
              aria-label="Send Hiring Inquiry on email"
              onClick={() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=subairibairi689@gmail.com&su=Hiring%20Inquiry%20-%20Frontend%20%2F%20Backend%20%2F%20Fullstack%20Developer&body=Hello%20Subairi%2C%0A%0AI'm%20interested%20in%20working%20with%20you%20for%20a%20project%20or%20opportunity.%20I%20would%20like%20to%20discuss%20more%20with%20you.%0A%0APlease%20let%20me%20know%20when%20you're%20available%20for%20a%20discussion.%0A%0AThank%20you.",
                  "_blank",
                );
              }}
            >
              Hire Me
            </button>
            <div className="flex items-center justify-center mt-4 space-x-2 flex md:hidden">
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
        </div>
        <div className="col-span-2 md:col-span-1 order-1 md:order-2">
          <div className="flex relative justify-end md:justify-center">
            <div className="p-1 rounded-full bg-gradient-to-b from-[#FFE5D6] via-gray to-secondary shadow-[inset_0_4px_12px_rgba(0,0,0,0,0.8)]">
              <div className="bg-bg rounded-full overflow-hidden w-50 h-50 md:w-100 md:h-100 ">
                <img
                  src={hero}
                  alt="Profile"
                  fetchPriority="high"
                  loading="eager"
                  className="w-auto h-75 md:h-130 -mt-15 md:-mt-30 object-cover"
                />
              </div>
            </div>
            <div className="p-1 pr-3 md:pr-1 absolute -top-15 md:-top-30 w-50 h-25 md:w-100 md:h-50 overflow-hidden">
              <img
                src={hero}
                alt="Profile"
                fetchPriority="high"
                loading="eager"
                className="w-auto h-75 md:h-130 object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-4 hidden md:flex">
            <a
              href="https://github.com/subaaaiii"
              aria-label="Open GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8 cursor-pointer" />
            </a>

            <a
              href="https://wa.me/6283839772172"
              aria-label="Contact whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-8 h-8 cursor-pointer" />
            </a>

            <a
              href="https://instagram.com/subaaaiii"
              aria-label="Open Instagram profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-8 h-8 cursor-pointer" />
            </a>

            <a
              href="https://linkedin.com/in/subairi"
              aria-label="Open Linkedin profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8 cursor-pointer" />
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
