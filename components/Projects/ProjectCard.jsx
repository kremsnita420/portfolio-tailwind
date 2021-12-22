import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function ProjectCard({ id, image, title }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <NextLink passHref href={`/project/${id}`} locale={locale}>
      <div className="card mb-10 glassmorph cursor-pointer hover:scale-105 transition-transform hover:bg-green-300 dark:hover:bg-red-300">
        <div className="imgbox">
          <NextImage
            className="object-cover"
            width={200}
            height={200}
            layout="responsive"
            placeholder="blur"
            blurDataURL="https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            src={image}
            alt="thumbnail"
            priority="high"
            rel="preload"
            as="image"
          />
          <p className="text-xl font-semibold font-heading1 text-gray-800 dark:text-gray-200 text-center p-2 mt-3">
            {title}
          </p>
        </div>
      </div>
    </NextLink>
  );
}
