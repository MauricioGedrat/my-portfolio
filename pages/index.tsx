import { Header } from "../components/Header";
import dynamic from "next/dynamic";
import EfficientCursor from "react-efficient-cursor";
import { TitleHero } from "../components/TitleHero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="h-full bg-hero-bg bg-no-repeat bg-cover">
      <EfficientCursor
        speed={0.3}
        className="relative z-[100000] md:flex hidden"
      >
        <div className="w-7 h-7 bg-transparent border-2 border-[#d3d3d3] bg-[#d3d3d3] bg-opacity-30 backdrop-blur-lg rounded-full "></div>
      </EfficientCursor>

      <div className="bg-[#0000009f] h-full">
        <Header />
        <div className="max-w-[1200px] m-auto">
          <div className="flex justify-center">
            <TitleHero />

            {/* <CodeMockup /> */}
          </div>
          <div
            className="flex xl:justify-end justify-center mt-10 xl:mb-0 mb-10"
            data-aos="zoom-in"
            data-aos-duration={2000}
          >
            <p className="text-gray-400 sm:text-2xl text-md xl:text-right text-center">
              Created in <span className="text-blue-500">2022</span> <br />{" "}
              Available for new projects
            </p>
          </div>
          <div
            className="flex justify-center "
            data-aos="zoom-in"
            data-aos-duration={2000}
          >
            <a
              href="#projects"
              className="inline-block text-3xl sm:text-4xl text-blue-500 uppercase border-2 border-blue-500 sm:px-20 px-10 sm:py-6 py-3 rounded-lg neon-btn relative"
            >
              Start
            </a>
          </div>
        </div>

        <Projects />
        <Skills />
        {/* <Slide /> */}
        <ContactForm />
        <Footer/>
      </div>
    </div>
  );
}
