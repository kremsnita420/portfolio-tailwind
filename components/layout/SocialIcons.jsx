import {
  AiFillLinkedin,
  AiOutlineMail,
  AiFillGithub,
  AiFillPhone,
} from "react-icons/ai";

export default function SocialIcons() {
  return (
    <div className="social-marquee-wrapper py-3 text-4xl mt-2 text-center">
      <div className="social-marquee hover:animate-none transition-all glassmorph rounded-full mx-5 ml-1 ">
        <a
          href="https://www.linkedin.com/in/safet-duranovic/"
          target="_blank"
          rel="noopener"
          className="mx-2"
        >
          <AiFillLinkedin className="hover:scale-105 transition-all rounded-md text-gray-200 dark:text-gray-800" />
        </a>
      </div>

      <div className="social-marquee social-marquee2 hover:animate-none glassmorph rounded-full mx-5 ml-1">
        <a
          href="https://github.com/kremsnita420?tab=repositories"
          target="_blank"
          rel="noopener"
          className="mx-2"
        >
          <AiFillGithub className="hover:scale-105 transition-all rounded-md text-gray-200 dark:text-gray-800" />
        </a>
      </div>

      <div className="social-marquee hover:animate-none glassmorph rounded-full mx-5 ml-1">
        <a href="mailto:duranovic.safet@gmail.com">
          <AiOutlineMail className="hover:scale-105 transition-all mx-2 rounded-md text-gray-200 dark:text-gray-800" />
        </a>
      </div>

      <div className="social-marquee social-marquee4 hover:animate-none glassmorph rounded-full mx-5 ml-1">
        <a href="tel:0038640867888" className="mx-2">
          <AiFillPhone className="hover:scale-105 transition-all rounded-md text-gray-200 dark:text-gray-800" />
        </a>
      </div>
    </div>
  );
}
