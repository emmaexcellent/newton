import React from "react";
import Image from "next/image";

const academyOffers = [
  {
    title: "You Are A Recent Graduate (NYSC)?",
    desc: "We’ll help you safeguard your future and build a profitable career in tech.",
  },
  {
    title: "Techie or Career Professional?",
    desc: "We’ll help you become the best at what you do, get mentored by career leaders and get recognized certificates.",
  },
  {
    title: "School?",
    desc: "We’ll help you improve your curriculum with global standard tech training and make your students future technology leaders.",
  },
];

const AcademyGuide = () => {
  return (
    <section className="relative w-full py-40 lg:py-36">
      <div className="relative w-full max-w-6xl mx-auto p-7">
        <Image
          src="/bg/line.svg"
          width={800}
          height={600}
          alt="bg line"
          className="w-full h-auto object-center"
          priority
        />
        <div className="absolute inset-0 top-0">
          <h2 className="text-3xl leading-snug md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug font-semibold text-center">
            Feeling lost in the Tech Jungle?{" "}
            <span className="text-gradient">
              Newton Academy is here to guide you
            </span>
          </h2>
          <div className="relative mt-20 md:mt-40 pb-40 md:pb-0 md:mb-20 lg:mt-48">
            <div className="">
              <Image
                src="/bg/line1.png"
                width={800}
                height={600}
                alt=""
                className="w-full h-auto opacity-80"
                priority
              />
            </div>

            <div className="absolute inset-0 top-0 grid grid-cols-1 md:grid-cols-3 items-center gap-y-20 md:gap-10 justify-between max-w-6xl mx-auto px-5">
              {academyOffers.map((academy, index) => (
                <div
                  key={index}
                  className={`relative bg-background h-[250px] md:h-[300px] border rounded-xl p-8 text-center space-y-4 flex flex-col justify-center shadow-xl ${
                    index === 1 && "md:-mt-32"
                  }`}
                >
                  <Image
                    src="/icon/like.svg"
                    width={100}
                    height={100}
                    alt="thumb"
                    className="absolute -top-[16%] right-[35%] md:right-[33%] w-[80px] xl:w-[100px]"
                    priority
                  />
                  <p className="text-xl lg:text-2xl xl:text-3xl font-medium text-primary">
                    {academy.title}
                  </p>
                  <p className="text-sm lg:text-base">{academy.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyGuide;
