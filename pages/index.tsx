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

      <div className="bg-[#00000080] h-full">
        <Header />
        <div className="max-w-[1200px] m-auto">
          <div className="flex justify-center">
            <TitleHero />

            {/* <CodeMockup /> */}
          </div>
          <div className="flex justify-end mt-20" data-aos="zoom-in">
            <p className="text-[#2ba1fb] text-2xl text-right">
              Created in 2022 <br /> Available for new projects
            </p>
          </div>
        </div>

        {/* <Slide /> */}
      </div>
    </div>
  );
}
