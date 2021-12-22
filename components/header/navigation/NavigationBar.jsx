//translation
import { useTranslation } from "next-i18next";

import NavigationItem from "./NavigationItem";

export default function NavigationBar() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-end">
      <nav className=" text-gray-800 dark:text-gray-200 font-heading1 font-black text-xl">
        <NavigationItem href="/" text={t("home:home")} />
        <NavigationItem href="/portfolio" text={t("home:portfolio")} />
        <NavigationItem href="/about" text={t("home:about")} />
      </nav>
    </div>
  );
}
