import hero from "../assets/hero_2.webp";


const AboutMe = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto pt-25 md:pt-50 min-h-screen text-text">
      <div className="grid grid-cols-2 p-8 gap-8 ">
        <div className="col-span-2 md:col-span-1  ">
          <div className="flex relative justify-center scroll-fadeIn">
            <div className="p-1 rounded-full bg-gradient-to-b from-[#FFE5D6] via-gray to-text shadow-[inset_0_4px_12px_rgba(0,0,0,0,0.8)] ">
              <div className="bg-bg rounded-full overflow-hidden w-50 h-50 md:w-100 md:h-100 ">
                <img
                  src={hero}
                  alt="Profile"
                  loading="lazy"
                  className="w-auto h-75 md:h-130 -mt-15 md:-mt-30 object-cover"
                />
              </div>
            </div>
            <div className="p-1 absolute -top-15 md:-top-30 w-50 h-25 md:w-100 md:h-50 overflow-hidden">
              <img
                src={hero}
                alt="Profile"
                className="w-auto h-75 md:h-130 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1  w-full flex flex-col md:-mt-20 gap-8 [content-visibility:auto]">
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-bold scroll-fadeInUp">About Me</h1>

            <p className="text-lg leading-relaxed mt-4 scroll-fadeInUp">
              I'm a Computer Science graduate who’s passionate about software
              development.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-8 p-1 bg-surface scroll-fadeInUp">
              Education
            </h2>

            <div className="mt-4 px-2 scroll-fadeInUp">
              <div className="text-sm md:text-base text-text font-medium">
                (2021–2026)
              </div>

              <div className="mt-1 ">
                <h2 className="text-lg md:text-xl font-semibold">
                  Bachelor of Computer Science
                </h2>

                <p className="text-sm md:text-base text-text">
                  Universitas Pembangunan Nasional “Veteran” Jawa Timur
                </p>
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-semibold mt-8 p-1 bg-surface scroll-fadeInUp">
              Certification
            </h1>

            <div className="mt-4 px-2 scroll-fadeInUp">
              <div className="text-sm md:text-base text-text font-medium">
                2025
              </div>

              <div className="mt-1 ">
                <h1 className="text-lg md:text-xl font-semibold">
                  Junior web programmer
                </h1>

                <p className="text-sm md:text-base text-text">
                  BNSP - Lembaga Sertifikasi Profesi UPN Veteran Jawa Timur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
