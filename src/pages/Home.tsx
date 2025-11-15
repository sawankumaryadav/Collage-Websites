import Topheader from "../components/TopHeader"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <Topheader />
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </>
  );
}
