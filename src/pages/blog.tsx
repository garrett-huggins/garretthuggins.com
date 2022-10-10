import fs from "fs";
import matter from "gray-matter";
import PreviewPost from "../../components/Blog/PreviewPost";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import Layout, { PageContainer } from "../../components/Layout";
import PostInterface from "../../components/Blog/PostInterface";

/* eslint-disable  @typescript-eslint/no-explicit-any */

export default function Blog({ posts }: { posts: PostInterface[] }) {
  const orderedPosts = posts.sort((a, b) => {
    return a.data.postedDate > b.data.postedDate ? -1 : 1;
  });
  return (
    <Layout pageTitle="Garrett's Blog">
      <PageContainer>
        <h1 className="text-4xl font-semibold tracking-wider uppercase text-blue-highlight text-center mb-10">
          Blog
        </h1>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {orderedPosts.map((post: PostInterface) => (
            <div className="flex" key={post.filePath}>
              <PreviewPost
                filePath={post.filePath}
                title={post.data.title}
                abstract={post.data.abstract}
                note={post.data.note}
              />
            </div>
          ))}
        </div>
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
