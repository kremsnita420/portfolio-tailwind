import { useRouter } from "next/router";
import NextLink from "next/link";

import { FaLanguage } from "react-icons/fa";

export default function LangSwitch() {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="flex flex-col items-center justify-center">
      {locale === "en" ? (
        <NextLink href={router.asPath} locale="sl">
          <button className=" text-xl cursor-pointer font-black active:rotate-[1080deg] transition-all ">
            EN
          </button>
        </NextLink>
      ) : (
        <NextLink href={router.asPath} locale="en">
          <button className=" text-xl cursor-pointer font-black active:rotate-[1080deg] transition-all  ">
            SL
          </button>
        </NextLink>
      )}
    </div>
  );
}
