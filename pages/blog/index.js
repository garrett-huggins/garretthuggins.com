import Layout from "../../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../../components/Post/Post";
import { Posts, Blog } from "../../components/BlogStyles";

export default function Home({ posts }) {
  return (
    <Layout title="Garrett Huggins | Blog">
      <Blog>Blog</Blog>
      <Posts>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Posts>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
