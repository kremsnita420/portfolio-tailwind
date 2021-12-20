import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";

export default function SocialIcons() {
  return (
    <div div className="">
      <div className="flex items-center px-2 glassmorph rounded-full py-2 justify-around mt-10 text-4xl">
        <a
          href="https://www.linkedin.com/in/safet-duranovic/"
          target="_blank"
          rel="noopener"
          className="mx-2"
        >
          <AiFillLinkedin className="hover:scale-125 hover:bg-gradient-to-br from-pink-400 to-red-600 dark:from-blue-600 dark:to-pink-900 transition-all rounded-md" />
        </a>

        <a
          href="https://github.com/kremsnita420?tab=repositories"
          target="_blank"
          rel="noopener"
          className="mx-2"
        >
          <AiFillGithub className="hover:scale-125 hover:bg-gradient-to-br from-pink-400 to-red-600 dark:from-blue-600 dark:to-pink-900 transition-all rounded-md" />
        </a>

        <a href="mailto:duranovic.safet@gmail.com">
          <AiOutlineMail className="hover:scale-125 hover:bg-gradient-to-br from-pink-400 to-red-600 dark:from-blue-600 dark:to-pink-900 transition-all rounded-md" />
        </a>

        <a href="tel:0038640867888" className="mx-2">
          <GiRotaryPhone className="hover:scale-125 hover:bg-gradient-to-br from-pink-400 to-red-600 dark:from-blue-600 dark:to-pink-900 transition-all rounded-md" />
        </a>
      </div>
    </div>
  );
}
