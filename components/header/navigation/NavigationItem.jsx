import NextLink from "next/link";

export default function NavigationItem({ href, text }) {
  return (
    <NextLink href={href}>
      <a className="hidden md:inline-block hover:sketch-highlight  p-3 rounded-lg hover:scale-125 hover:rotate-3 transition-all">
        <span className="capsize sketch-highlight px-2 py-1">{text}</span>
      </a>
    </NextLink>
  );
}
