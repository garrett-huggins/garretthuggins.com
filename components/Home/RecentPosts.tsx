import Section from "./Section";
import PreviewPost from "../Blog/PreviewPost";
import PostInterface from "../../components/Blog/PostInterface";
import Link from "next/link";

export default function RecentPosts({ posts }: { posts: PostInterface[] }) {
  const orderedPosts = posts.sort((a, b) => {
    return a.data.postedDate > b.data.postedDate ? -1 : 1;
  });

  const recentPosts = orderedPosts.slice(0, 4);

  return (
    <Section id="recent-posts" title="Recent Posts">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {recentPosts.map((post) => {
          return (
            <div className="flex" key={post.data.title}>
              <PreviewPost
                filePath={post.filePath}
                title={post.data.title}
                note={post.data.note}
                abstract={post.data.abstract}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <p className="text-center">
          If you think these are interesting, I have more!
        </p>
        <p className="flex items-center justify-center">
          Check out my other posts
          <Link href="/blog">
            <a className="hover:underline ml-1 text-red-600 hover:text-red-400">
              here
            </a>
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
