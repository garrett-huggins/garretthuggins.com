import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <Layout title="Garrett Huggins">
      <Hero />
      <Projects />
      <About />
    </Layout>
  );
}
