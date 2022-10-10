import { BiCopyright, BiGitBranch } from "react-icons/bi";
import Image from "next/future/image";

export default function Footer() {
  return (
    <footer className="p-1 bg-footer-gradient absolute bottom-0 w-full">
      <div className="max-w-5xl flex justify-between mx-auto px-3">
        <div>
          <p className="text-purple-highlight text-lg">Links</p>
          <div className="grid grid-cols-2 text-base gap-x-2">
            <FooterLink
              href="https://github.com/garrett-huggins"
              social="GitHub"
            />
            <FooterLink
              href="https://twitter.com/garrett_h2o"
              social="Twitter"
            />
            <FooterLink
              href="mailto:garrett@garretthuggins.com"
              social="Contact"
            />
            <FooterLink
              href="https://www.linkedin.com/in/garretthuggins/"
              social="LinkedIn"
            />
            <div className="col-span-2 flex items-center hover:text-gray-500">
              <FooterLink
                href="https://github.com/garrett-huggins/garretthuggins.com"
                social="This Site"
              />
              <BiGitBranch />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/favicon.png"
            alt="GH Logo"
            width={150}
            height={150}
            className="mx-auto w-[100px]"
          />
        </div>
      </div>
      <div className="text-sm w-full flex items-center justify-center">
        <BiCopyright />
        <p>Garrett Huggins {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, social }: { href: string; social: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:text-gray-400"
    >
      {social}
    </a>
  );
};
