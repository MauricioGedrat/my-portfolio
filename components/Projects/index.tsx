import Image from "next/image";
import Link from "next/link";
import React from "react";
import Img1 from "../../assets/project-1.webp";
import Img2 from "../../assets/project-2.webp";
import Img3 from "../../assets/project-3.webp";
import Img4 from "../../assets/project-4.webp";

export const Projects = () => {
  return (
    <div className=" max-w-[1200px] m-auto">
      <div className="mt-32 flex justify-center mb-20" id="projects">
        <h1
          data-aos="zoom-in-left"
          data-aos-duration={2000}
          className="font-bold font-['Poppins'] text-7xl title-shadow text-blue-500"
        >
          Projects
        </h1>
      </div>

      <div className="flex justify-center max-w-[1200px]">
        <div className="max-w-[1200px]">
          <div className="mb-20 xl:flex justify-between items-center gap-10">
            <div  data-aos-duration={2000} data-aos="fade-down-right">
              <h1 className="text-[#d3d3d3] uppercase mb-5 text-4xl font-['Poppins']">
                Scalar DEV
              </h1>
              <p className="text-gray-300 font-['Poppins'] text-xl">Empresa de desenvolvimento Web. Site desenvolvido em 2021</p>
            </div>
            <div data-aos-duration={2000} data-aos="fade-up-right">
              <Link target={"_blank"} href={"https://scalar.dev.br/"} className="image-outline">
                <Image src={Img1} alt="image" width={550} />
                <div className="outline o-1"></div>
                <div className="outline o-2"></div>
                <div className="outline o-3"></div>
                <div className="outline o-4"></div>
              </Link>
            </div>
          </div>
          <div className="mb-20 xl:flex justify-between items-center gap-10">
            <div data-aos-duration={2000} data-aos="fade-down-right">
              <Link target={"_blank"} href={"https://duofree.vercel.app/"} className="image-outline" >
                <Image src={Img2} alt="image" width={550} />
                <div className="outline o-1"></div>
                <div className="outline o-2"></div>
                <div className="outline o-3"></div>
                <div className="outline o-4"></div>
              </Link>
            </div>
              <div data-aos-duration={2000} data-aos="fade-up-right">
                <h1 className="text-[#d3d3d3] uppercase mb-5 text-4xl font-['Poppins']">
                  Duofree
                </h1>
                <p className="text-gray-300 font-['Poppins'] text-xl">Site desenvolvido para treinamento de Design. Site desevolvido em 2022</p>
            </div>
          </div>
          <div className="mb-20 xl:flex justify-between items-center gap-10">
          <div data-aos-duration={2000} data-aos="fade-down-right">
                <h1 className="text-[#d3d3d3] uppercase mb-5 text-4xl font-['Poppins']">
                  Mustang
                </h1>
                <p className="text-gray-300 font-['Poppins'] text-xl">Site desenvolvido para treinamento de Design. Site desevolvido em 2022</p>
            </div>
            <div data-aos-duration={2000} data-aos="fade-up-right">
              <Link target={"_blank"} href={"https://mustang-roan.vercel.app/"} className="image-outline">
                <Image src={Img3} alt="image" width={550} />
                <div className="outline o-1"></div>
                <div className="outline o-2"></div>
                <div className="outline o-3"></div>
                <div className="outline o-4"></div>
              </Link>
            </div>
          </div>
          <div className="mb-20 xl:flex justify-between items-center gap-10">
            <div data-aos-duration={2000} data-aos="fade-down-right">
              <Link target={"_blank"} href={"https://restauly.vercel.app/"} className="image-outline">
                <Image src={Img4} alt="image" width={550} />
                <div className="outline o-1"></div>
                <div className="outline o-2"></div>
                <div className="outline o-3"></div>
                <div className="outline o-4"></div>
              </Link>
            </div>
          <div  data-aos-duration={2000} data-aos="fade-up-right">
                <h1 className="text-[#d3d3d3] uppercase mb-5 text-4xl font-['Poppins']">
                  Restauly
                </h1>
                <p className="text-gray-300 font-['Poppins'] text-xl">Site desenvolvido para treinamento de Design. Site desevolvido em 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
