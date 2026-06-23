import create from "../assets/project-growlab/growlab-c.webp";
import read from "../assets/project-growlab/growlab-r.webp";
import update from "../assets/project-growlab/growlab-u.webp";
import del from "../assets/project-growlab/growlab-d.webp";
import kelas1 from "../assets/project-growlab/kelas-1.webp";
import kelas2 from "../assets/project-growlab/kelas-2.webp";
import { useEffect } from "react";
import { useSEO } from "../seo";

const Growlab = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useSEO({
      title: `Growlab - UMKM Course Website`,
      description: `Platform kursus online berbasis web yang mengintegrasikan manajemen
        kelas, materi pembelajaran, pendaftaran peserta, pembayaran, dan
        dashboard administrasi dalam satu sistem yang terorganisir. Pada proyek
        ini saya bertugas pada satu fitur utama yaitu fitur Kelas Bisnis`,
    });
  return (
    <div className="max-w-6xl mx-auto pt-30 px-4 pb-20 bg-bg text-text">
      <h1 className="text-[clamp(1.5rem,4vw,3rem)] text-balance font-bold">
        Growlab - UMKM Course Website
      </h1>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Platform kursus online berbasis web yang mengintegrasikan manajemen
        kelas, materi pembelajaran, pendaftaran peserta, pembayaran, dan
        dashboard administrasi dalam satu sistem yang terorganisir. Pada proyek
        ini saya bertugas pada satu fitur utama yaitu fitur{" "}
        <span className="font-semibold">Kelas Bisnis</span> dengan uraian
        sebagai berikut:
      </p>
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        1. Membuat Sistem Manajemen Konten untuk Admin (CRUD Konten Kelas
        bisnis)
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Mengembangkan Sistem Manajemen Konten (CMS) untuk admin yang
        memungkinkan pengelolaan data kelas bisnis secara efisien melalui fitur
        Create, Read, Update, dan Delete (CRUD), sehingga proses publikasi dan
        pemeliharaan informasi kelas menjadi lebih mudah dan terstruktur.
      </p>
      <div className="grid md:grid-cols-2 gap-2">
        <img loading="lazy" src={create} alt="create"  />
        <img loading="lazy" src={read} alt="read" />
        <img loading="lazy" src={update} alt="update" />
        <img loading="lazy" src={del} alt="delete" />
      </div>
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        2. Bug Fixing
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Melakukan bug fixing pada fitur kelas dibagian front-end agar hasil
        konten dari Sistem Manajemen Konten cocok dan sistem akses kelas
        berjalan dengan lancar .
      </p>
      <img loading="lazy" src={kelas1} alt="kelas" />
      <img loading="lazy" src={kelas2} alt="kelas" />
    </div>
  );
};
export default Growlab;
