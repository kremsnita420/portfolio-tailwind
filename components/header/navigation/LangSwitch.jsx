import { useRouter } from "next/router";
import NextLink from "next/link";

import { FaLanguage } from "react-icons/fa";

export default function LangSwitch() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <NextLink
        href={router.asPath}
        locale={router.locale === "en" ? "sl" : "en"}
      >
        <button>
          <FaLanguage />
        </button>
      </NextLink>
    </div>
  );
}
