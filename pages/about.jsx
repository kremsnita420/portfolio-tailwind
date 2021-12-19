import NextImage from "next/image";
//components
import HeadTitle from "../components/layout/typography/HeadTitle";
import Layout from "../components/layout/Layout";
import SecondaryTitle from "../components/layout/typography/SecondaryTitle";
//data
import { courses } from "../data/data";
import Course from "../components/course/Course";

import Skills from "../components/skills/Skills";

export default function AboutPage() {
  return (
    <Layout>
      <HeadTitle title="About Me" />
      {/* hightlight svg */}
      <svg
        xmlns="//www.w3.org/2000/svg"
        version="1.1"
        className="svg-filters absolute h-0"
      >
        <defs>
          <filter id="marker-shape">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0 0.15"
              numOctaves="1"
              result="warp"
            />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="30"
              in="SourceGraphic"
              in2="warp"
            />
          </filter>
        </defs>
      </svg>

      <div className="flex flex-col lg:flex-row items-center justify-start text-gray-800 dark:text-gray-400">
        <div className="flex items-center  justify-center pb-10">
          <NextImage src="/images/portrait.png" width={550} height={600} />
        </div>

        <div className="flex flex-col items-start justify-between md:pl-10 lg:w-1/2">
          <h2 className="font-heading1 font-black text-gray-800 dark:text-gray-200 text-xl md:text-2xl mb-5 relative">
            Hello, my name Is{" "}
            <span className="text-4xl font-black span-safet">Safet</span>,
            <span className="text-4xl font-black span-developer">
              <br />
              Web Developer
            </span>{" "}
            living in Ljubljana.
          </h2>

          <p className="mb-5 text-lg md:text-xl relative ">
            In January 2021 I have quit my job to learn{" "}
            <span className=" realistic-marker-highlight rotate-[3deg] inline-block">
              <span className=" animate-moveRight2">Web development</span>
            </span>
            . Since then I spend{" "}
            <span className="realistic-marker-highlight inline-block rotate-[-3deg] z-[-1]">
              <span className=" animate-moveRight3">all my time</span>
            </span>{" "}
            learning fundamentals of{" "}
            <span className="realistic-marker-highlight rotate-[3deg]  inline-block z-[-1]">
              <span className=" animate-moveRight4">frontend</span>
            </span>{" "}
            and{" "}
            <span className="realistic-marker-highlight rotate-[3deg] inline-block">
              <span className=" animate-moveRight5">backend</span>
            </span>{" "}
            web technologies and I'm loving every second of it.
          </p>

          <p className="mb-5 text-lg md:text-xl">
            I love building apps that are{" "}
            <span className="realistic-marker-highlight inline-block rotate-[3deg]">
              <span className=" animate-moveRight6">simple</span>
            </span>{" "}
            and{" "}
            <span className="realistic-marker-highlight inline-block rotate-[3deg]">
              <span className=" animate-moveRight7"> user-friendly</span>
            </span>
            .
          </p>
        </div>
      </div>

      <h2 className="font-heading1 relative text-xl md:text-2xl xl:text-3xl font-black my-5">
        I'm looking for position:
      </h2>

      <div className="wrapper realistic-marker-highlight rotate-[2.5deg] text-3xl my-20">
        <p className="marquee realistic-marker-highlight py-2">
          <span className="pt-1  dark:bg-red-300 bg-green-300">
            ⭐Junior Web Developer⭐ ⭐Junior Web Developer⭐ ⭐Junior Web
            Developer⭐ ⭐Junior Web Developer⭐ ⭐Junior Web Developer⭐
            ⭐Junior Web Developer⭐ ⭐Junior Web Developer⭐{"  "}
          </span>
        </p>
        <p className="marquee marquee2 py-2">
          <span className="pt-1  dark:bg-red-300 bg-green-300">
            ⭐Junior Web Developer⭐ ⭐Junior Web Developer⭐ ⭐Junior Web
            Developer⭐ ⭐Junior Web Developer⭐ ⭐Junior Web Developer⭐
            ⭐Junior Web Developer⭐ ⭐Junior Web Developer⭐{"  "}
          </span>
        </p>
        <p className="marquee marquee3 py-2">
          <span className="pt-1">
            ⭐Junior Web Developer⭐ ⭐Junior Web Developer⭐ ⭐Junior Web
            Developer⭐ ⭐Junior Web Developer⭐ ⭐Junior Web Developer⭐
            ⭐Junior Web Developer⭐ ⭐Junior Web Developer⭐{"  "}
          </span>
        </p>
      </div>

      <SecondaryTitle title="Tech Stack" />

      {/* skills */}

      <Skills />

      <SecondaryTitle title="Courses & Certifications" />

      <div className="flex flex-col md:flex-row items-center justify-start text-gray-800 dark:text-gray-400">
        <p className="text-lg md:text-xl mb-10 md:px-2 w-full text-center sketch-highlight">
          Here is a list of completed courses and certifications so far. If you
          wish to know more about specific course click the card and it will
          take you to course provider's website.
        </p>
        <div className="flex items-center w-full justify-center my-10">
          <NextImage
            className="rounded-[5rem]"
            src="/images/thinking.png"
            width={350}
            height={350}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-20 items-center justify-between">
        {courses.map((course) => (
          <Course
            key={course.id}
            date={course.date}
            title={course.title}
            link={course.link}
            platform={course.platform}
          />
        ))}
      </div>
    </Layout>
  );
}
