import Head from "next/head";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ScrollToButton from "./ScrollTopButton";

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - My Portfolio` : "My Portfolio"}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta charSet="utf-8" />
        <meta
          property="og:image"
          content="/images/portrait.png"
          key="ogimage"
        />
      </Head>
      <Header />
      <main
        className="container font-body
						   flex flex-col items-center px-5
				 		   justify-center mx-auto relative min-h-[calc(100vh-76px)]"
      >
        {children}
        <ScrollToButton />
      </main>
      <Footer />

      {/* hightlight svg */}
      <svg
        xmlns="//www.w3.org/2000/svg"
        version="1.1"
        className="svg-filters absolute h-0"
      >
        <defs>
          <filter id="marker-shape">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0 0.15"
              numOctaves="1"
              result="warp"
            />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="30"
              in="SourceGraphic"
              in2="warp"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
