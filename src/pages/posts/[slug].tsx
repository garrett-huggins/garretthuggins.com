import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "../../../components/Layout";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../../utils/mdxUtils";
import { blogDefaults } from "../../../components/Blog/blogDefaults";

/* eslint-disable  @typescript-eslint/no-explicit-any */

export default function PostPage({ source, frontMatter }: PostTypes) {
  return (
    <Layout pageTitle={frontMatter.title}>
      <div className="mx-auto max-w-3xl text-[18px] sm:text-xl px-5 mb-20">
        <h1 className="sm:text-4xl text-3xl text-center mb-6">
          {frontMatter.title}
        </h1>
        <MDXRemote {...source} components={blogDefaults} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }: SlugTypes) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

type SlugTypes = {
  params: { slug: string };
};

type PostTypes = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    abstract: string;
    postedDate: string;
    note?: string;
  };
};
