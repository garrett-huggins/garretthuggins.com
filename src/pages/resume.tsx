import Layout, { PageContainer } from "../../components/Layout";
import Education from "../../components/Resume/Education";
import Experiences from "../../data/experiences";
import ExperienceSection from "../../components/Resume/ExperienceSection";
import PrintResume from "../../components/Resume/PrintResume";
import Skills from "../../components/Resume/Skills";
import ResumeHeader from "../../components/Resume/ResumeHeader";

export default function Resume() {
  return (
    <Layout pageTitle="Garrett's Resume">
      <PageContainer>
        <h1 className="text-4xl font-semibold tracking-wide uppercase text-blue-highlight text-center mb-10">
          Resume
        </h1>
        <ResumeHeader />

        {/* Resume Content */}

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 sm:text-lg text-base">
          {/* Side Bar */}
          <div className="col-span-1 grid md:grid-cols-1 grid-cols-1">
            <Skills />
          </div>

          {/* Main Content */}

          <div className="md:col-span-2 col-span-1">
            {/* Education */}
            <Education />

            {/* EXPERIENCES */}

            <div className="mt-10">
              <p className="text-blue-highlight text-3xl font-bold tracking-wider uppercase">
                Experience
              </p>
              {Experiences.map((experience) => {
                return (
                  <div key={experience.title + experience.company}>
                    <ExperienceSection
                      companyLink={experience.companyLink}
                      title={experience.title}
                      company={experience.company}
                      date={experience.date}
                      desc={experience.desc}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-10">
          <PrintResume />
        </div>
      </PageContainer>
    </Layout>
  );
}
