import NextLink from "next/link";
import CtaButton from "../layout/CtaButton";

export default function HeroText() {
  return (
    <div className="flex flex-col items-center justify-start md:justify-center w-full min-h-[calc(100vh-76px)] relative mt-20 md:mt-0">
      <h2 className=" text-xl md:text-2xl xl:text- animate-moveRight2 mb-14">
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          Hi,
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          my
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          name
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2  text-gray-800 dark:text-gray-200 border-r-2 border-gray-800 dark:border-gray-200">
          is
        </span>
      </h2>
      <h1
        className=" text-6xl md:text-[8rem] xl:text-[10rem] text-center mb-14
		text-transparent bg-clip-text	bg-gradient-to-br dark:from-pink-400 dark:to-red-600 from-blue-600 to-pink-900 font-heading1 font-black animate-moveRight2"
      >
        Safet
        <br />
        <span className=" font-normal text-transparent bg-clip-text 	bg-gradient-to-br dark:from-pink-400 dark:to-red-600 from-blue-600 to-pink-900">
          {" "}
          Duranović
        </span>
      </h1>

      <h2 className="text-1xl md:text-2xl xl:text-3xl animate-moveRight3 mb-20">
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          and
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          I'm
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          a
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          Web
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-r-2 border-gray-800 dark:border-gray-200">
          Developer
        </span>
      </h2>

      <div className="flex animate-moveRight4">
        <CtaButton title="Portfolio" link="/portfolio" />
      </div>
    </div>
  );
}
