import React from "react";
import html from "../../public/html1.png";
import css from "../../public/css1.jpg";
import node from "../../public/node.png";
import javascript from "../../public/javascrip.webp"; // JavaScript logo
import express from "../../public/express.png"; // Express.js logo
import reactjs from "../../public/reactjs.png"; // React.js logo
import redux from "../../public/redux.png"; 
import tailwind from "../../public/tailwind.png"; 
import api from "../../public/apiintegration.jpg"; 
import vite from "../../public/vite1.webp"; 

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: node,
      name: "Node js",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: express,
      name: "Express.js",
    },
    {
      id: 6,
      logo: reactjs,
      name: "React.js",
    },
    {
      id: 7,
      logo: redux, 
      name: "Redux", 
    },
    {
      id: 8,
      logo: tailwind, 
      name: "Tailwind ", 
    },
    {
      id: 9,
      logo: api, 
      name: " Integration",
    },
    {
      id: 10,
      logo: vite, 
      name: "vite js", 
    },
  ];

  return (
    <div
      name="Experiance"
      className="bg-gradient-to-r from-custom-black to-custom-gray max-w-screen-2xl container mx-auto p-4 md:p-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've More Than 1 Years Of Experiance In Below Technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-lg md:w-[200px] md:h-[200px] shadow-md p-2 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-lg " alt={name} />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
