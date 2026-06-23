import authen1 from "../assets/project-subgame/authen-1.webp";
import authen2 from "../assets/project-subgame/authen-2.webp";
import authen3 from "../assets/project-subgame/authen-3.webp";
import authen4 from "../assets/project-subgame/authen-4.webp";
import setting1 from "../assets/project-subgame/setting-1.webp";
import setting2 from "../assets/project-subgame/setting-2.webp";
import katalog1 from "../assets/project-subgame/katalog-1.webp";
import katalog2 from "../assets/project-subgame/katalog-2.webp";
import katalog3 from "../assets/project-subgame/katalog-3.webp";
import katalog4 from "../assets/project-subgame/katalog-4.webp";
import payment1 from "../assets/project-subgame/payment-1.webp";
import payment2 from "../assets/project-subgame/payment-2.webp";
import chat1 from "../assets/project-subgame/chat-1.webp";
import chat2 from "../assets/project-subgame/chat-2.webp";
import orders1 from "../assets/project-subgame/orders-1.webp";
import orders2 from "../assets/project-subgame/orders-2.webp";
import orders3 from "../assets/project-subgame/orders-3.webp";
import orders4 from "../assets/project-subgame/orders-4.webp";
import offers1 from "../assets/project-subgame/offers-1.webp";
import offers2 from "../assets/project-subgame/offers-2.webp";
import offers3 from "../assets/project-subgame/offers-3.webp";
import offers4 from "../assets/project-subgame/offers-4.webp";
import reviewSeller from "../assets/project-subgame/review-seller.webp";
import brand1 from "../assets/project-subgame/brand-1.webp";
import brand2 from "../assets/project-subgame/brand-2.webp";

import { useEffect } from "react";
import { useSEO } from "../seo";

const Subgame = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useSEO({
    title: `SubGame - Game account marketplace`,
    description: `Platform marketplace game digital yang menghubungkan pembeli dan penjual
        untuk melakukan transaksi produk game secara aman dan terstruktur.
        Sistem dilengkapi dengan manajemen produk, penawaran harga, verifikasi
        penjual, fitur chat, serta pengelolaan transaksi untuk memberikan
        pengalaman jual beli yang nyaman dan terpercaya.`,
  });
  return (
    <div className="max-w-6xl mx-auto pt-30 px-4 pb-20 bg-bg text-text">
      <h1 className="text-[clamp(1.5rem,4vw,3rem)] text-balance font-bold">
        SubGame
      </h1>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Platform marketplace game digital yang menghubungkan pembeli dan penjual
        untuk melakukan transaksi produk game secara aman dan terstruktur.
        Sistem dilengkapi dengan manajemen produk, penawaran harga, verifikasi
        penjual, fitur chat, serta pengelolaan transaksi untuk memberikan
        pengalaman jual beli yang nyaman dan terpercaya.
      </p>
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        1. Sistem autentikasi user lengkap dan aman
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Membangun sistem autentikasi yang aman dengan fitur registrasi, login,
        verifikasi email, lupa kata sandi, dan kontrol akses pengguna untuk
        memastikan keamanan serta kenyamanan penggunaan aplikasi. Dilengkapi
        dengan opsi open authentication (Oauth) dari Google untuk memudahkan
        user login dengan Google.
      </p>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src={authen1} alt="create" className="w-full scale-125" />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src={authen2} alt="read" className="w-full scale-125" />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src={authen3} alt="update" className="w-full scale-150" />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src={authen4} alt="delete" className="w-full scale-125" />
        </div>
      </div>
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        2. Profil dan setting
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Menyediakan halaman profil dan pengaturan akun sehingga pengguna dapat
        mengelola informasi pribadi, dan keamanan akun.
      </p>
      <div className="grid md:grid-cols-2 gap-2">
        <img loading="lazy" src={setting1} alt="berita" />
        <img loading="lazy" src={setting2} alt="berita" />
      </div>
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        3. Katalog Produk Game
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Menampilkan berbagai produk game digital berdasarkan kategori dan brand,
        lengkap dengan deskripsi, detail produk, dan informasi pendukung untuk
        membantu pengguna menemukan produk yang sesuai.
      </p>
      <div className="grid md:grid-cols-2 gap-2">
        <img loading="lazy" src={katalog1} alt="Home subgame" />
        <img loading="lazy" src={katalog2} alt="katalog subgame" />
        <img loading="lazy" src={katalog3} alt="katalog brand subgame" />
        <img loading="lazy" src={katalog4} alt="detail produk" />
      </div>
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        4. Sistem Pembayaran (Dummy callback)
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Mengembangkan simulasi integrasi payment gateway menggunakan dummy
        callback untuk menguji alur verifikasi pembayaran dan pembaruan status
        transaksi secara otomatis dalam lingkungan pengembangan.
      </p>
      <div className="grid md:grid-cols-2 gap-2">
        <img loading="lazy" src={payment1} alt="Check out payment SubGame" />
        <img loading="lazy" src={payment2} alt="Payment page SubGame" />
      </div>
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        5. Chat Real-Time
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Memfasilitasi komunikasi langsung antara pembeli dan penjual untuk
        konsultasi produk, negosiasi, maupun koordinasi transaksi.
      </p>
      <div className="grid md:grid-cols-2 gap-2">
        <img loading="lazy" src={chat1} alt="Real time chat SubGame" />
        <img loading="lazy" src={chat2} alt="Real time chat SubGame" />
      </div>
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        6. Manajemen Pesanan
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Mengelola seluruh proses transaksi mulai dari pembuatan pesanan,
        pemantauan status, serta memberikan kontrol kepada kedua seller dan
        buyer dalam penyelesaian transaksi secara terpusat yang dilengkapi
        dengan log aktivitas pada setiap order.
      </p>
      <div className="grid md:grid-cols-2 gap-2">
        <img loading="lazy" src={orders1} alt="Order flow SubGame" />
        <img loading="lazy" src={orders2} alt="Order flow SubGame" />
        <img loading="lazy" src={orders3} alt="Order flow SubGame" />
        <img loading="lazy" src={orders4} alt="Order flow SubGame" />
      </div>
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        7. Manajemen Produk
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Memungkinkan penjual mengelola produk yang ditawarkan, termasuk
        menambah, mengubah, dan menghapus data produk agar katalog selalu
        terbarui.
      </p>
      <div className="grid md:grid-cols-2 gap-2">
        <img loading="lazy" src={offers1} alt="Offer management SubGame" />
        <img loading="lazy" src={offers2} alt="Offer management SubGame" />
        <img loading="lazy" src={offers3} alt="Offer management SubGame" />
        <img loading="lazy" src={offers4} alt="Offer management SubGame" />
      </div>
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        8. Verifikasi & Manajemen Penjual
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Memungkinkan pengguna mendaftar sebagai penjual melalui proses
        verifikasi yang ditinjau oleh administrator guna menjaga kualitas dan
        keamanan transaksi.
      </p>
      <img loading="lazy" src={reviewSeller} alt="Seller review SubGame" />
      <h2 className="mt-4 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        9. Manajemen Brand Game
      </h2>
      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Memungkinkan administrator menambahkan game game brand baru dengan field
        field custom yang bisa disesuaikan dengan game tersebut.
      </p>
      <div className="grid md:grid-cols-2 gap-2">
        <img loading="lazy" src={brand1} alt="Brand management SubGame" />
        <img loading="lazy" src={brand2} alt="Brand management SubGame" />
      </div>
    </div>
  );
};
export default Subgame;
