import Image from "next/future/image";
import Link from "next/link";
import Header from "../Layout/Header";
import SocialLinks from "./SocialLinks";

export default function HomeHero() {
  return (
    <div className="sm:h-[600px] h-[400px] relative bg-hex-background">
      <Header />
      <div className="sm:h-[550px] h-[400px] bg-hero-gradient">
        <div className="md:block hidden absolute left-0 top-1/3 ">
          <SocialLinks />
        </div>
        <div className="flex flex-col justify-center h-full items-center pb-28">
          <div className="flex justify-center items-center">
            <div className="space-y-2 md:block hidden">
              <h1 className="lg:text-7xl text-5xl text-center tracking-wide">
                Garrett Huggins
              </h1>
              <p className="lg:text-2xl text-lg text-center">
                Fullstack and freelance developer
              </p>
            </div>
            <Image
              src="/favicon.png"
              width={200}
              height={200}
              alt="GH Logo"
              className="drop-shadow-floating animate-floating sm:w-[250px] w-[10rem]"
              priority
            />
          </div>
          <div className="flex justify-between w-full sm:max-w-xl max-w-sm px-2">
            <HomeSection path="#about" page="About" />
            <HomeSection path="#technologies" page="Technologies" />
            <HomeSection path="#recent-posts" page="Posts" />
          </div>
        </div>
      </div>
      {/* Wave SVG */}
      <div className="absolute h-20 w-full block bottom-0 right-0 left-0 overflow-hidden z-[2]">
        <WaveSVG />
      </div>
    </div>
  );
}

const HomeSection = ({ path, page }: { path: string; page: string }) => {
  return (
    <Link href={path}>
      <a className="transition ease-in-out text-blue-highlight hover:text-blue-light sm:text-4xl xs:text-2xl text-xl hover:scale-125">
        {page}
      </a>
    </Link>
  );
};

