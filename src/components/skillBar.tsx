import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Frontend Development", level: "96%" },
  { name: "Backend Development", level: "95%" },
  { name: "AI/ML Engineering", level: "90%" },
  // { name: "Graphic Design", level: "87%" },
];

export default function SkillBars() {
  // Animasi jalan saat 20% elemen terlihat di layar
  const { ref, inView } = useInView({  threshold: 0.5 });

  return (
    <div ref={ref} className="mt-4 col-span-2 md:col-span-1 space-y-6 scroll-fadeInUp">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between text-lg font-semibold">
            <span>{skill.name}</span>
            {/* <span className="text-sm">{skill.level}</span> */}
          </div>

          <div className="relative flex items-center mt-3 h-8">
            <div className="absolute w-full h-2 rounded-full bg-surface"></div>

            {/* Lebar disesuaikan dengan status inView */}
            <div
              className="absolute h-2 rounded-full bg-text flex items-center transition-all duration-1000 ease-out"
              style={{
                width: inView ? skill.level : "0%",
                transitionDelay: `${index * 100}ms`, // Efek bertahap (stagger) antar skill
              }}
            >
              <div className="absolute right-0 translate-x-1/2 w-8 h-8 rounded-full bg-text flex items-center justify-center">
                <div className="p-[10px] bg-surface rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}