import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import content from "../content/content";
import useWindowPosition from "../hook/useWindowPos";

import "react-lazy-load-image-component/src/effects/blur.css";

const Work = () => {
  const animated = useWindowPosition("header", 0.6);
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = "translate-y-10 opacity-0";
  const slide = (zone) =>
    `transform transition ease-in-out duration-500 sm:duration-700 translate-x-${zone}`;
  const [id, setId] = useState(0);
  const [slider, setSlider] = useState(false);

  const prevPro = () => {
    setSlider(true);
    setTimeout(() => {
      setSlider(false);
      id - 1 < 0 ? setId(content.work.cards.length - 1) : setId(id - 1);
    }, 500);
  };

  const nextPro = () => {
    setSlider(true);
    setTimeout(() => {
      setSlider(false);
      id + 1 < content.work.cards.length ? setId(id + 1) : setId(0);
    }, 500);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col overflow-hidden"
      style={{
        background: "#FEFEFE",
      }}
      id="mywork"
    >
      <h1 className="text-5xl font-dosis font-bold">{content.work.title}</h1>
      <p className="text-gray-600 text-2xl font-dosis mb-16">Projets réalisé</p>
      <Project id={id} slider={slider} slide={slide} />
      <div className="mt-20">
        <button
          onClick={prevPro}
          className={`mr-3 animate-bounce bg-indigo-500 px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-indigo-300 transform  ${
            animated ? "translate-y-0" : styleTranslate
          } ${transition(1000)}`}
        >
          Prev
        </button>
        <button
          onClick={nextPro}
          className={`ml-3 animate-bounceFirst bg-indigo-500 px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-indigo-300 transform  ${
            animated ? "translate-y-0" : styleTranslate
          } ${transition(1000)}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Project = ({ id, slider, slide }) => {
  const animated = useWindowPosition("header", 0.6);

  return (
    <div
      className={`${
        slider ? slide("full") : slide(0)
      } flex flex-col md:flex-row justify-between items-center w-11/12`}
    >
      <LazyLoadImage
        effect="blur"
        src={content.work.cards[id].img}
        alt="phone prototype"
        className="m-10 xll:ml-56 lg:ml-24 transtion duration-2000 ease-in-out z-10 w-4/5"
      />
      <div
        className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
        style={{
          border: "1px solid #e5ecf9",
          transform: animated
            ? "translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)"
            : "",
          boxShadow:
            "35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)",
        }}
      >
        <ProjectDetail id={id} />
      </div>
    </div>
  );
};

const ProjectDetail = ({ id }) => {
  const animated = useWindowPosition("header", 0.6);

  return (
    <div>
      <h1
        className={` ${
          animated ? "" : "translate-y-10 opacity-0"
        }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        {content.work.cards[id].projectName}
      </h1>
      <p
        className={`${
          animated ? "" : "translate-y-10 opacity-0"
        }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        {content.work.cards[id].desc}
      </p>
      <a
        rel="noreferrer"
        target="_blank"
        disabled={content.work.cards[id].web ? false : true}
        href={content.work.cards[id].link1}
        className={`${
          animated ? "" : "translate-y-10 opacity-0"
        } cursor-pointer transform transition duration-2000  px-20 py-3 m-4
        ${
          content.work.cards[id].web
            ? "bg-purple-400"
            : "bg-gray-500 cursor-not-allowed"
        }
        text-white flex justify-around rounded-lg shadow-2xl`}
      >
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5 object-contain"
        />
        <p className="text-lg">Website</p>
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href={content.work.cards[id].link2}
        className={`${
          animated ? "" : "translate-y-10 opacity-0"
        } cursor-pointer transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5 object-contain"
        />
        <p className="text-lg">Source code</p>
      </a>
    </div>
  );
};

export default Work;