const WaveSVG = () => {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 1440 74"
      width="1440"
      height="74"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-0 left-0 w-full"
    >
      <path
        d="M0 31L21.8 26.8C43.7 22.7 87.3 14.3 131 9.7C174.7 5 218.3 4 262 5.2C305.7 6.3 349.3 9.7 393 15C436.7 20.3 480.3 27.7 524 27.2C567.7 26.7 611.3 18.3 654.8 12.8C698.3 7.3 741.7 4.7 785.2 8.2C828.7 11.7 872.3 21.3 916 24.7C959.7 28 1003.3 25 1047 20.7C1090.7 16.3 1134.3 10.7 1178 8.5C1221.7 6.3 1265.3 7.7 1309 7C1352.7 6.3 1396.3 3.7 1418.2 2.3L1440 1L1440 75L1418.2 75C1396.3 75 1352.7 75 1309 75C1265.3 75 1221.7 75 1178 75C1134.3 75 1090.7 75 1047 75C1003.3 75 959.7 75 916 75C872.3 75 828.7 75 785.2 75C741.7 75 698.3 75 654.8 75C611.3 75 567.7 75 524 75C480.3 75 436.7 75 393 75C349.3 75 305.7 75 262 75C218.3 75 174.7 75 131 75C87.3 75 43.7 75 21.8 75L0 75Z"
        fill="#3f413f"
      ></path>
      <path
        d="M0 42L21.8 42.2C43.7 42.3 87.3 42.7 131 41.5C174.7 40.3 218.3 37.7 262 38.2C305.7 38.7 349.3 42.3 393 41C436.7 39.7 480.3 33.3 524 29C567.7 24.7 611.3 22.3 654.8 21.8C698.3 21.3 741.7 22.7 785.2 24C828.7 25.3 872.3 26.7 916 24.7C959.7 22.7 1003.3 17.3 1047 20.5C1090.7 23.7 1134.3 35.3 1178 35.5C1221.7 35.7 1265.3 24.3 1309 21.2C1352.7 18 1396.3 23 1418.2 25.5L1440 28L1440 75L1418.2 75C1396.3 75 1352.7 75 1309 75C1265.3 75 1221.7 75 1178 75C1134.3 75 1090.7 75 1047 75C1003.3 75 959.7 75 916 75C872.3 75 828.7 75 785.2 75C741.7 75 698.3 75 654.8 75C611.3 75 567.7 75 524 75C480.3 75 436.7 75 393 75C349.3 75 305.7 75 262 75C218.3 75 174.7 75 131 75C87.3 75 43.7 75 21.8 75L0 75Z"
        fill="#353735"
      ></path>
      <path
        d="M0 33L21.8 34C43.7 35 87.3 37 131 36C174.7 35 218.3 31 262 31.2C305.7 31.3 349.3 35.7 393 39C436.7 42.3 480.3 44.7 524 44C567.7 43.3 611.3 39.7 654.8 37.7C698.3 35.7 741.7 35.3 785.2 35.3C828.7 35.3 872.3 35.7 916 34.5C959.7 33.3 1003.3 30.7 1047 30.3C1090.7 30 1134.3 32 1178 32.5C1221.7 33 1265.3 32 1309 33.7C1352.7 35.3 1396.3 39.7 1418.2 41.8L1440 44L1440 75L1418.2 75C1396.3 75 1352.7 75 1309 75C1265.3 75 1221.7 75 1178 75C1134.3 75 1090.7 75 1047 75C1003.3 75 959.7 75 916 75C872.3 75 828.7 75 785.2 75C741.7 75 698.3 75 654.8 75C611.3 75 567.7 75 524 75C480.3 75 436.7 75 393 75C349.3 75 305.7 75 262 75C218.3 75 174.7 75 131 75C87.3 75 43.7 75 21.8 75L0 75Z"
        fill="#2b2d2b"
      ></path>
      <path
        d="M0 54L21.8 52.5C43.7 51 87.3 48 131 48.3C174.7 48.7 218.3 52.3 262 51.2C305.7 50 349.3 44 393 43.7C436.7 43.3 480.3 48.7 524 50.7C567.7 52.7 611.3 51.3 654.8 49.8C698.3 48.3 741.7 46.7 785.2 48C828.7 49.3 872.3 53.7 916 56C959.7 58.3 1003.3 58.7 1047 55.2C1090.7 51.7 1134.3 44.3 1178 42.3C1221.7 40.3 1265.3 43.7 1309 47C1352.7 50.3 1396.3 53.7 1418.2 55.3L1440 57L1440 75L1418.2 75C1396.3 75 1352.7 75 1309 75C1265.3 75 1221.7 75 1178 75C1134.3 75 1090.7 75 1047 75C1003.3 75 959.7 75 916 75C872.3 75 828.7 75 785.2 75C741.7 75 698.3 75 654.8 75C611.3 75 567.7 75 524 75C480.3 75 436.7 75 393 75C349.3 75 305.7 75 262 75C218.3 75 174.7 75 131 75C87.3 75 43.7 75 21.8 75L0 75Z"
        fill="#222322"
      ></path>
      <path
        d="M0 56L21.8 58C43.7 60 87.3 64 131 63.5C174.7 63 218.3 58 262 55.3C305.7 52.7 349.3 52.3 393 53.8C436.7 55.3 480.3 58.7 524 60.3C567.7 62 611.3 62 654.8 63.5C698.3 65 741.7 68 785.2 68C828.7 68 872.3 65 916 63.2C959.7 61.3 1003.3 60.7 1047 61.8C1090.7 63 1134.3 66 1178 65.2C1221.7 64.3 1265.3 59.7 1309 58.7C1352.7 57.7 1396.3 60.3 1418.2 61.7L1440 63L1440 75L1418.2 75C1396.3 75 1352.7 75 1309 75C1265.3 75 1221.7 75 1178 75C1134.3 75 1090.7 75 1047 75C1003.3 75 959.7 75 916 75C872.3 75 828.7 75 785.2 75C741.7 75 698.3 75 654.8 75C611.3 75 567.7 75 524 75C480.3 75 436.7 75 393 75C349.3 75 305.7 75 262 75C218.3 75 174.7 75 131 75C87.3 75 43.7 75 21.8 75L0 75Z"
        fill="#191a19"
      ></path>
    </svg>
  );
};
