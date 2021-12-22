import { useRouter } from "next/router";
import CtaButton from "../layout/CtaButton";

import en from "../../locales/en";
import sl from "../../locales/sl";

export default function HeroText() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sl;

  return (
    <div className="flex flex-col items-center justify-start md:justify-center w-full min-h-[calc(100vh-76px)] relative mt-20 md:mt-0">
      <h2 className=" text-xl md:text-2xl xl:text- animate-moveRight2 mb-14">
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          {t.text1}
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          {t.text2}
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          {t.text3}
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2  text-gray-800 dark:text-gray-200 border-r-2 border-gray-800 dark:border-gray-200">
          {t.text4}
        </span>
      </h2>
      <h1
        className=" text-6xl md:text-[8rem] xl:text-[12rem] text-center mb-14
		text-transparent bg-clip-text	bg-gradient-to-b from-blue-500 to-pink-700 dark:from-blue-400 dark:to-green-500 font-heading1 font-black animate-moveRight2"
      >
        Safet
        <br />
        <span className=" font-normal text-transparent bg-clip-text	bg-gradient-to-b dark:from-green-400 dark:to-blue-600 from-pink-700 to-blue-500">
          {" "}
          Duranović
        </span>
      </h1>

      <h2 className="text-1xl md:text-2xl xl:text-3xl animate-moveRight3 mb-20">
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          {t.text5}
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          {t.text6}
        </span>

        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200">
          {t.text7}
        </span>
        <span className="p-1 px-2 border-t-2 border-l-2 border-b-2 text-gray-800 dark:text-gray-200 border-r-2 border-gray-800 dark:border-gray-200">
          {t.text8}
        </span>
      </h2>

      <div className="flex animate-moveRight4">
        <CtaButton title={t.portfolio} link="/portfolio" />
      </div>
    </div>
  );
}
