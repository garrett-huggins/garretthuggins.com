export default function Education() {
  return (
    <div>
      <p className="text-blue-highlight text-3xl font-bold tracking-wider uppercase mb-4">
        Education
      </p>
      <div className="mb-2">
        <div className="flex w-full justify-between items-center">
          <p className="sm:text-2xl text-purple-highlight text-xl text-left font-bold">
            Bachelor of Science in Information Technology
          </p>
          <p className="text-right text-gray-400">May 2024</p>
        </div>
        <a
          href="https://ysu.edu"
          target="_blank"
          rel="noreferrer"
          className="italic text-red-600 hover:text-red-400 hover:underline"
        >
          @ Youngstown State University
        </a>
      </div>
      <p>Minor: Mathematics</p>
      <p>Concentration: Application Development</p>
    </div>
  );
}
