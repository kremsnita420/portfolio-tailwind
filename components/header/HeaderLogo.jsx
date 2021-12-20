import NextLink from "next/link";

export default function HeaderLogo() {
  return (
    <NextLink href="/">
      <a
        className="
						text-3xl md:text-4xl my-auto py-1 font-heading1 font-black text-transparent bg-clip-text hover:scale-110 hover:rotate-[-3deg] transition-all
						bg-gradient-to-br dark:from-pink-400 dark:to-red-600 from-blue-600 to-pink-900 circle-sketch-highlight"
      >
        {`<Safet Dev/>`}
      </a>
    </NextLink>
  );
}
