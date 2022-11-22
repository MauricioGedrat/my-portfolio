import Image from "next/image";
import React from "react";
import Img1 from "../../assets/project-1.webp";
import Img2 from "../../assets/project-2.webp";
import Img3 from "../../assets/project-3.webp";
import Img4 from "../../assets/project-4.webp";

export const Projects = () => {
  return (
    <div className="h-screen max-w-[1200px] m-auto">
      <div className="mt-32 flex justify-center mb-20" id="projects">
        <h1
          data-aos="zoom-in-left"
          data-aos-duration={2000}
          className="font-bold font-['Poppins'] text-7xl title-shadow text-blue-500"
        >
          Projects
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-10">
          <div className="image-outline">
            <Image src={Img1} alt="image" width={550} />
            <div className="outline o-1"></div>
            <div className="outline o-2"></div>
            <div className="outline o-3"></div>
            <div className="outline o-4"></div>
          </div>
          <div className="image-outline">
            <Image src={Img2} alt="image" width={550} />
            <div className="outline o-1"></div>
            <div className="outline o-2"></div>
            <div className="outline o-3"></div>
            <div className="outline o-4"></div>
          </div>
          <div className="image-outline">
            <Image src={Img3} alt="image" width={550} />
            <div className="outline o-1"></div>
            <div className="outline o-2"></div>
            <div className="outline o-3"></div>
            <div className="outline o-4"></div>
          </div>
          <div className="image-outline">
            <Image src={Img4} alt="image" width={550} />
            <div className="outline o-1"></div>
            <div className="outline o-2"></div>
            <div className="outline o-3"></div>
            <div className="outline o-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
