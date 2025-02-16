import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoBackground from "@/components/VideoBackground";
import TechnicalSkills from "@/components/TechnicalSkills";
import ProjectsSection from "@/components/ProjectsSection";

const Home = () => {
  return (
    <>
      <section>
        <VideoBackground />
        <Navbar />

        <Hero />
      </section>
      <section>
        <TechnicalSkills />
      </section>
      <section>
        <ProjectsSection />
      </section>
    </>
  );
};

export default Home;
