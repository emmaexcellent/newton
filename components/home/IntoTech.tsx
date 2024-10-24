import React from 'react'
import Image from "next/image"

const benefits = [
  {
    title: "Access resources to skyrocket your career",
    desc: "Our training provides learning support and chances to win devices - laptop, smartphone, and mifi.",
  },
  {
    title: "Learn and pay your own pace",
    desc: "Perfect for career professionals, students, and NYSC Corp Members.Fitting into your schedule (10 hours/week) and budget with easy installment payments.",
  },
  {
    title: "Learn and pay your own pace",
    desc: "Perfect for career professionals, students, and NYSC Corp Members.Fitting into your schedule (10 hours/week) and budget with easy installment payments.",
  },
  {
    title: "Learn skills to skyrocket your tech career",
    desc: "Our training empowers you with entrepreneurship, communication, AI usage, and essential soft skills.",
  },
  {
    title: "Industry relevant practical training from global tutors",
    desc: "Learn key skills sought by recruiters. Say NO! to irrelevant theories, and YES! to hands-on expertise",
  },
];

const IntoTech = () => {
  return (
    <section className="relative w-full my-16 md:my-24">
      <Image
        src="/icon/boxdot1.svg"
        width={200}
        height={120}
        alt="design box dot"
        priority
        className="absolute w-32 md:w-40 top-0 right-5"
      />
      <div className="w-full max-w-6xl mx-auto p-7">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="relative">
            <div className='bg-[url("/bg/dottedround.png")] bg-no-repeat bg-contain bg-center p-10 flex justify-center items-center'>
              <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-[#FFD600]" />
            </div>
            <Image
              src="/images/laptopgirl.png"
              width={500}
              height={600}
              alt="laptop girl learning from newton"
              priority
              className="w-full h-auto md:h-[800px] lg:h-auto absolute -top-20 right-0"
            />
          </div>
          <div className="order-first lg:order-last">
            <h2 className="text-3xl md:text-4xl md:leading-snug xl:text-5xl md:font-medium font-semibold xl:leading-snug">
              Breaking into{" "}
              <span className="text-primary"> tech is seamless and fun </span>
              with Newton Academy
            </h2>
            <div className="space-y-3 my-5">
              {benefits.map((ben, index) => (
                <div key={index} className="flex items-center gap-5">
                  <Image
                    src="/icon/ntcheck.svg"
                    width={50}
                    height={50}
                    alt="newton check list"
                  />
                  <div className="space-y-1">
                    <p className="text-sm md:text-base font-semibold">{ben.title}</p>
                    <p className="text-sx md:text-sm">{ben.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntoTech