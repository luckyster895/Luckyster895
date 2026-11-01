import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { About, Certs, Connect, Experience, Footer, ResumeCta, Skills } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certs />
        <ResumeCta />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
