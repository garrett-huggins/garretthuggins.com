/* eslint-disable  @typescript-eslint/no-explicit-any */

const LineSpace = () => {
  return <div className="w-full h-6"></div>;
};
const Tab = ({ children }: { children: React.ReactNode }) => {
  return <div className="ml-6">{children}</div>;
};

export const blogDefaults = {
  h1: (props: any) => (
    <h1 className="text-4xl text-orange-500 uppercase my-2 py-1">
      {props.children}
    </h1>
  ),
  h2: (props: any) => (
    <h1 className="text-[32px] text-blue-highlight uppercase my-2">
      {props.children}
    </h1>
  ),
  h3: (props: any) => (
    <h1 className="text-3xl text-purple-highlight uppercase my-2 py-1">
      {props.children}
    </h1>
  ),
  h4: (props: any) => (
    <h1 className="text-2xl text-green-500 uppercase my-2 py-1">
      {props.children}
    </h1>
  ),
  h5: (props: any) => (
    <h1 className="text-xl text-teal-400 uppercase my-2 py-1">
      {props.children}
    </h1>
  ),
  h6: (props: any) => (
    <h1 className="text-xl text-blue-light uppercase my-2 py-1">
      {props.children}
    </h1>
  ),
  a: (props: any) => (
    <a
      className="text-red-400 hover:underline"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  ),
  hr: () => <hr className="my-5" />,
  ol: (props: any) => (
    <ol className="list-decimal list-inside py-2">{props.children}</ol>
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside py-2">{props.children}</ul>
  ),
  p: (props: any) => <p>{props.children}</p>,
  pre: (props: any) => (
    <pre className="bg-site-light p-4 my-5 overflow-x-auto rounded-lg">
      {props.children}
    </pre>
  ),
  code: (props: any) => (
    <code className="bg-site-light p-1">{props.children}</code>
  ),
  blockquote: (props: any) => (
    <blockquote className="bg-site-secondary border-l-gray-500 border-l-8 pl-5 my-5 py-1">
      {props.children}
    </blockquote>
  ),
  LineSpace,
  Tab,
};
