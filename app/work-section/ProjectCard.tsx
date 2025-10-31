"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  roles,
  github,
  company,
  demo,
  image,
  available,
}: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      style={{
        backgroundColor: "#212531",
        position: "relative",
      }}
      className="relative z-10 w-full overflow-hidden rounded-3xl py-10 md:py-14 lg:py-16 transition-all duration-300"
      initial="initial"
      animate="animate"
    >
      <div
        className={`flex flex-col-reverse ${id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center justify-between gap-10 px-8 lg:px-14`}
      >
        {/* --- LEFT SECTION: TEXT --- */}
        <div className="w-full text-white lg:w-1/2">
          {/* Title */}
          <AnimatedTitle
            text={name}
            className="text-[30px] font-bold leading-tight md:text-[40px] lg:text-[44px]"
            wordSpace="mr-[0.25em]"
            charSpace="-mr-[0.01em]"
          />

          {/* Company Name */}
          {company && (
            <AnimatedBody
              text={company}
              className="mt-4 text-[15px] font-medium leading-relaxed text-[#95979D] md:text-[16px]"
            />
          )}

          {/* Description */}

          {/* Description */}
          <AnimatedBody
            text={description}
            className="mt-4 text-[15px] font-medium leading-relaxed text-[#95979D] md:text-[16px]"
          />

          {/* Roles & Responsibilities */}
          <div className="mt-8 space-y-3">
            <h3 className="text-[18px] font-semibold text-[#fff]">
              Roles & Responsibilities:
            </h3>
            <ul className="ml-5 list-disc space-y-2 text-[14px] leading-relaxed text-[#bbb] md:text-[15px]">
              {(expanded ? roles : roles.slice(0, 3)).map((role: any, i: number) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
            {roles.length > 3 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-[14px] text-[#fff] transition-all duration-200 hover:underline"
              >
                {expanded ? "Show Less ▲" : "Show More ▼"}
              </button>
            )}
          </div>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="rounded-full border border-gray-500 px-3 py-1 text-[12px] font-semibold uppercase text-[#ddd] md:text-[13px]"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* --- RIGHT SECTION: IMAGE --- */}
        <div className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-1/2">
          <Image
            src={image}
            alt={name}
            width={600}
            height={400}
            className="rounded-xl object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
