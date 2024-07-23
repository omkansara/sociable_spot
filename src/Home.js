import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Sittinglady from "./components/UI/Sittinglady";
import HolisticApproach from "./components/UI/HolisticApproach";
import GreatCommunity from "./components/UI/GreatCommunity";
import Accessibility from "./components/UI/Accessibility"; // Corrected import
import Man from "./components/UI/Man";
import Carousel from "./components/Carousel"; // Imported Carousel component
import { Link } from "react-router-dom";

const Home = ({ setCurrentPage }) => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-background">
      <section className="flex items-start justify-between w-screen h-screen px-20">
        <div className="pt-40 font-bold">
          <h1 className="text-5xl mb-4">Sociable Spot</h1>
          <div className="text-4xl mb-4 text-black">
            <span>"Where Minds Meet,</span>
            <br />
            <span className="ml-10">Healing Begins"</span>
          </div>
          <p className="mt-10 mb-5 font-normal w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            officia. Quo perspiciatis itaque quod voluptatem. Optio deleniti quo
            quis facere?
          </p>
          <button className="px-6 py-2 bg-[#455A64] text-white font-semibold rounded-full">
            <Link to="/services" className="cursor-pointer">
              Get Started
            </Link>
          </button>
        </div>
        <div>
          <Sittinglady />
        </div>
      </section>

      <section className="w-screen h-screen flex flex-col px-20 items-center justify-start">
        <h1 className="text-5xl font-semibold mb-4 text-center w-2/3">
          Why our Mental Health Consultants are the Best Choice
        </h1>
        <div className=" flex items-center justify-start mt-10 space-x-4">
          <div className="transition duration-500 ease-in-out hover:bg-[#FAF9F6] transform hover:-translate-y-1 hover:scale-110 ... bg-[#D2F6D5] w-96 h-72 rounded-l-xl flex flex-col items-center justify-center gap-5 p-5 shadow-xl">
            <HolisticApproach />
            <h1 className="font-semibold text-2xl">Holistic Approach</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, molestias.
            </p>
          </div>
          <div className="transition duration-500 ease-in-out hover:bg-[#FAF9F6] transform hover:-translate-y-1 hover:scale-110 ... bg-[#D2F6D5] w-96 h-72 rounded-r-xl flex flex-col items-center justify-center gap-5 p-5 shadow-xl">
            <GreatCommunity />
            <h1 className="font-semibold text-3xl">Great Community</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, iste.
            </p>
          </div>
          <div className="transition duration-500 ease-in-out hover:bg-[#FAF9F6] transform hover:-translate-y-1 hover:scale-110 ... bg-[#D2F6D5] w-96 h-72 rounded-r-xl flex flex-col items-center justify-center gap-5 p-5 shadow-xl">
            <Accessibility />
            <h1 className="font-semibold text-2xl">Accessibility</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quos.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-screen h-screen flex px-20 items-start justify-end">
        <div className="absolute -top-10 left-0">
          <Man />
        </div>

        <div className="flex flex-col items-start justify-start mt-5 h-full gap-5 w-1/2 mr-10">
          <h3 className="font-semibold">About Us</h3>
          <h1 className="text-5xl font-semibold z-10 leading-snug">
            Discover the Faces
            <br />
            Behind Our Mental
            <br />
            Health Consultancy
          </h1>
          <p className="mb-1">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam adipiscing feugiat interdum mattis. Placerat donec risus
            diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus A
            risus donec eget enim.
          </p>
          <button className="px-6 py-2 bg-[#455A64] text-white font-semibold rounded-full">
            {" "}
            <Link to="/about" className="cursor-pointer">
              See Details
            </Link>
          </button>
        </div>
      </section>

      <section className="relative w-screen  flex flex-col items-center justify-center  ">
        <div className="text-center text-black text-xl font-semibold -mt-32">
          Services
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Individual Therapy, Group Support, and Wellness
          <span className="block">Programs: Your Path to Mental Wellbeing</span>
        </h2>
      </section>
      <div className="w-5/6">
        <section>
          <Carousel />
        </section>
      </div>

      <section></section>

      <section>
        <div className="mx-auto max-w-2xl lg:text-center mb-6 pt-44">
          <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 md:mt-0">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200 bg-[#D2F6D5]">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                How do I get started?
              </span>
              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi
                nobis inventore ratione deleniti?
              </p>
            </div>
          </div>
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200 bg-[#D2F6D5]"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
              >
                <span className="flex text-start text-lg font-semibold text-black">
                  What is the difference between a free and paid account?
                </span>
                <ChevronDown className="hidden h-5 w-5 text-gray-500 md:block" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
