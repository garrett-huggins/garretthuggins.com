import Contact from "./Contact";
import ResumeTechnologies from "./ResumeTechnologies";
import Languages from "./Languages";

export default function Skills() {
  return (
    <div className="space-y-10">
      <div className="md:block flex flex-wrap justify-between md:space-y-10">
        <Contact />
        <Languages />
      </div>
      <ResumeTechnologies />
    </div>
  );
}
