import { ExperienceInterface } from "../../data/experiences";

export default function ExperienceSection({
  title,
  company,
  date,
  desc,
}: ExperienceInterface) {
  return (
    <div className="mt-6">
      <div className="flex w-full justify-between items-center">
        <p className="sm:text-2xl text-purple-highlight text-xl font-bold">
          {title}
        </p>
        <p className="text-right text-gray-400">{date}</p>
      </div>
      <p className="mb-2 italic">{company}</p>
      <ol className="list-[square] list-inside marker:text-purple-highlight">
        {desc.map((point) => {
          return <li key={desc.indexOf(point)}>{point}</li>;
        })}
      </ol>
    </div>
  );
}
