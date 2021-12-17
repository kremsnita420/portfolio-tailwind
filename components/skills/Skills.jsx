//icons
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb, DiGit, DiNpm, DiReact } from "react-icons/di";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoIosCodeWorking,
} from "react-icons/io";
import {
  SiExpress,
  SiVercel,
  SiFirebase,
  SiHeroku,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiBootstrap,
  SiMaterialui,
  SiGithub,
  SiVisualstudiocode,
  SiGooglechrome,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="flex flex-col text-lg md:flex-row w-full items-center md:items-start justify-around glassmorph">
      <div className="flex flex-col items-start justify-center">
        {/* FRONTEND */}
        <h3 className="text-gray-600 dark:text-gray-400 uppercase justify-center my-2">
          FRONTEND
        </h3>

        <ul className="flex flex-col items-center md:items-start justify-center my-5 leading-7">
          <li className="flex items-center justify-center">
            <AiFillHtml5 /> HTML
          </li>
          <li className="flex items-center justify-center">
            <DiCss3 /> CSS
          </li>
          <li className="flex items-center justify-center">
            <IoLogoJavascript /> Javascript
          </li>
          <li className="flex items-center justify-center">
            <DiReact /> React
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* BACKEND */}
        <h3 className="text-gray-600 dark:text-gray-400 uppercase my-2">
          BACKEND
        </h3>

        <ul className="flex flex-col items-center md:items-start justify-center my-5 leading-7">
          <li className="flex items-center justify-center">
            <IoLogoNodejs /> Node
          </li>
          <li className="flex items-center justify-center">
            <SiExpress /> Express
          </li>
          <li className="flex items-center justify-center">
            <DiMongodb /> MongoDB
          </li>
          <li className="flex items-center justify-center">
            <IoIosCodeWorking /> RestAPI
          </li>
          <li className="flex items-center justify-center">
            <SiVercel /> Vercel
          </li>
          <li className="flex items-center justify-center">
            <SiFirebase /> Firebase
          </li>
          <li className="flex items-center justify-center">
            <SiHeroku /> Heroku
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* FRAMEWORKS */}
        <h3 className="text-gray-600 justify-center dark:text-gray-400 uppercase my-2">
          FRAMEWORKS
        </h3>

        <ul className="flex flex-col items-center md:items-start  justify-center my-5 leading-7">
          <li className="flex items-center justify-center">
            <SiNextdotjs /> NextJS
          </li>
          <li className="flex items-center justify-center">
            <SiTailwindcss /> TailwindCSS
          </li>
          <li className="flex items-center justify-center">
            <SiStyledcomponents /> Styled Components
          </li>
          <li className="flex items-center justify-center">
            <SiBootstrap /> Bootstrap
          </li>
          <li className="flex items-center justify-center">
            <SiMaterialui /> MaterialUI
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* TOOLS */}
        <h3 className="text-gray-600 dark:text-gray-400 uppercase my-2">
          TOOLS
        </h3>

        <ul className="flex flex-col items-center md:items-start  justify-center my-5 leading-7">
          <li className="flex items-center justify-center">
            <SiGithub /> Github
          </li>
          <li className="flex items-center justify-center">
            <DiGit /> Git
          </li>
          <li className="flex items-center justify-center">
            <DiNpm /> npm
          </li>
          <li className="flex items-center justify-center">
            <SiGooglechrome /> Chrome
          </li>
          <li className="flex items-center justify-center">
            <SiVisualstudiocode /> VSCode
          </li>
        </ul>
      </div>
    </div>
  );
}
