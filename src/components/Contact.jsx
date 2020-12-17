import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Form from "./Form";
import content from "../content/content";
import useWindowPosition from "../hook/useWindowPos";

const Contact = () => {
  const animated = useWindowPosition("header", 0.6, 4);

  return (
    <div
      className=" min-h-screen  flex justify-center items-center  "
      id="mycontact"
    >
      <div
        style={{
          minHeight: "50vh",
          background: "#1D1D1D",
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <div className="mt-2 transtion duration-2000 ease-in-out mx-auto">
          <Form />
        </div>
        <div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
          <h1
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-3000 text-white text-5xl font-bold`}
          >
            {content.contact.title}
          </h1>
          <p
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-3000 text-white text-2xl`}
          >
            {content.contact.desc}
          </p>
          <div
            className={`flex ${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-3000 `}
          >
            {content.contact.socials.map((social, index) => {
              return (
                <a key={index} href={social.link}>
                  <LazyLoadImage
                    effect="blur"
                    className="m-3"
                    width="50px"
                    src={social.img}
                    alt={social.alt}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
