export default function Section({ children, id, title }: SectionProps) {
  return (
    <section id={id} className="mt-8">
      <h2 className="text-3xl font-semibold uppercase text-blue-highlight text-center mb-10">
        {title}
      </h2>
      {children}
    </section>
  );
}

type SectionProps = {
  children: React.ReactNode;
  id: string;
  title: string;
};
