import React from "react";

const Preloader = () => {
  return (
    <div>
      <div className=" h-screen fixed top-0 left-0 right-0 overflow-hidden flex justify-center items-center  space-x-2  bg-[#243040]  da rk:invert">
        <div className="flex gap-2">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
