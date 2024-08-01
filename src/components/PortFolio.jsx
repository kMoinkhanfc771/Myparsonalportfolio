import React, { useEffect } from 'react';
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
function PortFolio() {
  useEffect(() => {
    // Swiper ko initialize karna
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: true, 
      },
      loop: true, 
    });
  }, []);

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
        videoLink: "https://myguardwe.netlify.app/",
        sourceCodeLink: "https://github.com/kMoinkhanfc771/guard",
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
    <div className="bg-gradient-to-r from-custom-black to-custom-gray max-w-screen-xl container mx-auto p-4 md:p-20 mt-10 overflow-hidden">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">My  Projects</span>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {cardItem.map(({ id, logo, name, videoLink, sourceCodeLink }) => (
              <div className="swiper-slide" key={id}>
                <div className="bg-gradient-to-r from-custom-black to-custom-gray border-[2px] rounded-lg shadow-lg p-4 cursor-pointer duration-300 bg-white">
                  <img
                    src={logo}
                    className="w-full h-40 object-cover hover:scale-105 duration-300 rounded-lg border-[2px]"
                    alt={name}
                  />
                  <div className="mt-4">
                    <div className="font-bold text-xl mb-2 text-white">{name}</div>
                    <p className="text-white">
                      Lorem ipsum, dolor sit amet consectetur.
                    </p>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href={videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded"
                    >
                      Go to Web
                    </a>
                    <a
                      href={sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Add Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
