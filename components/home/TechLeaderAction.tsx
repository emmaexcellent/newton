import React from 'react'
import Image from "next/image"

const TechLeaderAction = () => {
  return (
    <section className="mt-[60rem] md:mt-56">
      <div className="relative">
        <Image
          src="/bg/roundtop.svg"
          width={800}
          height={400}
          alt=""
          priority
          className="w-full h-24 lg:h-40 object-cover"
        />
        <div className="absolute top-10 left-1/2">
          <div className="relative">
            <Image
              src="/icon/angle.svg"
              width={80}
              height={80}
              alt=""
              priority
              className="opacity-0 md:opacity-90"
            />
            <Image
              src="/icon/angleline.svg"
              width={120}
              height={30}
              alt=""
              priority
              className="w-40 absolute top-16 -right-10"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFC3] overflow-hidden">
        <div className="relative w-full max-w-6xl mx-auto pt-12 md:pt-20 p-7 pb-0 mt-0">
          <Image
            src="/bg/line.svg"
            width={800}
            height={600}
            alt="bg line"
            className="absolute top-1/2 w-full h-auto object-center"
            priority
          />
          <div className="relative flex flex-col lg:flex-row gap-12">
            <Image
              src="/icon/boxdot1.svg"
              width={230}
              height={180}
              alt="design box dot"
              priority
              className="absolute w-32 lg:w-48 top-0 left-0 lg:left-[35%]"
            />
            <Image
              src="/icon/boxdot1.svg"
              width={230}
              height={180}
              alt="design box dot"
              priority
              className="absolute w-32 lg:w-48 top-[45%] md:top-[35%] lg:bottom-0 right-32 lg:-left-20"
            />
            <div className="relative flex gap-0 items-end">
              <div className="bg-[#FFD600] h-[400px] md:h-[600px] rounded-t-full w-full md:w-[500px] shrink-0" />
            </div>
            <Image
              src="/images/techguy.png"
              width={500}
              height={700}
              alt=""
              className="w-full lg:w-[70%] h-[300px] md:h-auto absolute left-0 bottom-0"
              priority
            />
            <div className="relative order-first lg:order-last">
              <Image
                src="/icon/angleorange.svg"
                width={60}
                height={60}
                alt="yellow angle"
                priority
                className="absolute right-5 lg:left-[25%]"
              />
              <h2 className="text-4xl md:text-6xl leading-slug lg:text-5xl lg:leading-slug font-semibold mt-20">
                <span className="text-gradient">Become a tech leader </span>{" "}
                with our training programs
              </h2>
              <p className="mt-5">
                We are here to help you become a master at the tech skill of
                your choice with our industry relevant curriculum and practical
                learning programs delivered by global tech leaders.
              </p>
              <button className="mt-8 bg-gradient rounded-full text-background py-3 px-6">
                See more
              </button>
              <div className="absolute lg:relative right-5 flex justify-end">
                <Image
                  src="/icon/arrowup.svg"
                  width={200}
                  height={200}
                  alt="arrow up"
                  priority
                  className="mr-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechLeaderAction