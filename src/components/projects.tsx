import subgame from "../assets/subgame-1.webp";
import growlab1 from "../assets/growlab-1.webp";
import pesantren from "../assets/pesantren-1.webp";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto min-h-screen pt-50 md:pt-25 text-text"
    >
      <h1 className="text-4xl text-center font-semibold mt-4">Projects</h1>
      <div className="mt-4 text-lg text-center ">
        <p className="mt-4 text-lg text-center">
          A collection of projects showcasing my skills in web development.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-4 mx-4 md:mx-0">
        {/* Growlab */}
        <Link
          to={"/project/growlab"}
          aria-label="Open Growlab project detail"
          className="relative pb-12 col-span-3 md:col-span-1 shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
        >
          <div className="relative  w-full h-60  bg-secondary/20 overflow-hidden">
            <img loading="lazy"
              src={growlab1}
              alt="Growlab"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col p-3">
            <h2 className="text-secondary mt-2">Team project</h2>
            <h2 className="text-xl font-semibold mt-2">
              Growlab - UMKM Course website
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Platform kursus online berbasis web yang mengintegrasikan
              manajemen kelas, materi pembelajaran, pendaftaran peserta,
              pembayaran, dan dashboard administrasi dalam satu sistem yang
              terorganisir.
            </p>
            <div className="flex flex-wrap mt-2 gap-2">
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">React.JS</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Tailwindcss</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Sweetalert2</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Express.JS</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Mysql</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">JWT Auth</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Multer</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Nodemailer</div>
            </div>
          </div>
          <div className="absolute bottom-5 left-3  flex items-center gap-1 text-md font-semibold text-secondary">
            <span>Lihat detail</span> <FaArrowRightLong className="w-5 h-5" />
          </div>
        </Link>
        <Link
          to={"/project/subgame"}
          aria-label="Open SubGame project detail"
          className="relative pb-12 col-span-3 md:col-span-1 shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
        >
          <div className="absolute top-3 left-3 bg-secondary py-2 px-3 rounded-full text-white text-sm">Featured</div>
          <div className="relative  w-full h-60  bg-secondary/20 overflow-hidden">
            <img loading="lazy"
              src={subgame}
              alt="subgame"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col p-3">
            <h2 className="text-secondary mt-2">Individual project</h2>
            <h2 className="text-xl font-semibold mt-2">
              SubGame - Game account marketplace
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Platform marketplace akun game berbasis web yang mengintegrasikan
              pengelolaan produk, transaksi, pembayaran, komunikasi antara
              penjual dan pembeli, serta dashboard administrasi dalam satu
              sistem yang aman dan terorganisir.
            </p>
            <div className="flex flex-wrap mt-2 gap-2">
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">React.JS</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Tailwindcss</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Tanstack Query</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Golang</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Mysql</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">JWT Auth</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">OAuth</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Docker</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Redis</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Pusher</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Gomail</div>
            </div>
          </div>
          <div className="absolute bottom-5 left-3   flex items-center gap-1 text-md font-semibold text-secondary">
            <span>Lihat detail</span> <FaArrowRightLong className="w-5 h-5" />
          </div>
        </Link>
        <Link
          to={"/project/maqis"}
          aria-label="Open Maqis project detail"
          className="relative pb-12 col-span-3 md:col-span-1 shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
        >
          <div className="relative  w-full h-60  bg-secondary/20 overflow-hidden">
            <img loading="lazy"
              src={pesantren}
              alt="maqis"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col p-3">
            <h2 className="text-secondary mt-2">Team project</h2>
            <h2 className="text-xl font-semibold mt-2">
              Website Pesantren Maqis Alhamidy 4
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Website landing page dan product showcase yang menampilkan profil
              pesantren, produk, dan layanan dalam tampilan modern dan responsif
              untuk mendukung branding serta penyampaian informasi secara
              efektif.
            </p>
            <div className="flex flex-wrap mt-2 gap-2">
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">React.JS</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Tailwindcss</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Express.JS</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Mysql</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">JWT Auth</div>
              <div className="px-3 py-2 rounded-full bg-secondary/20 text-sm text-secondary">Multer</div>
            </div>
          </div>
          <div className="absolute bottom-5 left-3  flex items-center gap-1 text-md font-semibold text-secondary">
            <span>Lihat detail</span> <FaArrowRightLong className="w-5 h-5" />
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Projects;
