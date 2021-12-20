import SocialIcons from "../layout/SocialIcons";

export default function Footer() {
  return (
    <footer
      className="
            w-full flex flex-col items-center justify-center
            bg-gray-800 dark:bg-gray-300 text-gray-200 dark:text-gray-800 
            rounded-none"
    >
      <div className="pb-2 w-full lg:w-1/2 flex flex-col items-center justify-around ">
        <SocialIcons />
        <span className="mt-2 circle-sketch-highlight">
          Email: duranovic.safet@gmail.com
        </span>
        <span className="mt-2 circle-sketch-highlight">
          Telephone: +386 40867888
        </span>
      </div>

      <div
        className="
            w-full flex flex-col items-center justify-center p-2
            bg-gray-900 text-gray-600
            "
      >
        <span>
          Copyright <strong>&copy;</strong>
          {new Date().getFullYear()}{" "}
          <a
            target="-blank"
            rel="noopener"
            className="underline text-purple-900"
            href="https://www.linkedin.com/in/safet-duranovic/"
          >
            Safet Duranovic
          </a>
        </span>
      </div>
    </footer>
  );
}
