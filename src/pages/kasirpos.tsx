import dashboard from "../assets/project-kasirpos/dashboard.webp";
import cashier from "../assets/project-kasirpos/kasir.webp";
import orders from "../assets/project-kasirpos/orders.webp";
import products from "../assets/project-kasirpos/crud.webp";
import categories from "../assets/project-kasirpos/category.webp";
import sales from "../assets/project-kasirpos/sales.webp";
import { useEffect } from "react";
import { useSEO } from "../seo";

const KasirPOS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "KasirPOS | Point of Sale Management System",
    description:
      "KasirPOS adalah aplikasi Point of Sale berbasis web yang dibangun menggunakan Laravel, Inertia.js, React, dan Tailwind CSS. Aplikasi ini membantu pengelolaan transaksi, produk, kategori, serta laporan penjualan secara efisien.",
  });

  return (
    <div className="max-w-6xl mx-auto pt-30 px-4 pb-20 bg-bg text-text">
      <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold">
        KasirPOS - Point of Sale Management System
      </h1>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        KasirPOS adalah aplikasi Point of Sale (POS) berbasis web yang
        dikembangkan menggunakan Laravel, Inertia.js, React, dan Tailwind CSS.
        Aplikasi ini dirancang untuk membantu proses transaksi penjualan,
        pengelolaan produk, kategori, serta penyajian laporan penjualan melalui
        dashboard yang informatif dan mudah digunakan.
      </p>

      <h2 className="mt-6 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        1. Dashboard
      </h2>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Dashboard menampilkan ringkasan performa bisnis seperti total revenue,
        jumlah transaksi, rata-rata penjualan, produk terlaris, transaksi
        terbaru, stok produk menipis, serta grafik penjualan untuk membantu
        pemilik toko memantau kondisi bisnis secara real-time.
      </p>

      <img loading="lazy" src={dashboard} alt="Dashboard KasirPOS" />

      <h2 className="mt-6 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        2. Halaman Kasir
      </h2>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Halaman kasir memudahkan proses transaksi dengan pencarian produk,
        filter kategori, pengelolaan keranjang belanja, pemilihan metode
        pembayaran, serta perhitungan total pembayaran secara otomatis.
      </p>

      <img loading="lazy" src={cashier} alt="Halaman Kasir" />

      <h2 className="mt-6 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        3. Manajemen Produk
      </h2>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Administrator dapat menambahkan, mengubah, menghapus, serta mengatur
        status aktif produk. Setiap produk dilengkapi dengan kategori, harga,
        stok, dan gambar sehingga pengelolaan inventaris menjadi lebih mudah.
      </p>

      <img loading="lazy" src={products} alt="Manajemen Produk" />

      <h2 className="mt-6 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        4. Manajemen Kategori
      </h2>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Fitur ini memungkinkan administrator mengelola kategori produk untuk
        menjaga data tetap terstruktur dan mempermudah proses pencarian maupun
        filter produk pada halaman kasir.
      </p>

      <img loading="lazy" src={categories} alt="Manajemen Kategori" />

      <h2 className="mt-6 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        5. Riwayat Transaksi
      </h2>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Menampilkan seluruh riwayat transaksi lengkap dengan detail produk,
        metode pembayaran, total pembayaran, serta fitur export data ke dalam
        format excel.
      </p>

      <img loading="lazy" src={orders} alt="Riwayat Transaksi" />

      <h2 className="mt-6 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        6. Laporan Penjualan
      </h2>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Menampilkan laporan penjualan harian dalam bulan dan tahun tertentu
        dengan fitur ekspor data ke format Excel untuk memudahkan analisis dan
        dokumentasi.
      </p>

      <img loading="lazy" src={sales} alt="Laporan Penjualan" />
    </div>
  );
};

export default KasirPOS;
