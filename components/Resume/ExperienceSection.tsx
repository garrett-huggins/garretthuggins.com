import { ExperienceInterface } from "../../data/experiences";

export default function ExperienceSection({
  title,
  company,
  companyLink,
  date,
  desc,
}: ExperienceInterface) {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <p className="sm:text-2xl text-purple-highlight text-xl font-bold">
          {title}
        </p>
        <p className="text-right text-gray-400">{date}</p>
      </div>
      {company ? (
        <a
          className="mb-2 italic inline-block text-gray-400 hover:text-gray-300 hover:underline hover:cursor-pointer"
          href={companyLink}
          target="_blank"
          rel="noreferrer"
        >
          @ {company}
        </a>
      ) : null}
      <ol className="list-[square] list-inside marker:text-purple-highlight">
        {desc.map((point) => {
          return <li key={desc.indexOf(point)}>{point}</li>;
        })}
      </ol>
    </div>
  );
}
