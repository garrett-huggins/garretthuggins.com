import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialLinks() {
  return (
    <div className="flex flex-col">
      <SocialLink
        href="https://github.com/garrett-huggins"
        title="GitHub"
        bgColor="bg-slate-700"
      >
        <FaGithubSquare />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/garretthuggins/"
        title="LinkedIn"
        bgColor="bg-blue-600"
      >
        <FaLinkedin />
      </SocialLink>
      <SocialLink
        href="https://twitter.com/garrett_h2o"
        title="Twitter"
        bgColor="bg-blue-500"
      >
        <FaTwitterSquare />
      </SocialLink>
      <SocialLink
        href="mailto:garretthugs@gmail.com"
        title="Email"
        bgColor="bg-gray-600"
      >
        <FaEnvelope />
      </SocialLink>
    </div>
  );
}

const SocialLink = ({ href, title, children, bgColor }: SocialLinkTypes) => {
  return (
    <motion.a
      layout
      initial={{ width: 64, justifyContent: "flex-end" }}
      whileHover={{ width: 90, justifyContent: "flex-end" }}
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
      className={`flex ${bgColor} p-2 text-5xl`}
    >
      {children}
    </motion.a>
  );
};

type SocialLinkTypes = {
  href: string;
  title: string;
  children: React.ReactNode;
  bgColor: string;
};
