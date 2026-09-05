import { BiSend } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto pb-20 pt-20 text-text scroll-fadeInUp">
      <h1 className="text-4xl md:text-7xl text-text text-center font-semibold leading-relaxed">
        Have an Awesome Project Idea?{" "}
        <span className="text-4xl md:text-7xl text-text">Let's Discuss</span>
      </h1>
      <div className="flex justify-center w-full mt-4 px-4 md:px-0">
        <div className="w-full md:w-[80%] rounded-full border border-gray-500 flex items-center p-3">
          <div className="p-3 rounded-full bg-surface">
            <MdEmail className="w-8 h-8 text-text" />
          </div>
          <input
            type="text"
            className="p-3 w-full outline-none focus:outline-none focus:ring-0 text-base md:text-xl"
            placeholder="Enter Email Address"
          />
          <button
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=subairibairi689@gmail.com&su=Hiring%20Inquiry%20-%20Frontend%20%2F%20Backend%20%2F%20Fullstack%20Developer&body=Hello%20Subairi%2C%0A%0AI'm%20interested%20in%20working%20with%20you%20for%20a%20project%20or%20opportunity.%20I%20would%20like%20to%20discuss%20more%20with%20you.%0A%0APlease%20let%20me%20know%20when%20you're%20available%20for%20a%20discussion.%0A%0AThank%20you.",
                "_blank",
              );
            }}
            className="py-3 px-6 bg-text rounded-full text-lg text-bg cursor-pointer font-medium flex items-center gap-2"
          >
            Send 
            <BiSend className=""/>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
