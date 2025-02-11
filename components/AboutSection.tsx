import React from "react";
import TextRotate from "./animations/TextRotate";
import MeteorDemo from "./animations/MeteorsEffect";

const AboutSection = () => {
  return (
    <>

      <MeteorDemo>
        <div className="bg-white dark:bg-primary-black flex-[2] p-3 rounded-[32px] px-8 py-16 lg:h-[85vh] z-[100]">
          <div className="text-2xl tracking-tight">
            <span>Hello, I&apos;m </span>
            <div className="inline-block">
              <div className="flex items-center justify-center mt-10 text-primary-green">
                <TextRotate
                  text={[
                    "Mohamed Elmougy",
                    "Web Developer",
                    "Front end Developer",
                    "React.js Developer",
                  ]}
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl tracking-wide my-4 font-semibold">
            <span className="leading-[1.4] text-inherit">
              Senior Data Engineer and <br />
              <span className="inline-block bg-primary-green text-black px-4 rounded-full -rotate-[4deg]">
                Data Scientist
              </span>{" "}
              Based in California, Los Angeles.
            </span>
          </h1>
          <p className="text-base">
            Have worked in a variety of positions, including key developer,
            solution designer, and data architect. Strong engineering background
            combined with closely working with business customers.
          </p>
          <div className="flex items-center gap-3 justify-around mt-16 flex-wrap">
            <div className="flex gap-2 items-center justify-center">
              <span className="lg:text-5xl xl:text-6xl">96</span>
              <p className="text-xl">
                <span className="inline-block">project</span> <br /> complete
              </p>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <span className="lg:text-5xl xl:text-6xl">96</span>
              <p className="text-xl">
                <span className="inline-block">Years</span> <br /> of Experience
              </p>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <span className="lg:text-5xl xl:text-6xl">96</span>
              <p className="text-xl">
                <span className="inline-block">Awards</span> <br /> Winning
              </p>
            </div>
          </div>
        </div>
      </MeteorDemo>
    </>
  );
};

export default AboutSection;
