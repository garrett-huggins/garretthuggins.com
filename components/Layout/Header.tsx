import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const ToggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <header className="bg-site-primary py-2 sticky top-0 z-[1]">
      {/* Desktop Navbar */}
      <nav className="sm:flex hidden justify-between items-center max-w-6xl mx-auto px-4">
        <TitleLink />
        <div className="flex space-x-5">
          <LinkItem path="/" page="Home" />
          <LinkItem path="/resume" page="Resume" />
          <LinkItem path="/blog" page="Blog" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav className="sm:hidden flex flex-wrap justify-between items-center px-3">
        <TitleLink />
        <button
          onClick={ToggleMenu}
          className="sm:hidden flex justify-center text-2xl"
        >
          <FaBars />
        </button>
        <AnimatePresence>
          {menuVisible && <MobileMenu ToggleMenu={ToggleMenu} />}
        </AnimatePresence>
      </nav>
    </header>
  );
}

const TitleLink = () => {
  return (
    <Link href="/">
      <a className="sm:text-4xl text-3xl text-left">Garrett Huggins</a>
    </Link>
  );
};

const LinkItem = ({ path, page }: { path: string; page: string }) => {
  return (
    <Link href={path}>
      <a className="text-2xl hover:text-gray-400">{page}</a>
    </Link>
  );
};

const MobileLinkItem = ({ path, page }: { path: string; page: string }) => {
  return (
    <motion.li variants={MotionItem} className="p-2">
      <Link href={path}>
        <a className="text-4xl font-semibold hover:underline hover:text-gray-400 hover:cursor-pointer">
          {page}
        </a>
      </Link>
    </motion.li>
  );
};

const MobileMenu = ({ ToggleMenu }: MobileMenuTypes) => {
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
      }}
      className="w-full backdrop-blur-xl bg-modal-background h-full fixed top-0 left-0 pt-16 z-10"
    >
      <button
        onClick={ToggleMenu}
        className="absolute top-0 right-0 p-3 flex justify-center text-3xl"
      >
        <AiOutlineClose />
      </button>
      <motion.ul
        variants={MotionContainer}
        initial="hidden"
        animate="show"
        className="ml-4 space-y-3"
      >
        <MobileLinkItem path="/" page="Home" />
        <MobileLinkItem path="/resume" page="Resume" />
        <MobileLinkItem path="/blog" page="Blog" />
      </motion.ul>
    </motion.div>,
    document.getElementById("modal-portal") as HTMLElement
  );
};

type MobileMenuTypes = {
  ToggleMenu: () => void;
};

const MotionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const MotionItem = {
  hidden: { opacity: 0, translateX: -200 },
  show: { opacity: 1, translateX: 0 },
};
