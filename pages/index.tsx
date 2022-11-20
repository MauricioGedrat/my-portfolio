import { Header } from "../components/Header";
import dynamic from "next/dynamic";
import EfficientCursor from "react-efficient-cursor";
import { TitleHero } from "../components/TitleHero";

export default function Home() {
  return (
    <div className=" bg-hero-bg h-screen bg-no-repeat bg-cover">
      <EfficientCursor speed={0.2} className="relative z-[100]">
        <div className="w-14 h-14 bg-transparent border-2 border-[#d3d3d3] rounded-full "></div>
      </EfficientCursor>

      <div className="bg-[#0000009f] h-full">
        <Header />
        <div className="max-w-[1200px] m-auto">
          <div className="flex justify-center">
            <TitleHero />

            {/* <CodeMockup /> */}
          </div>
          <div
            className="flex justify-end mt-20"
            data-aos="zoom-in"
            data-aos-duration={2000}
          >
            <p className="text-[#d3d3d3] text-2xl text-right">
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
              href="#experience"
              className="inline-block text-4xl text-blue-500 uppercase border-2 border-blue-500 px-20 py-6 rounded-lg neon-btn relative"
            >
              Start
            </a>
          </div>
        </div>

        {/* <Slide /> */}
      </div>
    </div>
  );
}
