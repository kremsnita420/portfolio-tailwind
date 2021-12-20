import { useState } from "react";
import NextLink from "next/link";
//components
import Layout from "../components/layout/Layout";
import HeadTitle from "../components/layout/typography/HeadTitle";
import ProjectCard from "../components/Projects/ProjectCard";

//dependencies
import path from "path";
import fs from "fs/promises";

export default function IndexPage({ projects, href }) {
  const [projectCategory, setProjectCategory] = useState("");

  // get unique category items
  const uniqueItems = (x, i, array) => array.indexOf(x) === i;
  const PRODUCT_CATEGORIES = projects
    .map((prod) => prod.category)
    .filter(uniqueItems);
  PRODUCT_CATEGORIES.sort();

  return (
    <Layout title="Portfolio Page" description="First Page">
      <HeadTitle title="Portfolio" />

      <p className="text-2xl my-10">All my projects.</p>
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
          All
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

export async function getStaticProps() {
  //node.js file sistem
  //define working directory, folder and file path
  const filePath = path.join(process.cwd(), "data", "projects-list.json");
  //define data and parse it
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      projects: data.projectsData,
    },
  };
}
