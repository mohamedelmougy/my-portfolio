import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoBackground from "@/components/VideoBackground";
import TechnicalSkills from "@/components/TechnicalSkills";

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
    </>
  );
};

export default Home;
