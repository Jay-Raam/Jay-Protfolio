import SongCarousel from "./SongCarousel";
import SongCarousel2 from "./SongCarousel2";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"BUILT WITH DISCIPLINE. DESIGNED WITH INTENTION."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] lg:mb-16 lg:max-w-[90%] lg:text-[24px]">

            <AnimatedBody text={"Every project starts the same way — with a problem that needs to be solved."} />

            <AnimatedBody text={"Not theory. Not trends. Real work."} />

            <AnimatedBody
              text={
                "The journey into development grew from curiosity, but it stayed because of responsibility. Systems need to work. Businesses depend on them. Users don’t care how clever the code is — they care if it runs without breaking."
              }
            />

            <AnimatedBody text={"That mindset shapes everything."} />

            <AnimatedBody
              text={
                "Clean structure over chaos. Practical solutions over over-engineering. Strong fundamentals over shortcuts."
              }
            />

            <AnimatedBody
              text={
                "There’s respect for how things have always been built — solid foundations first, polish later. At the same time, there’s constant learning, adapting, and improving."
              }
            />

            <AnimatedBody
              text={
                "Development here isn’t about hype. It’s about reliability. Consistency. Delivery."
              }
            />

            <AnimatedBody text={"Build it properly. Test it properly. Maintain it properly."} />

            <AnimatedBody
              text={
                "Calm under pressure. Relentless with learning. Honest with the craft."
              }
            />

            <AnimatedBody
              text={
                "The standard stays high — even when no one is watching."
              }
            />

            <AnimatedBody
              text="நானும் திசை காட்டி தான் திசைகாட்டிகள் ஊர் போய் சேர்வதில்லை..."
              className="text-center"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">

            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={"text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody text={"JavaScript (ES6+), React, Next.js, Ionic, Capacitor, TypeScript, Redux, Redux Toolkit, Vite, HTML5, Git/GitHub."} />
            </div>

            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Backend & Database Tools"}
                className={"text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody text={"Node.js, MongoDB, Express.js, MySQL"} />
            </div>

            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"UI Libraries"}
                className={"text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody text={"CSS3/SCSS/SASS, Tailwind CSS, Material UI, Shadcn UI, Framer Motion, Bootstrap."} />
            </div>

            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={"text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody text={"Figma, FigJam, InVision, Adobe XD, Sketch, Premiere Pro, Adobe Photoshop, UX Research, UI Design, Prototyping."} />
            </div>

            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Extra Tools"}
                className={"text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody text={"Firebase, MQTT, Android, iOS"} />
            </div>

          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
        <div className="h-[500px] w-full">
          <SongCarousel />
          <SongCarousel2 />
        </div>
        <AnimatedBody
          text="A few songs I can recommend if you're looking for some fresh tunes :)"
          className="mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
    </section>
  );
};

export default About;
