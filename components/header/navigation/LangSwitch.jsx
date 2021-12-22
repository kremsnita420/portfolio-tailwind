import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

import { FaLanguage } from "react-icons/fa";

export default function LangSwitch() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [mounted]);

  return (
    <div className="flex flex-col items-center justify-center">
      {mounted && (
        <NextLink
          href={router.asPath}
          locale={router.locale === "en" ? "sl" : "en"}
        >
          <button>
            <FaLanguage />
          </button>
        </NextLink>
      )}
    </div>
  );
}
