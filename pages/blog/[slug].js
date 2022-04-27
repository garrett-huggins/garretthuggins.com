import Layout from "../../components/Layout";
import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { marked } from "marked";
import markdownStyles from "./markdown-styles.module.css";
import { CardPage, PostTitle, PostDate } from "../../components/BlogStyles";
import { useColorModeValue, Button } from "@chakra-ui/react";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  content,
}) {
  return (
    <Layout title={`${title} | Garrett Huggins`}>
      <Link href="/blog" passHref>
        <Button p={6} fontSize="2rem" mt={2} mb={2}>
          Go Back
        </Button>
      </Link>

      <CardPage bg={useColorModeValue("", "#283e52")}>
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
        <div className={markdownStyles.markdown}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </CardPage>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
