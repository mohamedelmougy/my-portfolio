import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoBackground from "@/components/VideoBackground";

const Home = () => {
  return (
    <section className="h-[200vh]">
      <VideoBackground />
      <Navbar />

      <Hero />
    </section>
  );
};

export default Home;
