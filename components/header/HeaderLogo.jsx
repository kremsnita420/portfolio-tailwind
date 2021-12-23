import NextLink from "next/link";

export default function HeaderLogo() {
  return (
    <NextLink href="/">
      <a
        className="
						text-2xl md:text-3xl my-auto py-1 font-heading1 font-black text-transparent 
            bg-clip-text hover:scale-110 hover:rotate-[-2deg] transition-all
						bg-gradient-to-br dark:from-green-400 dark:to-blue-600 from-pink-700 to-blue-500 
            circle-sketch-highlight"
      >
        {`<Safet Dev/>`}
      </a>
    </NextLink>
  );
}
