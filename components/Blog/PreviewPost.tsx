import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";

type PostData = {
  filePath: string;
  title: string;
  abstract: string;
  note?: string;
};

export default function PreviewPost({
  filePath,
  title,
  abstract,
  note,
}: PostData) {
  return (
    <Link
      as={`/posts/${filePath.replace(/\.mdx?$/, "")}`}
      href={`/posts/[slug]`}
    >
      <article className="bg-[#1a1d30] group hover:cursor-pointer rounded-md p-5 border-2 border-gray-600 w-full">
        <p className="text-blue-highlight group-hover:underline text-2xl">
          {title}
        </p>
        {note ? <p className="text-base text-gray-300">{note}</p> : null}
        <p className="text-lg my-3">{abstract}</p>

        <a className="group-hover:text-red-400 text-red-600 flex text-sm items-center">
          <p className="mr-2 text-lg">Read More</p> <BsBoxArrowUpRight />
        </a>
      </article>
    </Link>
  );
}
