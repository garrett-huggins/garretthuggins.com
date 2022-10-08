import Layout, { PageContainer } from "../../components/Layout";
import { FaGithub, FaLinkedin, FaEnvelope, FaRss } from "react-icons/fa";

export default function Resume() {
  return (
    <Layout pageTitle="Garrett Huggins' Resume">
      <PageContainer>
        <h1 className="text-4xl font-semibold tracking-wide uppercase text-blue-highlight text-center mb-10">
          Resume
        </h1>
        <div className="mb-10 flex justify-between flex-wrap items-end">
          <p className="sm:text-5xl text-4xl">Garrett Huggins</p>
          <p className="sm:text-3xl text-2xl ml-4 text-gray-400">
            Frontend Developer
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 sm:text-lg text-base">
          <div className="col-span-1 grid md:grid-cols-1 xs:grid-cols-2 grid-cols-1 gap-3">
            <div className="sm:block hidden">
              <p className="sm:text-2xl text-xl mb-2 font-bold md:text-right">
                Contact
              </p>
              <p className="flex items-center md:justify-end">
                garretthugs@gmail.com
                <FaEnvelope />
              </p>
              <p className="flex items-center md:justify-end">
                /in/garretthuggins
                <FaLinkedin />
              </p>
              <p className="flex items-center md:justify-end">
                garrett-huggins
                <FaGithub />
              </p>
              <p className="flex items-center md:justify-end">
                garretthuggins.com
                <FaRss />
              </p>
            </div>
            <div className="md:text-right sm:block hidden">
              <p className="text-2xl mb-2 font-bold">Skills</p>
              <p>Avid Learner</p>
              <p>Dynamic Design Patterns</p>
              <p>Software Documentation</p>
              <p>Development Standards</p>
              <p>Continuous Integration Systems</p>
            </div>
            <div className="md:text-right">
              <p className="text-2xl mb-2 font-bold">Technologies</p>
              <p>React.js</p>
              <p>Next.js</p>
              <p>Node.js</p>
              <p>Git/GitHub</p>
              <p>MongoDB</p>
            </div>
            <div className="md:text-right">
              <p className="text-2xl mb-2 font-bold">Languages</p>
              <p>Javascript</p>
              <p>Typescript</p>
              <p>HTML/CSS</p>
              <p>Python</p>
              <p>C++</p>
            </div>
          </div>
          <div className="sm:col-span-2 col-span-1">
            <div>
              <p className="text-blue-highlight text-3xl font-bold tracking-wider uppercase mb-4">
                Education
              </p>
              <div className="flex w-full justify-between items-center">
                <p className="sm:text-2xl text-xl mb-2 font-bold">
                  Bachelor of Science in Information Technology
                </p>
                <p className="text-right">May 2024</p>
              </div>
              <p>Minor: Mathematics</p>
              <p>Concentration: Application Development</p>
            </div>

            {/* EXPERIENCES */}

            <div className="mt-10">
              <p className="text-blue-highlight text-3xl font-bold tracking-wider uppercase">
                Experience
              </p>
              <div className="mt-5">
                <div className="flex w-full justify-between items-center">
                  <p className="sm:text-2xl text-xl font-bold">
                    Frontend Developer
                  </p>
                  <p className="text-right">Jul 2022 - Current</p>
                </div>
                <p className="mb-2 italic">Code Youngstown</p>
                <ol className="list-disc list-inside">
                  <li>
                    Worked on design and development of website for local
                    organization that supports local software engineers and
                    developers, using modern frameworks such as Nextjs, Reactjs,
                    and TailwindCSS.
                  </li>
                  <li>
                    Maintained website directory of local tech companies and job
                    listings.
                  </li>
                </ol>
              </div>
              <div className="mt-8">
                <div className="flex w-full justify-between items-center">
                  <p className="sm:text-2xl text-xl font-bold">
                    Vice President
                  </p>
                  <p className="text-right">Apr 2022 - Current</p>
                </div>
                <p className="mb-2 italic">YSU Computer Club</p>
                <ol className="list-disc list-inside">
                  <li>
                    Guiding leadership position in running the student
                    organization and promoting a community of growth and
                    collaboration.
                  </li>
                  <li>
                    Responsible for organizing HackYSU, one of the largest
                    student led organization events at YSU.
                  </li>
                </ol>
              </div>
              <div className="mt-8">
                <div className="flex w-full justify-between items-center">
                  <p className="sm:text-2xl text-xl font-bold">
                    Student Web Developer
                  </p>
                  <p className="text-right">Jan 2022 - Current</p>
                </div>
                <p className="mb-2 italic">YSU Computer Club</p>
                <ol className="list-disc list-inside">
                  <li>
                    Maintained the student organization websites, following best
                    practices and web standards creating static websites using
                    HTML, Scss, and Javascript.
                  </li>
                </ol>
              </div>
              <div className="mt-8">
                <div className="flex w-full justify-between items-center">
                  <p className="sm:text-2xl text-xl font-bold">
                    Freelance Developer
                  </p>
                  <p className="text-right">Oct 2021 - Current</p>
                </div>
                <ol className="list-disc list-inside">
                  <li>
                    Designed and deployed frontend client websites using modern
                    frameworks React.js and Node.js.
                  </li>
                  <li>
                    Developed prototype applications following client
                    requirements as proof of concepts and minimum viable
                    products.
                  </li>
                </ol>
              </div>
              <div className="mt-8">
                <div className="flex w-full justify-between items-center">
                  <p className="sm:text-2xl text-xl font-bold">Math Tutor</p>
                  <p className="text-right">Aug 2021 - May 2022</p>
                </div>
                <p className="mb-2 italic">Youngstown State University</p>
                <ol className="list-disc list-inside">
                  <li>
                    Worked closely with students in one-on-one and group
                    environments tutoring and offering instructional guidance
                    regarding course material.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-10">
          <a
            className="bg-gray-800 hover:bg-slate-700 px-8 py-4 rounded-md"
            href="/files/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </PageContainer>
    </Layout>
  );
}
