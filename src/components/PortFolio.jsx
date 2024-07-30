import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: "https://plus.unsplash.com/premium_photo-1683798464819-d1376249293e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "E-Commerce",
      videoLink: "https://kmoinkhan881e-commerce-website.netlify.app/",
      sourceCodeLink: "https://github.com/kMoinkhanfc771/Apni-Dukan",
    },
    {
      id: 2,
      logo: "https://media.istockphoto.com/id/1618446911/photo/radio-man-and-a-security-guard-or-safety-officer-outdoor-on-a-city-road-for-communication.webp?s=1024x1024&w=is&k=20&c=G1bgORlrCYr-gSu1v-MSGyyEHd292h1P3Fp9CfowDVc=",
      name: "Guard",
      videoLink: "https://kmoinkhanfc774guardwebsite.netlify.app/",
      sourceCodeLink: "https://github.com/kMoinkhanfc771/Oustanding-Scrollbar",
    },
    {
      id: 3,
      logo: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "FoodPanda",
      videoLink: "https://guard-moin-khan.netlify.app/",
      sourceCodeLink: "https://github.com/kMoinkhanfc771/Apni-Dukan",
    },
    {
      id: 4,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbu11weMpBMD29L8EhRSaTh22i-OhIvGbNA&s",
      name: "AirForShare",
      videoLink: "https://airfor-share-moin-khan.netlify.app/",
      sourceCodeLink: "https://github.com/kMoinkhanfc771/Apni-Dukan",
    },
    {
      id: 5,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSca6srou_t7-XbePWXLF3Xwf-v_AJuqA69Q&s",
      name: "PorFolio",
      videoLink: "https://moinfc-portfolio-website.netlify.app/",
      sourceCodeLink: "https://github.com/kMoinkhanfc771/portFolio",
    },
    {
      id: 6,
      logo: "https://thumbs.dreamstime.com/z/discount-stamp-vector-clip-art-33305813.jpg",
      name: "Discount Calculation",
      videoLink: "https://mydiscountanwebsite.netlify.app/",
      sourceCodeLink: "https://github.com/kMoinkhanfc771/portFolio",
    },
    {
      id: 7,
      logo: "https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg",
      name: "Todo List",
      videoLink: "https://moinfc-portfolio-website.netlify.app/",
      sourceCodeLink: "https://github.com/kMoinkhanfc771/portFolio",
    },
    {
      id: 8,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDy8Xwgc7yDnxR3jV-EsQ6T5wG-nNT1DgUQ&s",
      name: "Book Shop",
      videoLink: "https://mydiscountanwebsite.netlify.app/",
      sourceCodeLink: "https://github.com/kMoinkhanfc771/portFolio",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-r from-indigo-100 to-black max-w-screen-2xl container mx-auto p-4 md:p-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className=" underline font-semibold">Feature Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 my-5">
          {cardItem.map(({ id, logo, name, videoLink, sourceCodeLink }) => (
            <div
              className="md:w-[290px] md:h-[300px]  border-[2px] rounded-lg shadow-lg p-1 cursor-pointer  duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] h-[150px] hover:scale-100 duration-100 p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a
                  href={videoLink} target="_blank"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Go to Web
                </a>
                <a
                  href={sourceCodeLink} target="_blank"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                   Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
