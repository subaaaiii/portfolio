import subgame from "../assets/subgame.webp";
import subgame2 from "../assets/subgame2.webp";
import growlab1 from "../assets/growlab1.webp";
import growlab2 from "../assets/growlab2.webp";
import growlab3 from "../assets/growlab3.webp";
import pesantren from "../assets/pesantren.webp";
import pesantren2 from "../assets/pesantren2.webp";
const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto min-h-screen pt-50 md:pt-25 text-text">
      <h1 className="text-4xl text-center font-semibold mt-4">Projects</h1>
      <p className="mt-4 text-lg text-center ">
        <p className="mt-4 text-lg text-center">
          A collection of projects showcasing my skills in web development.
        </p>
      </p>
      <div className="grid grid-cols-3 gap-8 mt-4 mx-4 md:mx-0">
        <div className="col-span-3 md:col-span-1">
          <div className="relative  w-full h-110 rounded-lg bg-secondary/20 overflow-hidden">
            <img
              src={growlab1}
              alt=""
              className="absolute z-10 w-[55%] translate-x-20 bottom-0 shadow-lg rounded-xs"
            />
            <img
              src={growlab2}
              alt=""
              className="absolute z-8 w-[55%] translate-x-4 bottom-0"
            />
            <img
              src={growlab3}
              alt=""
              className="absolute z-9 w-[55%] translate-x-36 left-0 shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-secondary mt-2">Team project</h2>
            <h2 className="text-xl font-medium mt-2">
              Growlab - UMKM Course website
            </h2>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="relative  w-full h-110 rounded-lg bg-secondary/20 overflow-hidden">
            <img
              src={subgame}
              alt=""
              className="absolute z-10 w-[60%] translate-x-7 bottom-0 shadow-lg rounded-xs"
            />
            <img
              src={subgame2}
              alt=""
              className="absolute z-9 w-[70%] translate-x-24 top-0"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-secondary mt-2">Individual project</h2>
            <h2 className="text-xl font-medium mt-2">
              SubGame - Game account marketplace
            </h2>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="relative  w-full h-110 rounded-lg bg-secondary/20 overflow-hidden">
            <img
              src={pesantren}
              alt=""
              className="absolute z-10 w-[60%] translate-x-7 bottom-0 shadow-lg rounded-xs"
            />
            <img
              src={pesantren2}
              alt=""
              className="absolute z-9 w-[65%] translate-x-27 top-0"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-secondary mt-2">Team project</h2>
            <h2 className="text-xl font-medium mt-2">
              Landing Page & Product showcase of Maqis
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
