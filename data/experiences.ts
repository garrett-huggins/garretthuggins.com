export interface ExperienceInterface {
  title: string;
  company: string;
  date: string;
  desc: string[];
}

const Experiences: ExperienceInterface[] = [
  {
    title: "Frontend Developer",
    company: "Code Youngstown",
    date: "Jul 2022 - Current",
    desc: [
      "Worked on design and development of website for local organization that supports local software engineers and developers, using modern frameworks such as Nextjs, Reactjs, and TailwindCSS.",
      "Maintained website directory of local tech companies and job listings.",
    ],
  },
  {
    title: "Vice President",
    company: "YSU Computer Club",
    date: "Apr 2022 - Current",
    desc: [
      "Guiding leadership position in running the student organization and promoting a community of growth and collaboration.",
      "Responsible for organizing HackYSU, one of the largest student led organization events at YSU.",
    ],
  },
  {
    title: "Student Web Developer",
    company: "YSU Computer Club",
    date: "Jan 2022 - Current",
    desc: [
      "Maintained the student organization websites, following best practices and web standards creating static websites using HTML, Scss, and Javascript.",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Code Youngstown",
    date: "Oct 2021 - Current",
    desc: [
      "Designed and deployed frontend client websites using modern frameworks React.js and Node.js.",
      "Developed prototype applications following client requirements as proof of concepts and minimum viable products.",
    ],
  },
  {
    title: "Math Tutor",
    company: "Youngstown State University",
    date: "Aug 2021 - May 2022",
    desc: [
      "Worked closely with students in one-on-one and group environments tutoring and offering instructional guidance regarding course material.",
    ],
  },
];

export default Experiences;