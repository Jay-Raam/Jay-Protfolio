import ExperienceCard from "./ExperienceCard";
import { workExperience } from "./experienceDetails";


export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-12 py-20"
    >
      <h1 className="text-center text-[36px] font-bold text-white md:text-[48px]">
        Work Experience
      </h1>

      <div className="flex w-[90%] flex-col items-center gap-10 lg:max-w-[1000px]">
        {workExperience.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
}
