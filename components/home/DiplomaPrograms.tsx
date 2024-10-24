import React from 'react'
import Image from "next/image"

const diplomPrograms = [
  {
    title: "Full stack Engineering",
    desc: "Develop a comprehensive range of skills to manage both the client and server aspects of the development process.",
    image: "/images/diploma/fullstack.png",
    icon: "/images/diploma/icons/code.svg",
  },
  {
    title: "Digital Marketing",
    desc: "Up-skill yourself and master the art and science of promoting products and services in the ever-revolving digital world.",
    image: "/images/diploma/marketing.png",
    icon: "/images/diploma/icons/digital.svg",
  },
  {
    title: "Data Science",
    desc: "Combine mathematics and logic with technical skills to solve data-related problems in various fields such as finance, healthcare, marketing, e-commerce and more.",
    image: "/images/diploma/data.png",
    icon: "/images/diploma/icons/data.svg",
  },
  {
    title: "Digital Design",
    desc: "Master the skills and techniques to craft captivating visual and interactive experiences in today’s digital age!",
    image: "/images/diploma/design.jfif",
    icon: "/images/diploma/icons/design.png",
  },
];

const DiplomaPrograms = () => {
  return (
    <section className="w-full mt-28 lg:mt-32">
      <div className="relative w-full max-w-6xl mx-auto px-7 overflow-hidden">
        <Image
          src="/bg/line.svg"
          width={800}
          height={600}
          alt="bg line"
          priority
          className="absolute top-1/2 w-full h-auto object-center"
        />
        <Image
          src="/icon/boxdot1.svg"
          width={200}
          height={100}
          alt="design box dot"
          priority
          className="absolute w-32 lg:w-48 top-24 opacity-60 -left-12"
        />
        <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-5">
          <div className="md:w-[400px] lg:w-[600px]">
            <h2 className="text-2xl md:text-4xl font-medium text-gradient pb-4">
              Diploma Programs
            </h2>
            <p className="text-sm ms:text-base lg:text-lg text-foreground/70">
              Master your chosen tech skill with practical programs taught by
              global tech experts.
            </p>
          </div>
          <button className="bg-gradient p-0.5 rounded-full">
            <span className="w-full h-full inline-flex gap-1.5 items-center bg-background  rounded-full py-3 px-5 text-sm md:text-base">
              <span>See more</span>
            </span>
          </button>
        </div>

        <div className="mt-12 flex flex-nowrap overflow-hidden items-center justify-between gap-5 bg-gradient-to-t from-background via-[#F8F8F8] to-background">
          {diplomPrograms.map((diploma, index) => (
            <div
              key={index}
              className="relative p-2 bg-background rounded-[25px] basis-[85%] sm:basis-[75%] lg:basis-[30%] shrink-0 border max-h-[600px]"
            >
              <Image
                src={diploma.image}
                width={430}
                height={280}
                alt={diploma.title}
                className="rounded-[14px] w-[400px] h-[180px] object-cover"
              />
              <div className="py-3 px-2">
                <h3 className="text-lg md:text-2xl font-medium">{diploma.title}</h3>
                <p className="text-foreground/70 mt-3 line-clamp-3">
                  {diploma.desc}
                </p>
                <button className="mt-8 leading-snug bg-gradient rounded-full text-sm text-background py-3 px-6">
                  View course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiplomaPrograms