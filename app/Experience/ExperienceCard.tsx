"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { ExperienceProps } from "./experienceDetails";

const ExperienceCard = ({
  id,
  role,
  company,
  duration,
  location,
  technologies,
  responsibilities,
}: ExperienceProps) => {
  return (
    <motion.div
      className="relative z-10 w-full overflow-hidden rounded-3xl bg-[#212531] px-8 py-10 md:px-12 md:py-12 lg:px-16 lg:py-14 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col gap-4 text-white">
        {/* --- Header --- */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[28px] font-bold md:text-[34px]">{role}</h2>
          <p className="flex items-center gap-2 text-[16px] font-medium text-[#9CA3AF] md:text-[18px]">
            <FontAwesomeIcon icon={faBuilding} />
            {company}
          </p>
          <p className="flex items-center gap-2 text-[14px] text-[#A1A1AA] md:text-[16px]">
            <FontAwesomeIcon icon={faCalendar} />
            {duration} • {location}
          </p>
        </div>

        {/* --- Technologies --- */}
        <div className="mt-4 flex flex-wrap gap-3">
          {technologies.map((tech: any, index: number) => (
            <span
              key={index}
              className="rounded-full border border-gray-500 px-3 py-1 text-[12px] font-semibold uppercase text-[#ddd] md:text-[13px]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* --- Responsibilities --- */}
        <div className="mt-6 space-y-2">
          <h3 className="text-[18px] font-semibold text-[#fff]">
            Key Responsibilities:
          </h3>
          <ul className="ml-5 list-disc space-y-1 text-[14px] leading-relaxed text-[#bbb] md:text-[15px]">
            {responsibilities.map((item: any, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
