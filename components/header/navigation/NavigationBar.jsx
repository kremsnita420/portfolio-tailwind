import NavigationItem from "./NavigationItem";
import en from "../../../locales/en.js";
import sl from "../../../locales/sl.js";
import { useRouter } from "next/router";

export default function NavigationBar() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sl;
  return (
    <div className="flex items-center justify-end">
      <nav className=" text-gray-800 dark:text-gray-200 font-heading1 font-black text-xl">
        <NavigationItem href="/" text={t.home} />
        <NavigationItem href="/portfolio" text={t.portfolio} />
        <NavigationItem href="/about" text={t.about} />
      </nav>
    </div>
  );
}
