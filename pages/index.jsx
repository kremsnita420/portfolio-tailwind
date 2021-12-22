import NextLink from "next/link";
//components
import Layout from "../components/layout/Layout";
import HeadTitle from "../components/layout/typography/HeadTitle";
import ProjectCard from "../components/Projects/ProjectCard";
import HeroText from "../components/hero/HeroText";
import HeroBgSvg from "../components/hero/HeroBgSvg";
//dependencies
import path from "path";
import fs from "fs/promises";
import ScrollToBottomButton from "../components/layout/ScrollBottomButton";
import SecondaryTitle from "../components/layout/typography/SecondaryTitle";
import ContactForm from "../components/contact-form/ContactForm";
//translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function IndexPage({ projects, locale }) {
  const { t } = useTranslation();

  return (
    <Layout title="Home Page" description="Home Page">
      {/* hero section */}
      <div className="relative flex items-start w-full justify-center">
        <HeroText />
        <HeroBgSvg />
      </div>
      <ScrollToBottomButton />

      {/* Projects section */}
      <HeadTitle title={t("home:featured1")} />

      <p className="text-2xl text-center mb-10">
        {t("home:featured2")}{" "}
        {
          <NextLink href="/portfolio">
            <a className="relative">
              <span className="sketch-highlight hover:text-red-300 dark:hover:text-green-300 hover:scale-110 transition-all px-2 p-1 mt-2 rotate-[3deg] inline-block">
                {t("home:featured3")}
              </span>
            </a>
          </NextLink>
        }
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-20 gap-10 mx-auto">
        {projects
          .filter((project) => project.isFeatured == true)
          .map((project) => (
            <div className="relative" key={project.id}>
              <ProjectCard
                id={project.id}
                image={project.image[0]}
                title={project.title}
                description={project.description}
              />
            </div>
          ))}
      </div>

      <SecondaryTitle title={t("home:contact11")} />
      <div className="flex w-full">
        <ContactForm />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  //node.js file sistem
  //define working directory, folder and file path
  const filePath = path.join(process.cwd(), "data", "projects-list.json");
  //define data and parse it
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      projects: data.projectsData,
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
