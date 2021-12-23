import { useState } from "react";
//components
import Layout from "../components/layout/Layout";
import HeadTitle from "../components/layout/typography/HeadTitle";
import ProjectCard from "../components/Projects/ProjectCard";

//dependencies
import path from "path";
import fs from "fs/promises";

//translation
import en from "../locales/en";
import sl from "../locales/sl";
import { useRouter } from "next/router";

export default function PortfolioPage({ projectsEn, projectsSl }) {
  const [projectCategory, setProjectCategory] = useState("");
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sl;
  const projects = locale === "en" ? projectsEn : projectsSl;

  // get unique category items
  const uniqueItems = (x, i, array) => array.indexOf(x) === i;
  const PRODUCT_CATEGORIES = projects
    .map((prod) => prod.category)
    .filter(uniqueItems);
  PRODUCT_CATEGORIES.sort();

  return (
    <Layout title="Portfolio Page" description="First Page">
      <HeadTitle title={t.projects_title} />

      <p className="text-2xl my-10">{t.projects_text1}</p>
      {/* categories filter */}
      <div className="flex">
        <button
          onClick={() => setProjectCategory("")}
          className={
            projectCategory === ""
              ? "ring-1 m-2 px-2 py-1 hover:opacity-50 bg-blue-400"
              : "ring-1 m-2 px-2 py-1 "
          }
        >
          {t.projects_text2}
        </button>

        {PRODUCT_CATEGORIES.map((category, i) => (
          <button
            onClick={() => {
              setProjectCategory(category);
            }}
            className={
              category === projectCategory
                ? "ring-1 m-2 px-2 hover:opacity-50 py-1 bg-red-400"
                : "ring-1 m-2 px-2 py-1"
            }
            key={i}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 my-20 gap-10 justify-center items-center mx-auto ">
        {projects
          .filter((filterProject) =>
            filterProject.category.includes(projectCategory)
          )
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
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  //node.js file sistem
  //define working directory, folder and file path
  const filePathEn = path.join(process.cwd(), "data", "projects-list.json");
  const filePathSl = path.join(process.cwd(), "data", "projects-list-slo.json");
  //define data and parse it
  const jsonDataEn = await fs.readFile(filePathEn);
  const jsonDataSl = await fs.readFile(filePathSl);
  const dataEn = JSON.parse(jsonDataEn);
  const dataSl = JSON.parse(jsonDataSl);

  return {
    props: {
      projectsEn: dataEn.projectsData,
      projectsSl: dataSl.projectsData,
      locale,
    },
  };
}
