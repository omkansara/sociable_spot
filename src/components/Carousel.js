import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  // const carouselRef = useRef(null);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [startScrollLeft, setStartScrollLeft] = useState(0);
  // const [timeoutId, setTimeoutId] = useState(null);

  // const dragStart = (e) => {
  //   setIsDragging(true);
  //   carouselRef.current.classList.add("dragging");
  //   setStartX(e.pageX);
  //   setStartScrollLeft(carouselRef.current.scrollLeft);
  // };

  // const dragging = (e) => {
  //   if (!isDragging) return;
  //   const newScrollLeft = startScrollLeft - (e.pageX - startX);
  //   if (
  //     newScrollLeft <= 0 ||
  //     newScrollLeft >=
  //       carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
  //   ) {
  //     setIsDragging(false);
  //     return;
  //   }
  //   carouselRef.current.scrollLeft = newScrollLeft;
  // };

  // const dragStop = () => {
  //   setIsDragging(false);
  //   carouselRef.current.classList.remove("dragging");
  // };

  // const autoPlay = () => {
  //   if (!carouselRef.current || window.innerWidth < 800) return;
  //   const scrollAmount = carouselRef.current.offsetWidth;
  //   const currentScrollLeft = carouselRef.current.scrollLeft;
  //   const maxScrollLeft =
  //     carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
  //   if (currentScrollLeft >= maxScrollLeft) {
  //     carouselRef.current.scrollTo({
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   } else {
  //     carouselRef.current.scrollTo({
  //       left: currentScrollLeft + scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   const startAutoPlay = () => {
  //     if (timeoutId) {
  //       clearTimeout(timeoutId);
  //     }
  //     if (carouselRef.current) {
  //       const id = setTimeout(autoPlay, 3000);
  //       setTimeoutId(id);
  //     }
  //   };

  //   startAutoPlay();

  //   const handleResize = () => {
  //     startAutoPlay();
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     clearTimeout(timeoutId);
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [timeoutId]);

  // const scrollToNextSlide = () => {
  //   if (!carouselRef.current) return;
  //   const scrollAmount = carouselRef.current.offsetWidth;
  //   const currentScrollLeft = carouselRef.current.scrollLeft;
  //   const maxScrollLeft =
  //     carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;

  //   if (currentScrollLeft >= maxScrollLeft) {
  //     carouselRef.current.scrollTo({
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   } else {
  //     carouselRef.current.scrollTo({
  //       left: currentScrollLeft + scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const scrollToPrevSlide = () => {
  //   if (!carouselRef.current) return;
  //   const scrollAmount = carouselRef.current.offsetWidth;
  //   const currentScrollLeft = carouselRef.current.scrollLeft;

  //   if (currentScrollLeft === 0) {
  //     carouselRef.current.scrollTo({
  //       left: carouselRef.current.scrollWidth - scrollAmount,
  //       behavior: "smooth",
  //     });
  //   } else {
  //     carouselRef.current.scrollTo({
  //       left: currentScrollLeft - scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="carousel-container relative w-100 ">
      <div
        className="carousel flex  w-100 "
        // ref={carouselRef}
        // onMouseDown={dragStart}
        // onMouseMove={dragging}
        // onMouseUp={dragStop}
        // onMouseLeave={dragStop}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="carousel-item flex-none w-full md:w-1/3 lg:w-1/4 bg-gray-300 rounded-lg shadow-lg mx-2"
          >
            <div className="p-4 text-center">
              <img
                src={`https://via.placeholder.com/150?text=Item+${index + 1}`}
                alt={`Item ${index + 1}`}
                className="w-full h-40 object-cover mb-2 rounded-lg"
              />
              <h3 className="text-xl font-semibold">Item {index + 1}</h3>
              <p className="text-gray-700">Description for item {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="carousel-nav absolute bottom-4 left-0 right-0 flex items-center justify-between px-4"> */}
      {/* <button
          className="carousel-prev text-black p-2"
          // onClick={scrollToPrevSlide}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button> */}
      {/* <button */}
      {/* // className="carousel-next text-black p-2" // onClick= */}
      {/* {scrollToNextSlide} */}
      {/* > */}
      {/* <FontAwesomeIcon icon={faAngleRight} />  */}
      {/* </button> */}
    </div>
    // </div>
  );
};

export default Carousel;
