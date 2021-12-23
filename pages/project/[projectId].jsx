import NextImage from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
//dependencies
import path from "path";
import fs from "fs/promises";
//components
import HeadTitle from "../../components/layout/typography/HeadTitle";
import Layout from "../../components/layout/Layout";
import ScrollToBottomButton from "../../components/layout/ScrollBottomButton";
import SecondaryTitle from "../../components/layout/typography/SecondaryTitle";
import ButtonStyled from "../../components/layout/ButtonStyled";
//translation
import en from "../../locales/en";
import sl from "../../locales/sl";

export default function ProjectPage({ filteredProjectEn, filteredProjectSl }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sl;
  const filteredProject =
    locale === "en" ? filteredProjectEn : filteredProjectSl;
  const [selectedImage, setSelectedImage] = useState(filteredProject.image[0]);

  return (
    <Layout
      title={filteredProject.title}
      description={filteredProject.description}
    >
      <HeadTitle title={filteredProject.title} />

      {/* selected image */}
      <div className="h-full m-auto w-full mb-5">
        <NextImage
          className="object-contain"
          src={selectedImage}
          height={800}
          width={1400}
          layout="responsive" // required
          alt={filteredProject.title}
          placeholder="blur"
          blurDataURL="https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
      </div>

      {/* image thumbnails */}
      <div className="flex flex-wrap items-center justify-center">
        {filteredProject.image.map((img, i) => (
          <div
            key={i}
            className={
              selectedImage === img
                ? "border-4 border-gray-600 dark:border-gray-300 h-[80px] w-[80px]"
                : "border-4 border-transparent h-[80px] w-[80px]"
            }
          >
            <NextImage
              onClick={() => setSelectedImage(img)}
              placeholder="blur"
              blurDataURL="https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              onClick={() => setSelectedImage(img)}
              src={img}
              alt="thumbnail"
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-centerlg:justify-around text-2xl">
        {/* repository and live website */}
        <div className="flex flex-col items-start">
          <div className="flex flex-col justify-center text-center items-center w-full mt-10">
            {/* Github & Website */}
            <SecondaryTitle title={t.single_project_title1} />
            <p className=" mb-10">
              {/* You can see website */}
              {t.single_project_text1}{" "}
              <span className="circle-sketch-highlight inline-block">
                {/* in action */}
                {t.single_project_text2}
              </span>{" "}
              {/* or check code on Github by visiting links below. */}
              {t.single_project_text3}
            </p>
          </div>

          <div className="flex items-center justify-center mx-auto w-full">
            {filteredProject.links.map((l, i) => (
              <button
                key={i}
                className="text-blue-400  dark:text-red-400 m-2 lg:m-5 px-5 my-10 sm:my-0 py-2 rounded-md"
              >
                <a href={l.link} target="_blank" rel="noopener">
                  <ButtonStyled title={l.name} />
                </a>
              </button>
            ))}
          </div>
        </div>

        {/* project description */}
        <div className="flex-col items-center w-full text-center justify-center">
          <div className="flex flex-col justify-center items-center w-full mt-10">
            {/* Description */}
            <SecondaryTitle title={t.single_project_title2} />
            <p className="">{filteredProject.description}</p>
          </div>
          <div className="flex flex-col justify-start items-start md:flex-row w-full mt-10">
            <div className="flex flex-col justify-center items-center w-full md:mr-10">
              {/* Technologies */}
              <SecondaryTitle title={t.single_project_title3} />
              <ul className=" py-2 mb-10 text-gray-800 dark:text-gray-200">
                {filteredProject.technologies.map((tech, i) => (
                  <li
                    className=" py-2 text-center glassmorph mb-5 px-2"
                    key={i}
                  >
                    <h4 className="font-heading1 font-black mb-2">
                      <span className="circle-sketch-highlight p-1 inline-block">
                        {i + 1}. {tech.name}
                      </span>
                    </h4>
                    <p className="pb-2">{tech.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col w-full justify-center items-center py-2 md:ml-10">
              {/* Features */}
              <SecondaryTitle title={t.single_project_title4} />
              <ul className=" py-2 glassmorph mb-10 px-2 text-gray-800 dark:text-gray-200">
                {filteredProject.features.map((feature, i) => (
                  <li className=" py-2 text-center" key={i}>
                    <h5 className="font-heading1 font-black mb-2 ">
                      <span className="sketch-highlight p-2 inline-block">
                        {i + 1}. {feature.name}
                      </span>
                    </h5>
                    <p className="pb-2">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full mt-10">
            {/* todo list */}
            <SecondaryTitle title={t.single_project_title5} />
          </div>

          <p className="text-lg md:text-xl mb-10">
            {/* Here is a */}
            {t.single_project_text4}{" "}
            <span className="sketch-highlight px-2 py-[2px] inline-block rotate-3">
              {/* list */}
              {t.single_project_text5}
            </span>{" "}
            {/* of some major functionalities that I'm planning to add in the future */}
            {t.single_project_text6}
          </p>

          <ul className="pb-10 text-gray-800 flex flex-col md:flex-row justify-center items-start dark:text-gray-200">
            {filteredProject.todos.map((todo, i) => (
              <li className="md:ml-5 py-2 text-center" key={i}>
                <h4 className="realistic-marker-highlight font-heading1 inline-block rotate-2 font-black mb-2">
                  {i + 1}. {todo.name}
                </h4>
                <p className="pb-2">{todo.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ScrollToBottomButton />
    </Layout>
  );
}

async function getData() {
  //node.js file sistem
  //define working directory, folder and file path
  const filePathEn = path.join(process.cwd(), "data", "projects-list.json");
  //define data and parse it
  const jsonDataEn = await fs.readFile(filePathEn);
  const dataEn = JSON.parse(jsonDataEn);
  return dataEn;
}

async function getData2() {
  //node.js file sistem
  //define working directory, folder and file path
  const filePathSl = path.join(process.cwd(), "data", "projects-list-slo.json");
  //define data and parse it
  const jsonDataSl = await fs.readFile(filePathSl);
  const dataSl = JSON.parse(jsonDataSl);
  return dataSl;
}

export async function getStaticProps(context) {
  const { params } = context;
  const projectIdSingle = params.projectId;

  const dataEn = await getData();
  const dataSl = await getData2();

  //filter results and return only one that matches with id
  const projectSl =
    dataSl.projectsData.find((project) => project.id === projectIdSingle) ||
    null;
  const projectEn =
    dataEn.projectsData.find((project) => project.id === projectIdSingle) ||
    null;

  //define fallback if data are not found
  if (!projectSl || !projectEn) {
    return { notFound: true };
  }

  return {
    props: {
      filteredProjectSl: projectSl,
      filteredProjectEn: projectEn,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { projectId: "pp1" }, locale: "en" },
      { params: { projectId: "pp1" }, locale: "sl" },
      { params: { projectId: "pp2" }, locale: "en" },
      { params: { projectId: "pp2" }, locale: "sl" },
      { params: { projectId: "pp3" }, locale: "en" },
      { params: { projectId: "pp3" }, locale: "sl" },
      { params: { projectId: "pp4" }, locale: "en" },
      { params: { projectId: "pp4" }, locale: "sl" },
      { params: { projectId: "pp5" }, locale: "en" },
      { params: { projectId: "pp5" }, locale: "sl" },
    ],
    fallback: false,
  };
}
