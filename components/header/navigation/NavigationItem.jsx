import NextLink from "next/link";

export default function NavigationItem({ href, text }) {
  return (
    <NextLink href={href}>
      <a className="hidden md:inline-block hover:sketch-highlight  p-3 rounded-lg hover:scale-125 hover:rotate-3 transition-all">
        <span className=" sketch-highlight px-3 py-2">{text}</span>
      </a>
    </NextLink>
  );
}
