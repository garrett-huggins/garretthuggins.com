import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

const pageDescription =
  "Frontend engineer and freelance developer with a passion for bringing ideas to life.";

export default function Layout({ pageTitle, children, home }: LayoutTypes) {
  const router = useRouter();

  return (
    <div className="bg-site-primary text-white text-base sm:text-2xl">
      <Head>
        {/* <!-- Primary Tags --> */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="image" content="/favicon.png" />
        <link rel="icon" href="/favicon.png" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image:src" content="/favicon.png" />

        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content={pageTitle} />
        <meta name="og:description" content={pageDescription} />
        <meta name="og:image" content="/favicon.png" />
        <meta
          name="og:url"
          content={"https://garretthuggins.com" + router.asPath}
        />
        <meta name="og:site_name" content="Garrett Huggins" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen relative">
        <div id="modal-portal"></div>
        {/* Seperate Home Header */}
        {!home && <Header />}

        {/* Page */}
        <main className="w-full pb-[204px]">{children}</main>

        <Footer />
      </div>
    </div>
  );
}

type LayoutTypes = {
  pageTitle: string;
  children: React.ReactNode;
  home?: boolean;
};

// Page Container
export function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl mx-auto px-4 mb-20">{children}</div>;
}
