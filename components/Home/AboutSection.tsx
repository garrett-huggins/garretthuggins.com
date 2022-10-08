import Section from "./Section";
import Image from "next/future/image";

export default function AboutSection() {
  return (
    <Section id="about" title="About">
      <div>
        <div className="flex items-center justify-center mb-3 space-x-3">
          <div>
            <p className="text-center">Hello! I like to build things.</p>
            <p>( Designer / Developer / Web Artisan )</p>
          </div>
          <div className="border-2 rounded-full p-2 bg-portrait-gradient">
            <Image
              src="/images/silhouette_transparent.png"
              width={100}
              height={100}
              alt="Face Silhouette"
            />
          </div>
        </div>
        <hr className="mb-4" />
        Currently pursuing a{" "}
        <strong>Bachelor of Science in Information Technology</strong>
        <ul className="ml-1 list-disc list-inside text-purple-highlight">
          <li>
            <span className="text-white">
              Concentration: Application Development
            </span>
          </li>
          <li>
            <span className="text-white">Minor: Mathematics</span>
          </li>
        </ul>
        <span className="text-purple-highlight mr-3">@</span>{" "}
        <a
          className="hover:text-purple-light text-purple-highlight underline"
          target="_blank"
          rel="noreferrer"
          href="https://ysu.edu/"
        >
          Youngstown State University
        </a>
      </div>
    </Section>
  );
}
