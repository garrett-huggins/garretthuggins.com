import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import Layout, { PageContainer } from "../../components/Layout";
import HomeHero from "../../components/Home/HomeHero";
import AboutSection from "../../components/Home/AboutSection";
import Technologies from "../../components/Home/Technologies";
import RecentPosts from "../../components/Home/RecentPosts";
import PostInterface from "../../components/Blog/PostInterface";

export default function Home({ posts }: { posts: PostInterface[] }) {
  return (
    <Layout pageTitle="Garrett Huggins" home>
      {/* HERO */}
      <HomeHero />

      {/* PAGE */}

      <PageContainer>
        <AboutSection />
        <Technologies />
        <RecentPosts posts={posts} />
      </PageContainer>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
