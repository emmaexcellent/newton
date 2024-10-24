import React from 'react'
import Image from "next/image"
import Link from 'next/link';


const tutors = [
  {
    image: "/images/tutors/akin.png",
    name: "Akinwole Abraham",
    role: "Tutor Full-Stack Development",
    position: "Software Engineer Precise Financials",
    color: "bg-[#7FBFB2]",
    linkedin: "/",
  },
  {
    image: "/images/tutors/theo.png",
    name: "Theophilus Akhimie",
    role: "Tutor Digital Marketing",
    position: "Digital Marketing Manager Accenture",
    color: "bg-[#FFD600]",
    linkedin: "/",
  },
  {
    image: "/images/tutors/prof.png",
    name: "Prof Olawale Awe",
    role: "Tutor Data Science",
    position:
      "Vice-President- Global Statistical Engagements, LISA 2020 Global Network, USA",
    color: "bg-[#FF3D3D]",
    linkedin: "/",
  },
];

const Tutors = () => {
  return (
    <section className="relative w-full overflow-hidden pt-48 lg:pt-0 pb-28">
      <Image
        src="/bg/topwave.svg"
        width={800}
        height={400}
        alt="design to wave"
        priority
        className="w-full h-32 object-cover absolute bottom-0 bg-[#F8F8F8] rotate-180"
      />
      <Image
        src="/icon/boxdot1.svg"
        width={200}
        height={120}
        alt="design box dot"
        priority
        className="absolute w-32 h-40 top-20 left-0"
      />
      <div className="w-full max-w-6xl mx-auto p-7">
        <div className="w-full lg:w-[600px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium md:leading-snug">
            Meet your <span className="text-primary"> Tutors & Tech</span> Guide
            at Newton
          </h2>
          <p className="md:px-16">
            Join more than 50 people building their tech careers with Newton
            Academy.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-5 lg:gap-12 justify-center mt-16 md:mt-0">
          {tutors.map((tutor, index) => (
            <div key={index} className="w-[80%] md:basis-[30%]">
              <div className="relative h-[350px] lg:h-[500px] flex items-end p-0 m-0 rounded-b-full">
                <div
                  className={`h-[280px] lg:h-[350px] w-full ${tutor.color} rounded-b-full`}
                />
                <Image
                  src={tutor.image}
                  width={500}
                  height={500}
                  alt={tutor.name}
                  className="absolute bottom-0 w-full rounded-b-full object-cover"
                />
                <Link
                  href={tutor.linkedin}
                  className="absolute -bottom-10 -right-10 lg:-right-5 lg:-bottom-5"
                >
                  <Image
                    src="/icon/linkedin.svg"
                    width={100}
                    height={100}
                    alt="linkedin"
                    className="w-28"
                  />
                </Link>
              </div>
              <div className="pt-5 text-center">
                <p className="text-xl font-semibold">{tutor.name}</p>
                <p className="font-medium pt-2">{tutor.role}</p>
                <p className="text-xs text-foreground/60">{tutor.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tutors