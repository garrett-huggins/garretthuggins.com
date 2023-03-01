export interface ExperienceInterface {
  title: string;
  company?: string;
  companyLink?: string;
  date: string;
  desc: string[];
}

const Experiences: ExperienceInterface[] = [
  {
    title: "Student Software Developer",
    company: "Dev Youngstown",
    companyLink: "https://www.youngstown.dev/",
    date: "Nov 2022 - Current",
    desc: [
      "Contract based work for local organizations and businesses under the supervision of a lead developer.",
      "Migrated client websites to modern technologies, such as React.js and Next.js.",
      "Developed backend API and database using FastAPI and PostgreSQL.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Code Youngstown",
    companyLink: "https://codeyoungstown.com/",
    date: "Jul 2022 - Current",
    desc: [
      "Worked on design and development of website for local organization that supports local software engineers and developers, using modern frameworks such as Next.js, React.js, and TailwindCSS.",
      "Maintained website directory of local tech companies and job listings.",
    ],
  },
  {
    title: "Vice President",
    company: "YSU Computer Club",
    companyLink: "https://ysucomputerclub.com/",
    date: "Apr 2022 - Current",
    desc: [
      "Guiding leadership position in running the student organization and promoting a community of growth and collaboration.",
      "Responsible for organizing HackYSU, one of the largest student led organization events at YSU.",
    ],
  },
  {
    title: "Student Web Developer",
    company: "YSU Computer Club",
    companyLink: "https://ysucomputerclub.com/",
    date: "Jan 2022 - Current",
    desc: [
      "Maintained the student organization websites, following best practices and web standards creating static websites using HTML, Scss, and Javascript.",
    ],
  },
  {
    title: "Freelance Developer",
    date: "Oct 2021 - Aug 2022",
    desc: [
      "Designed and deployed frontend client websites using modern frameworks React.js and Next.js.",
      "Developed prototype applications following client requirements as proof of concepts and minimum viable products using Node.js, MongoDB, and other various frameworks depending on the project.",
    ],
  },
  {
    title: "Math Tutor",
    company: "Youngstown State University",
    companyLink: "https://ysu.edu/",
    date: "Aug 2021 - May 2022",
    desc: [
      "Worked closely with students in one-on-one and group environments tutoring and offering instructional guidance regarding course material.",
    ],
  },
];

export default Experiences;
