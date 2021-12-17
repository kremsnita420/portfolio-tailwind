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
      <HeadTitle title="About Page" />

      <div className="flex flex-col md:flex-row items-center justify-start text-gray-800 dark:text-gray-400">
        <div className="flex items-center  justify-center pb-10">
          <NextImage src="/images/portrait.png" width={550} height={600} />
        </div>

        <div className="flex flex-col items-start justify-between md:pl-10 md:w-2/3 xl:w-1/2 ">
          <h2 className="font-heading1 font-black text-gray-800 dark:text-gray-200 text-xl md:text-2xl mb-5 relative">
            Hello, my name Is{" "}
            <span className="text-4xl font-normal span-safet">Safet</span>,
            <span className="text-4xl font-normal span-developer">
              <br />
              Web Developer
            </span>{" "}
            living in Ljubljana.
          </h2>
          <p className="mb-5 text-lg md:text-xl relative">
            In January 2021 I have quit my job to learn{" "}
            <span className="bg-red-400 px-1 rounded-bl-xl rounded-tr-xl">
              <span className=" animate-moveRight2"> Web</span>
            </span>{" "}
            <span className="bg-red-400 px-1 rounded-bl-xl rounded-tr-xl">
              <span className=" animate-moveRight2">development</span>
            </span>
            . Since then I spend all my time learning fundamentals of{" "}
            <span className="bg-red-400 px-1 rounded-bl-xl rounded-tr-xl">
              <span className=" animate-moveRight3">frontend</span>
            </span>{" "}
            and{" "}
            <span className="bg-red-400 px-1 rounded-bl-xl rounded-tr-xl">
              <span className=" animate-moveRight3">backend</span>
            </span>{" "}
            web technologies and I'm loving every second of it.
          </p>
          <p className="mb-5 text-lg md:text-xl">
            I love building apps that are{" "}
            <span className="bg-red-400 px-1 rounded-bl-xl rounded-tr-xl">
              <span className=" animate-moveRight4">simple</span>
            </span>{" "}
            and{" "}
            <span className="bg-red-400 px-1 rounded-bl-xl rounded-tr-xl">
              <span className=" animate-moveRight4"> user </span>
            </span>
            <span className="bg-red-400 px-1 rounded-bl-xl rounded-tr-xl">
              <span className=" animate-moveRight4"> friendly</span>
            </span>
            .
          </p>
          <p className="mb-5 mx-auto mt-2 text-center text-xl md:text-2xl">
            I'm looking for position: <br />
            <span className="bg-green-400 text-gray-800 dark:text-gray-200  p-3">
              <span className=" inline-block ring-2 ring-gray-400 p-1 font-strong font-heading1 font-extrabold animate-rotateText mt-5">
                Junior Web Developer
              </span>
            </span>{" "}
          </p>
        </div>
      </div>

      <SecondaryTitle title="Tech Stack" />

      {/* skills */}

      <Skills />

      <SecondaryTitle title="Courses & Certifications" />

      <div className="flex flex-col md:flex-row items-center justify-start text-gray-800 dark:text-gray-400">
        <p className="text-lg md:text-xl mb-10 md:px-2 w-full text-center">
          Here is a list of completed courses and certifications so far. If you
          wish to know more about specific course click the card and it will
          take you to course provider's website.
        </p>
        <div className="flex items-center w-full justify-center mb-20">
          <NextImage
            className="rounded-full"
            src="/images/thinking.png"
            width={350}
            height={350}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-20  items-center justify-between">
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
