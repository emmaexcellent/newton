import React from 'react'
import Image from "next/image"

const enrolSteps = [
  {
    id: 1,
    title: "Application",
    desc: "Candidates apply to the Newton Academy Program",
  },
  {
    id: 2,
    title: "Logic Test And Interview",
    desc: "Eligible candidates will take an online logical reasoning test to ensure they meet the program's requirements and objectives.",
  },
  {
    id: 3,
    title: "Sucessful Candidates",
    desc: "Will be offered admission into the decagon program and can go on to make payment",
  },
  {
    id: 4,
    title: "Schorlarship",
    desc: "Scholarship: Eligible candidates can apply for full/part scholarships here",
  },
];

const HowToApply = () => {
  return (
    <section className="relative w-full py-3 sm:py-10 md:py-20 pb-32">
      <Image
        src="/icon/boxdot1.svg"
        width={180}
        height={100}
        alt="design box dot"
        priority
        className="absolute w-32 md:w-40 bottom-[5%] -left-0"
      />
      <div className="w-full max-w-6xl mx-auto p-7">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="w-full md:w-[500px]">
            <h2 className="text-3xl md:text-5xl font-medium">How To Enrol</h2>
            <p className="text-foreground/60 pt-5">
              We carefully sift through submissions, ready to spot the next big
              tech talent with a passion for building their careers
            </p>
          </div>
          <button className="bg-gradient rounded-full text-background py-3 px-7 mt-10 ml-5 text-lg">
            Apply Now
          </button>
        </div>
        <div className="w-full lg:w-[900px] mx-auto relative mt-12">
          <Image
            src="/bg/sline.svg"
            width={900}
            height={700}
            alt="bg s line"
            className="w-full h-[1000px] md:w-[600px] lg:w-[700px] md:h-auto mx-auto object-cover"
          />
          <div className="absolute inset-0 top-0 w-full grid grid-cols-1 md:grid-cols-2 items-end gap-x-10 gap-y-20 justify-between">
            {enrolSteps.map((step) => (
              <div
                key={step.id}
                className="border rounded-xl bg-[#F8F8F8] p-7 w-[300px] space-y-4 shadow-xl"
              >
                <div className="rounded-lg w-16 h-16 flex items-center justify-center bg-[#FFD600]">
                  <span className="text-4xl font-medium text-background">
                    {step.id}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-lg  font-semibold">{step.title}</p>
                  <p className="text-foreground/60 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToApply