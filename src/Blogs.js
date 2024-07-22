import React from "react";
import Bwaves from "./components/UI/Bwaves";

const Blogs = () => {
  return (
    <>
      <div className="min-h-screen p-10 flex flex-col">
        <div className="text-center mt-10 mb-8">
          <span className="text-black text-3xl font-bold border-b-2 border-green-800">
            Our Blogs
          </span>
        </div>
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-black rounded-md bg-[#D2F6D5]">
            <div className="relative">
              <div className="bg-[#D2F6D5] p-2 rounded-t-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
                  className="aspect-video w-full rounded-t-md"
                  alt=""
                />
              </div>

              <Bwaves />
            </div>
            <div className="min-h-min p-3">
              <p className="mt-2 flex-1 text-base font-semibold text-gray-900">
                The Future of Mobile App Development
              </p>
              <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                Discover the latest trends and techniques that will shape the
                future of mobile app development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
