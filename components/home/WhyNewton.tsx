import React from 'react'
import Image from "next/image"


const courseExp = [
  {
    title: "Hands-On Projects",
    desc: "Dive into real-world challenges and build projects that make your portfolio pop.",
    icon: "/icon/cog.svg",
  },
  {
    title: "Your Global Tech Credential!",
    desc: "Earn a Newton Academy diploma and boost your career with a credential that’s valued worldwide!",
    icon: "/icon/bag.svg",
  },
  {
    title: "Career Boost",
    desc: "Our career support on CV building, Linkedin optimization and AI Job marketplace.",
    icon: "/icon/cv.svg",
  },
  {
    title: "Awesome Community",
    desc: "Join a buzzing network of fellow techies, mentors, and alumni who have your back.",
    icon: "/icon/users.svg",
  },
];

const WhyNewton = () => {
  return (
    <section className="relative w-full bg-[#F8F8F8] pt-10 pb-40">
      <Image
        src="/bg/topwave.svg"
        width={800}
        height={400}
        alt="design box dot"
        priority
        className="w-full h-32 object-cover absolute bottom-0"
      />
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
        height={70}
        alt="design box dot"
        priority
        className="absolute bottom-[15%] opacity-70 left-0"
      />
      <div className="w-full max-w-6xl mx-auto p-7 overflow-hidden">
        <div className="relative flex flex-col lg:flex-row  items-center gap-10">
          <Image
            src="/icon/xline.svg"
            width={100}
            height={30}
            alt="design arrow"
            priority
            className="absolute w-32 left-[30%] bottom-0  md:top-[5%]"
          />
          <div className="relative w-full md:w-[80%] lg:w-[40%] shrink-0">
            <Image
              src="/icon/line2.svg"
              width={100}
              height={30}
              alt="design arrow"
              priority
              className="absolute w-28 left-12 top-[13%]"
            />
            <div className="w-full h-[500px] sm:h-[600px] md:h-[850px] lg:h-[670px] bg-[#FF3D3D] rounded-full" />
            <Image
              src="/images/laptopguy.png"
              width={500}
              height={800}
              alt="laptop tech guy"
              priority
              className="w-full absolute bottom-0 rounded-b-full"
            />
          </div>
          <div className="order-first lg:order-last">
            <h2 className="text-2xl md:text-4xl xl:text-5xl md:leading-snug xl:leading-snug font-semibold lg:font-medium">
              Why Newton Academy is the{" "}
              <span className="text-primary">best place</span> for you
            </h2>
            <p className="text-foreground/60">
              you&apos;re not just taking courses - you&apos;re stepping into a
              vibrant, game-changing experience! Here&apos;s what you get:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mt-10">
              {courseExp.map((exp, index) => (
                <div
                  key={index}
                  className="rounded-xl p-5 space-y-3 group hover:bg-background"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-[#FFD600] group-hover:bg-primary rounded-full">
                    <Image
                      src={exp.icon}
                      width={70}
                      height={70}
                      alt={exp.title}
                      className="w-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{exp.title}</p>
                    <p className="text-sm pt-1 text-foregorund/60">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-gradient rounded-full text-background py-3 px-7 mt-10 ml-5">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyNewton