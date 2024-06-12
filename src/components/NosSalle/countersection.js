import React from "react";
import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <section className="bg-gray-100 py-12" id="section-counter">
      <div className="container mx-auto">
        <div className="flex justify-around">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#f04e3c]">
              <CountUp end={50} duration={3} />
            </div>
            <div className="text-gray-600 mt-2">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#f04e3c] ">
              <CountUp end={8500} duration={3} />
            </div>
            <div className="text-gray-600 mt-2">Successful Entrepreneurs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#f04e3c]">
              <CountUp end={378} duration={3} />
            </div>
            <div className="text-gray-600 mt-2">Companies Founded</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#f04e3c]">
              <CountUp end={1200} duration={3} />
            </div>
            <div className="text-gray-600 mt-2">Books, DVDs, and Podcasts</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
