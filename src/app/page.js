import Image from "next/image";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto py-4 px-20">
        <Home />
        {/* <Achievements /> */}
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
