import { FaGithub, FaLinkedin, FaRss } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="md:text-right">
      <p className="sm:text-2xl text-blue-highlight text-xl mb-2 font-bold">
        Contact
      </p>
      <ul>
        <li className="flex items-center md:justify-end">
          /in/garretthuggins
          <FaLinkedin />
        </li>
        <li className="flex items-center md:justify-end">
          garrett-huggins
          <FaGithub />
        </li>
        <li className="flex items-center md:justify-end">
          garretthuggins.com
          <FaRss />
        </li>
      </ul>
    </div>
  );
}
