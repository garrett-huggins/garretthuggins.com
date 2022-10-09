export default function ResumeTechnologies() {
  return (
    <div className="md:text-right">
      <p className="sm:text-2xl text-xl md:text-right text-center  text-blue-highlight mb-2 font-bold">
        Technologies
      </p>
      <div className="md:block grid grid-cols-3">
        <div>
          <p className="text-purple-highlight">Frontend</p>
          <ul>
            <li>React.js</li>
            <li>React Native</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div>
          <p className="text-purple-highlight">General</p>
          <ol>
            <li>Node.js</li>
            <li>Git</li>
            <li>GitHub</li>
          </ol>
        </div>
        <div>
          <p className="text-purple-highlight">Styles</p>
          <ul>
            <li>TailwindCSS</li>
            <li>Sass/Scss</li>
            <li>Styled Components</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
