import subgame from "../assets/subgame-1.webp";
import growlab1 from "../assets/growlab-1.webp";
import pesantren from "../assets/pesantren-1.webp";
import kasirpos from "../assets/kasirpos.webp";
import stock from "../assets/stockprediction.webp";
import myTsel from "../assets/mytsel.png";

import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto min-h-screen pt-50 md:pt-25 text-text"
    >
      <h1 className="text-4xl text-center font-semibold mt-4 scroll-fadeInUp">
        Projects
      </h1>
      <div className="mt-4 text-lg text-center scroll-fadeInUp ">
        <p className="mt-4 text-lg text-center ">
          A collection of projects showcasing my skills in software development.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3  gap-8 mt-4 mx-4 lg:mx-0">
        {/* subgame */}
        <Link
          to={"/project/subgame"}
          aria-label="Open SubGame project detail"
          className="relative pb-12 col-span-3 md:col-span-1 shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer scroll-fadeInUp "
        >
          <div className="absolute top-3 left-3 bg-bg py-2 px-3 rounded-full text-text text-sm">
            Featured
          </div>
          <div className="relative  w-full h-60  bg-surface overflow-hidden">
            <img
              loading="lazy"
              src={subgame}
              alt="subgame"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col p-3">
            <h2 className="text-text mt-2">Individual project</h2>
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
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                React.JS
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Tailwindcss
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Tanstack Query
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Golang
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Mysql
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                JWT Auth
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                OAuth
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Docker
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Redis
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Pusher
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Gomail
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-3   flex items-center gap-1 text-md font-semibold text-text">
            <span>Lihat detail</span> <FaArrowRightLong className="w-5 h-5" />
          </div>
        </Link>
        {/* kasirpos */}
        <Link
          to={"/project/kasirpos"}
          aria-label="Open kasirpos project detail"
          className="relative pb-12 col-span-3 md:col-span-1 shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer scroll-fadeInUp"
        >
          <div className="relative  w-full h-60  bg-surface overflow-hidden">
            <img
              loading="lazy"
              src={kasirpos}
              alt="kasirpos"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col p-3">
            <h2 className="text-text mt-2">Individual project</h2>
            <h2 className="text-xl font-semibold mt-2">
              KasirPOS - Point of Sale Management System
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              KasirPOS adalah aplikasi Point of Sale (POS) berbasis web yang
              dikembangkan menggunakan Laravel, Inertia.js, React, dan Tailwind
              CSS. Aplikasi ini dirancang untuk membantu proses transaksi
              penjualan, pengelolaan produk, kategori, serta penyajian laporan
              penjualan melalui dashboard yang informatif dan mudah digunakan.
            </p>
            <div className="flex flex-wrap mt-2 gap-2">
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                React.JS
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Laravel
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Inertia
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Mysql
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Tailwind Css
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-3  flex items-center gap-1 text-md font-semibold text-text">
            <span>Lihat detail</span> <FaArrowRightLong className="w-5 h-5" />
          </div>
        </Link>
        {/* maqis */}
        <Link
          to={"/project/maqis"}
          aria-label="Open Maqis project detail"
          className="relative pb-12 col-span-3 md:col-span-1 shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer scroll-fadeInUp"
        >
          <div className="relative  w-full h-60  bg-surface overflow-hidden">
            <img
              loading="lazy"
              src={pesantren}
              alt="maqis"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col p-3">
            <h2 className="text-text mt-2">Team project</h2>
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
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                React.JS
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Tailwindcss
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Express.JS
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Mysql
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                JWT Auth
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Multer
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-3  flex items-center gap-1 text-md font-semibold text-text">
            <span>Lihat detail</span> <FaArrowRightLong className="w-5 h-5" />
          </div>
        </Link>
        {/* Growlab */}
        <Link
          to={"/project/growlab"}
          aria-label="Open Growlab project detail"
          className="relative pb-12 col-span-3 md:col-span-1 shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer scroll-fadeInUp"
        >
          <div className="relative  w-full h-60  bg-surface overflow-hidden">
            <img
              loading="lazy"
              src={growlab1}
              alt="Growlab"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col p-3">
            <h2 className="text-text mt-2">Team project</h2>
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
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                React.JS
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Tailwindcss
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Sweetalert2
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Express.JS
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Mysql
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                JWT Auth
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Multer
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Nodemailer
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-3  flex items-center gap-1 text-md font-semibold text-text">
            <span>Lihat detail</span> <FaArrowRightLong className="w-5 h-5" />
          </div>
        </Link>
        {/* mytsel */}
        <Link
          to={"/project/mytsel"}
          aria-label="Open myTsel project detail"
          className="relative pb-12 col-span-3 md:col-span-1 shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer scroll-fadeInUp"
        >
          <div className="relative w-full h-60 bg-surface overflow-hidden">
            <img
              loading="lazy"
              src={myTsel}
              alt="myTsel"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col p-3">
            <h2 className="text-text mt-2">Individual project</h2>
            <h2 className="text-xl font-semibold mt-2">
              myTsel UI - Mobile App
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Aplikasi mobile myTsel UI yang dikembangkan menggunakan Flutter
              dan Dart. Menyediakan antarmuka yang responsif, modern, dan mulus
              untuk pengalaman pengguna dalam mengelola layanan seluler,
              pembelian paket data, serta pemantauan kuota.
            </p>
            <div className="flex flex-wrap mt-2 gap-2">
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Flutter
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Dart
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                GetX
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-3 flex items-center gap-1 text-md font-semibold text-text">
            <span>Lihat detail</span> <FaArrowRightLong className="w-5 h-5" />
          </div>
        </Link>
        {/* stock predict */}
        <div className="relative pb-12 col-span-3 md:col-span-1 shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 cursor-pointer scroll-fadeInUp">
          <div className="relative  w-full h-60  bg-surface overflow-hidden">
            <img
              loading="lazy"
              src={stock}
              alt="stock prediction"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col p-3">
            <h2 className="text-text mt-2">Individual project</h2>
            <h2 className="text-xl font-semibold mt-2">
              Stock price prediction
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Stock Prediction adalah aplikasi berbasis web yang memanfaatkan
              model Deep Learning menggunakan Long Short-Term Memory (LSTM) dan
              Gated Recurrent Unit (GRU) untuk memprediksi harga saham
              berdasarkan data historis. Aplikasi ini menyediakan visualisasi
              data, proses pelatihan model, evaluasi performa, serta hasil
              prediksi untuk membantu analisis tren harga saham.
            </p>

            <div className="flex flex-wrap mt-2 gap-2">
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Python
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                TensorFlow
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Keras
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                LSTM
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                GRU
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                Flask
              </div>
              <div className="px-3 py-2 rounded-full bg-surface text-sm text-text">
                React
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
