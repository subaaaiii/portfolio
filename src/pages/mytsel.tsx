import splash from "../assets/mytsel/splash.png";
import login from "../assets/mytsel/login.png";
import home from "../assets/mytsel/home.png";
import reuse1 from "../assets/mytsel/reuse1.png";
import reuse2 from "../assets/mytsel/reuse2.png";
// import navigation from "../assets/mytsel/navigation.png";
// import riwayat from "../assets/mytsel/riwayat.webp";
// import bantuan from "../assets/mytsel/bantuan.webp";
// import inbox from "../assets/mytsel/inbox.webp";
// import profile from "../assets/mytsel/profile.webp";
import { useEffect } from "react";
import { useSEO } from "../seo";

const MyTSel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "MyTSel - Telkomsel Mobile App Clone",
    description:
      "MyTSel adalah aplikasi mobile clone dari Telkomsel yang dibangun menggunakan Flutter dan GetX. Aplikasi ini menampilkan fitur-fitur utama seperti manajemen pulsa, paket data, riwayat transaksi, inbox, bantuan, dan profil pengguna dengan arsitektur modular dan state management yang efisien.",
  });

  return (
    <div className="max-w-6xl mx-auto pt-30 px-4 pb-20 bg-bg text-text">
      <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold">
        MyTSel - Telkomsel Mobile App Clone
      </h1>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        MyTSel adalah aplikasi mobile clone dari Telkomsel yang dikembangkan
        menggunakan <strong>Flutter</strong> dengan arsitektur{" "}
        <strong>MVC (Model-View-Controller)</strong> dan <strong>GetX</strong>{" "}
        sebagai state management & routing. Aplikasi ini dirancang dengan
        pendekatan modular untuk memudahkan maintainability dan scalability,
        serta menggunakan custom widgets untuk menciptakan UI yang identik
        dengan aplikasi Telkomsel asli.
      </p>

      <h2 className="mt-6 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        1. Splash Screen
      </h2>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Splash screen ditampilkan selama 3 detik menggunakan{" "}
        <code>FutureBuilder</code> dengan <code>Future.delayed</code>. Logo
        Telkomsel ditampilkan di tengah layar dengan background merah yang
        merupakan brand color utama Telkomsel. Setelah delay selesai, aplikasi
        navigasi ke halaman Login secara otomatis.
      </p>

      <img
        loading="lazy"
        src={splash}
        alt="Splash Screen MyTSel"
        className="w-70"
      />

      <h2 className="mt-6 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        2. Login Page
      </h2>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Halaman login menggunakan <code>GetView&lt;LoginController&gt;</code>{" "}
        dengan reactive state management melalui GetX. Fitur meliputi input
        nomor telepon dengan validasi, checkbox persetujuan syarat & ketentuan
        menggunakan <code>Obx</code> untuk reactive binding, serta tombol social
        login (Facebook & Twitter) dengan <code>TapGestureRecognizer</code>{" "}
        untuk link interaktif.
      </p>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Navigasi dari Login ke Navigation menggunakan{" "}
        <code>Get.offNamed(Routes.NAVIGATION)</code> yang menghapus stack
        navigasi sebelumnya (one-way navigation), sehingga user tidak dapat
        kembali ke halaman login setelah berhasil masuk.
      </p>

      <img
        loading="lazy"
        src={login}
        alt="Login Page MyTSel"
        className="w-70"
      />

      <h2 className="mt-6 text-[clamp(1.15rem,2vw,2rem)] font-semibold">
        3. Home Page (Beranda)
      </h2>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Halaman utama menampilkan informasi akun pengguna secara komprehensif
        dengan arsitektur widget yang terstruktur. Menggunakan{" "}
        <code>Stack</code> widget untuk layering background dan konten utama,
        serta <code>CustomClipper&lt;Path&gt;</code> untuk menciptakan bentuk
        curved header yang unik.
      </p>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        <strong>Komponen utama Home Page:</strong>
      </p>
      <ul className="mt-1 text-[clamp(0.9rem,1.5vw,1.2rem)] text-justify text-lg list-disc list-inside space-y-1">
        <li>
          <strong>Account Info Card:</strong> menampilkan nomor telepon, sisa
          pulsa, tanggal berlaku, dan Telkomsel POIN dengan gradient background
        </li>
        <li>
          <strong>Info Cards:</strong> ringkasan kuota Internet (GB), Telpon
          (Min), dan SMS dalam bentuk card interaktif
        </li>
        <li>
          <strong>Kategori Paket:</strong> grid 8 kategori (Internet, Telpon,
          SMS, Roaming, Hiburan, Unggulan, Tersimpan, Riwayat) menggunakan{" "}
          <code>LayoutBuilder</code> + <code>Wrap</code> untuk responsive layout
        </li>
        <li>
          <strong>Campaign Sections:</strong> horizontal scrollable lists untuk
          promosi, voucher, dan penawaran khusus
        </li>
      </ul>

      <div className="mt-2 p-3 bg-gray-900 text-green-400 rounded-lg text-sm font-mono overflow-x-auto"></div>

      <img loading="lazy" src={home} alt="Home Page MyTSel" className="w-70" />

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        <strong>Reusable CampaignWidget:</strong>
      </p>

      <p className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-justify text-lg">
        Widget card promosi yang mendukung dua mode tampilan: dengan teks (image
        + text) atau gambar saja. Menggunakan <code>StatelessWidget</code>{" "}
        dengan parameter <code>withText</code> sebagai toggle antar mode. Card
        menggunakan <code>Clip.antiAlias</code> dan <code>BorderRadius</code>{" "}
        untuk smooth image clipping.
      </p>

      <div className="flex flex-col md:flex-row gap-2 space-y-2">
        <img loading="lazy" src={reuse1} alt="section " className="w-70" />
        <img loading="lazy" src={reuse2} alt="section" className="w-70" />
      </div>

    </div>
  );
};

export default MyTSel;
