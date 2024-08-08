import { React, useEffect } from "react";
import reactLogo from "../assets/React.svg";
import nextLogo from "../assets/Next.svg";
import tailwindLogo from "../assets/Tailwind.svg";
import nodeLogo from "../assets/JS.svg";
import flutterLogo from "../assets/Flutter.svg";
import mongoLogo from "../assets/Mongo.svg";
import myFace from "../assets/myFace.svg";
import dots from "../assets/dots.svg";
import leftBracket from "../assets/leftBracket.svg";
import rightBracket from "../assets/rightBracket.svg";
import { useRive } from "@rive-app/react-canvas";
import Typer from "../components/Typer.jsx";

import pic from "../assets/me.riv";

function Home() {
  const { rive, RiveComponent } = useRive({
    src: pic,
    stateMachines: "Moving Head",
    animations: "Swivel",
    autoplay: true,
  });

  useEffect(() => {
    if (rive) {
      rive.play();
    }
  }, [rive]);

  return (
    <div className="flex flex-col bg-[#141416] min-h-screen w-full overflow-hidden md:mt-0">
      <div className="flex flex-col-reverse justify-end sm:flex-row h-screen sm:justify-between sm:items-center mt-28 sm:mt-0">
        <div className="flex flex-col sm:w-auto w-full sm:text-left text-center justify-center items-center sm:items-start md:text-[40px] sm:px-16 px-4 font-light">
          <p className="text-white pt-3">
            <span className="sm:text-[40px] text-2xl">Hi there,</span>
            <br />
            <span className="sm:text-[40px] text-2xl">I am</span>
            <span className="text-[#B988C5] font-bold text-2xl sm:text-[40px]">
              {" "}
              Tessa Fields
            </span>
            <br />
            <span className="sm:text-6xl text-3xl font-bold">
              <Typer text="Frontend Developer" />
            </span>
          </p>
          <button className="sm:outline sm:outline-1 sm:outline-[#B988C5] sm:mt-8 p-2 sm:text-white text-[#B988C5] font-bold text-xl">
            See my work
          </button>

          <div className="flex sm:justify-normal justify-evenly sm:gap-8 items-end sm:mt-28 mt-10 w-full">
            <div className="flex flex-col items-center">
              <img src={reactLogo} className="sm:h-16 h-8" />
              <p className="text-white text-xs pt-2">React</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={nextLogo} className="sm:h-16 h-8" />
              <p className="text-white text-xs pt-2">React</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={tailwindLogo} className="sm:h-14 h-7" />
              <p className="text-white text-xs pt-2">Tailwind</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={nodeLogo} className="sm:h-16 h-8" />
              <p className="text-white text-xs pt-2">Node</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={flutterLogo} className="sm:h-16 h-8" />
              <p className="text-white text-xs pt-2">Flutter</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={mongoLogo} className="sm:h-16 h-8" />
              <p className="text-white text-xs pt-2">MongoDB</p>
            </div>
          </div>
        </div>

        <div className="flex items-center  py-12 relative w-full sm:w-1/2 h-2/5 sm:h-5/6 ">
          <img
            src={leftBracket}
            className="absolute sm:top-10 top-0 left-20 h-1/2 sm:h-auto md:1/2"
          />
          <RiveComponent className="w-full h-full sm:h-3/4" />
          <img
            src={rightBracket}
            className="absolute sm:bottom-10 bottom-0 right-20 h-1/2 sm:h-auto md:1/2"
          />
        </div>
      </div>

      <div className="flex justify-between relative h-screen" id="about">
        <img
          src={dots}
          className="absolute z-0 sm:top-0 top-36 opacity-50 sm:h-[400px] h-[150px]"
        />
        <div className="flex flex-col justify-center mx-auto z-10">
          <div className="flex mx-auto gap-20 relative w-3/4">
            <img src={myFace} className="sm:h-full" />
            <div className="flex flex-col gap-10">
              <h4 className="md:text-6xl font-bold text-white">About Me</h4>
              <p className="text-white italic">
                Junior full stack developer specializing in UI/UX design, and
                adept at crafting responsive mobile and web applications.
                <br />
                <br />
                Passionate about blending technology with seamless user
                experiences. Ambitious and detail-oriented, I thrive in a
                collaborative community environment.
                <br />
                <br />
                When not immersed in coding at a local coffee shop, I enjoy
                staying active at the gym and indulging in my love for video
                games.
              </p>
            </div>
          </div>
        </div>
        <img
          src={dots}
          className="absolute z-0 sm:bottom-0 right-0 bottom-36 opacity-50 sm:h-[400px] h-[150px]"
        />
      </div>
    </div>
  );
}

export default Home;
