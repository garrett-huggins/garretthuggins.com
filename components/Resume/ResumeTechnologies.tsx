export default function ResumeTechnologies() {
  return (
    <div className="md:text-right">
      <p className="sm:text-2xl text-xl md:text-right text-left  text-blue-highlight mb-2 font-bold">
        Technologies
      </p>
      <div className="md:block flex flex-wrap justify-between md:space-y-10">
        <div>
          <p className="text-purple-highlight">General</p>
          <ul>
            <li>Node.js</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>React Native</li>
            <li>GitHub</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="xs:mx-auto">
          <p className="text-purple-highlight">Styles</p>
          <ul>
            <li>TailwindCSS</li>
            <li>Sass/Scss</li>
            <li>Styled-Components</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
