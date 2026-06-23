import berita from "../assets/project-pesantren/berita.webp";
import manajemen_berita from "../assets/project-pesantren/manajemen_berita.webp";
import manajemen_produk from "../assets/project-pesantren/manajemen_produk.webp";
import produk from "../assets/project-pesantren/produk.webp";
import landing_page from "../assets/project-pesantren/landing_page.webp";
import { useEffect } from "react";
import { useSEO } from "../seo";

const Pesantren = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useSEO({
    title: `Website Pondok Pesantren Maqis Alhamidy 4`,
    description: `Website Pondok Pesantren Maqis Alhamidy 4 yang menampilkan profil
        pesantren, berita, dan produk pesantren dalam tampilan modern dan
        responsif untuk mendukung branding serta penyampaian informasi secara
        efektif.`,
  });
  return (
    <div className="max-w-6xl mx-auto pt-30 px-4 pb-20 bg-bg text-text">
      <h1 className="text-[clamp(1.5rem,4vw,3rem)] text-balance font-bold">
        Website Pondok Pesantren Maqis Alhamidy 4
      </h1>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Website Pondok Pesantren Maqis Alhamidy 4 yang menampilkan profil
        pesantren, berita, dan produk pesantren dalam tampilan modern dan
        responsif untuk mendukung branding serta penyampaian informasi secara
        efektif.
      </p>
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        1. Landing Page
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Menampilkan informasi utama pesantren, profil singkat, visi dan misi,
        program unggulan, serta akses cepat ke halaman penting untuk memberikan
        gambaran menyeluruh kepada pengunjung.
      </p>
      <img loading="lazy" src={landing_page} alt="landing page" />
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        2. Berita dan Artikel
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Memungkinkan pengelola pesantren mempublikasikan berita terbaru, artikel
        edukasi, pengumuman, dan dokumentasi kegiatan secara berkala..
      </p>
      <img loading="lazy" src={berita} alt="berita" />
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        3. Katalog Produk
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Menampilkan produk atau usaha yang dikelola pesantren lengkap dengan
        deskripsi, gambar, dan informasi pendukung untuk memperluas jangkauan
        promosi.
      </p>
      <img loading="lazy" src={produk} alt="katalog produk" />
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        4. Manajemen Berita
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Administrator dapat menambah, mengubah, menghapus, dan mengatur
        publikasi berita maupun artikel secara efisien.
      </p>
      <img loading="lazy" src={manajemen_berita} alt="manajemen berita" />
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        5. Manajemen Produk
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Memudahkan pengelolaan data produk, gambar produk, kategori, dan
        informasi pendukung lainnya.
      </p>
      <img loading="lazy" src={manajemen_produk} alt="manajemen produk" />
    </div>
  );
};
export default Pesantren;
