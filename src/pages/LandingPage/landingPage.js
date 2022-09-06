import React from "react";
import Navbar from "../Navbar/navbar";

function LandingPage() {
  return (
    <div>
      <div
        className="h-screen box-border"
        style={{
          backgroundImage:
            "url('https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg')",
        }}
      >
        <Navbar />
        <div className="mt-52">
          <div className="flex flex-col items-center content-center leading-10">
            <h1 className="text-white text-5xl text-center">
              Find A Code TacCamp
            </h1>
            <h2 className="text-white text-xl mt-3 text-center">
              Find, rate and read reviews on coding bootcamps
            </h2>
            <div className="flex flex-wrap justify-around w-4/5 ">
              <input
                type="text"
                placeholder="Miles From"
                className="w-2/5 h-8 mt-3"
              />
              <input
                type="text"
                placeholder="Enter ZipCode"
                className="w-2/5 h-8 mt-3"
              />
            </div>
            <button className="text-white bg-red-500 mt-3 w-96">
              Find TecCamps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
