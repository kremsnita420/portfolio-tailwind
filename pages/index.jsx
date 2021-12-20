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

export default function IndexPage({ projects }) {
  return (
    <Layout title="Home Page" description="Home Page">
      {/* hero section */}

      <div className="relative flex items-start w-full justify-center">
        <HeroText />
        <HeroBgSvg />
      </div>
      <ScrollToBottomButton />

      {/* Projects section */}

      <HeadTitle id="projects" title="Featured Projects" />

      <p className="text-2xl text-center mb-10">
        Some of my selected projects that I'm working on. For all projects visit{" "}
        {
          <NextLink href="/portfolio">
            <a className="relative">
              <span className="sketch-highlight px-2 pb-1 mt-2 rotate-[3deg] inline-block">
                portfolio page
              </span>
            </a>
          </NextLink>
        }
        .
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

      <SecondaryTitle title="Get in touch" />
      <div className="flex w-full">
        <ContactForm />
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
