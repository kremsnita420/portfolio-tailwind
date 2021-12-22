import NextImage from "next/image";
import { useRouter } from "next/router";
//components
import HeadTitle from "../components/layout/typography/HeadTitle";
import Layout from "../components/layout/Layout";
import SecondaryTitle from "../components/layout/typography/SecondaryTitle";
import Course from "../components/course/Course";
import Skills from "../components/skills/Skills";
//data
import { courses } from "../data/data";
//translation
import en from "../locales/en";
import sl from "../locales/sl";

export default function AboutPage() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sl;

  return (
    <Layout>
      {/* About Me */}
      <HeadTitle title={t.about_title1} />

      <div className="flex flex-col lg:flex-row items-center justify-start text-gray-400 dark:text-gray-800">
        <div className="flex items-center  justify-center pb-10">
          <NextImage src="/images/portrait.png" width={550} height={600} />
        </div>

        <div className="flex text-center flex-col items-start justify-between md:pl-10 lg:w-2/3 xl:w-1/2">
          <h2 className="font-heading1 w-full font-black text-gray-800 dark:text-gray-200 text-2xl md:text-3xl mb-5 relative">
            {/* Hello, my name Is */}
            {t.about_text1} <br />
            <span className="text-6xl font-black span-safet">Safet</span>,
            <span className="text-6xl font-black span-developer">
              <br />
              {/* Web Developer */}
              {t.about_text2}
            </span>
            <br />
            {/* living in Ljubljana */}
            {t.about_text3}
          </h2>

          <p className="mb-5 text-xl md:text-2xl relative">
            {/* In January 2021 I have quit my job to learn */}
            {t.about_text4}{" "}
            <span className="realistic-marker-highlight rotate-[3deg] inline-block">
              <span className=" animate-moveRight2">
                {/* Web development. */}
                {t.about_text5}
              </span>
            </span>
            {/* Since then I spend */}
            {t.about_text6}{" "}
            <span className="realistic-marker-highlight inline-block rotate-[-3deg] z-[-1]">
              <span className=" animate-moveRight3">
                {/* all my time */}
                {t.about_text7}
              </span>
            </span>{" "}
            {/* learning fundamentals of */}
            {t.about_text8}{" "}
            <span className="realistic-marker-highlight rotate-[3deg] inline-block z-[-1]">
              <span className=" animate-moveRight4">
                {/* frontend */}
                {t.about_text9}
              </span>
            </span>{" "}
            {/* and */}
            {t.about_text10}{" "}
            <span className="realistic-marker-highlight rotate-[3deg] inline-block">
              <span className=" animate-moveRight5">
                {/* backend */}
                {t.about_text11}
              </span>
            </span>{" "}
            {/* of web technologies and I'm loving every second of it. */}
            {t.about_text12}
          </p>

          <p className="mb-5  text-xl md:text-2xl">
            {/* I love building apps that are */}
            {t.about_text13}{" "}
            <span className="realistic-marker-highlight inline-block rotate-[3deg]">
              <span className=" animate-moveRight6">
                {/* simple */}
                {t.about_text14}
              </span>
            </span>{" "}
            {/* and */}
            {t.about_text15}{" "}
            <span className="realistic-marker-highlight inline-block rotate-[3deg]">
              <span className=" animate-moveRight7">
                {/* user-friendly. */}
                {t.about_text16}
              </span>
            </span>
          </p>
        </div>
      </div>
      <h2 className="font-heading1 relative text-xl md:text-2xl xl:text-3xl font-black my-5">
        {/* I'm looking for a position: */}
        {t.about_text17}
      </h2>

      <div className="marquee-wrapper rotate-6 my-10">
        <div className="marquee text-3xl">
          <p className="py-2 bg-yellow-300 border-black enveloppe border-dashed">
            ☠️{t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{" "}
            {t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{" "}
            {t.banner_text} ☠️ {t.banner_text} ☠️
            {t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text}
            ☠️{" "}
          </p>
          <p className="py-2 bg-yellow-300 border-black enveloppe border-dashed">
            {t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text}
            ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{" "}
            {t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{" "}
            {t.banner_text} ☠️ {t.banner_text} ☠️{" "}
          </p>
          <p className="py-2 bg-yellow-300 border-black enveloppe border-dashed">
            {t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text}
            ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{" "}
            {t.banner_text} ☠️ {t.banner_text} ☠️ {t.banner_text} ☠️{" "}
            {t.banner_text} ☠️ {t.banner_text} ☠️{" "}
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <SecondaryTitle title={t.about_title2} />
      {/* skills */}
      <Skills />
      {/* Courses & Certifications */}
      <SecondaryTitle title={t.about_title3} />
      <div className="flex flex-col md:flex-row items-center justify-start text-gray-800 dark:text-gray-400">
        <p className="text-xl md:text-2xl py-5 mb-10 md:px-2 w-full text-center sketch-highlight">
          {/* Here is a list of completed courses and certifications so fa
        If you wish to know more about a specific course click the card 
        and it will take you to the course provider's website. */}
          {t.about_text18}
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
            bootcamp={course.bootcamp}
          />
        ))}
      </div>
    </Layout>
  );
}
