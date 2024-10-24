"use client"
import React, { useState } from 'react'
import Image from "next/image"

const faqSections = [
  {
    id: 1,
    qAnda: [
      {
        ques: "What is Newton Academy",
        ans: "Newton Academy is tech talent development firm that provides support for individuals to build thriving careers in tech. Through our online learning platform and AI talent marketplace, we help anyone interested in tech to learn and get mentored by global industry leaders and access the support and resources they need to become competent tech leaders",
      },
      {
        ques: "What kind of training programs does Newton Academy offer?",
        ans: "We offer a wide range of training programs which can be found here.",
      },
      {
        ques: "Who can enrol in our training programs?",
        ans: "Our training programs are open to anyone interested in developing their skills in the tech industry. Whether you’re a beginner with no prior experience or an experienced professional looking to enhance your knowledge, we have programs tailored to different skill levels.",
      },
      {
        ques: "Are training programs online or in-person?",
        ans: "All classes will be held online via our Learning and Management System (LMS) and live through our virtual classrooms",
      },
      {
        ques: "What is online training program going to be like?",
        ans: "On enrollment, each student gets access to a personalized dashboard on our LMS. All interactions with the tutors will be had via the virtual classroom and online school.",
      },
    ],
  },
  {
    id: 2,
    qAnda: [
      {
        ques: "How can Newton Academy help",
        ans: "Newton Academy is tech talent development firm that provides support for individuals to build thriving careers in tech. Through our online learning platform and AI talent marketplace, we help anyone interested in tech to learn and get mentored by global industry leaders and access the support and resources they need to become competent tech leaders",
      },
      {
        ques: "What kind of training programs does Newton Academy offer?",
        ans: "We offer a wide range of training programs which can be found here.",
      },
      {
        ques: "Who can enrol in our training programs?",
        ans: "Our training programs are open to anyone interested in developing their skills in the tech industry. Whether you’re a beginner with no prior experience or an experienced professional looking to enhance your knowledge, we have programs tailored to different skill levels.",
      },
      {
        ques: "Are training programs online or in-person?",
        ans: "All classes will be held online via our Learning and Management System (LMS) and live through our virtual classrooms",
      },
      {
        ques: "What is online training program going to be like?",
        ans: "On enrollment, each student gets access to a personalized dashboard on our LMS. All interactions with the tutors will be had via the virtual classroom and online school.",
      },
    ],
  },
  {
    id: 3,
    qAnda: [
      {
        ques: "Can i make money with Newton Academy",
        ans: "Newton Academy is tech talent development firm that provides support for individuals to build thriving careers in tech. Through our online learning platform and AI talent marketplace, we help anyone interested in tech to learn and get mentored by global industry leaders and access the support and resources they need to become competent tech leaders",
      },
      {
        ques: "What kind of training programs does Newton Academy offer?",
        ans: "We offer a wide range of training programs which can be found here.",
      },
      {
        ques: "Who can enrol in our training programs?",
        ans: "Our training programs are open to anyone interested in developing their skills in the tech industry. Whether you’re a beginner with no prior experience or an experienced professional looking to enhance your knowledge, we have programs tailored to different skill levels.",
      },
      {
        ques: "Are training programs online or in-person?",
        ans: "All classes will be held online via our Learning and Management System (LMS) and live through our virtual classrooms",
      },
      {
        ques: "What is online training program going to be like?",
        ans: "On enrollment, each student gets access to a personalized dashboard on our LMS. All interactions with the tutors will be had via the virtual classroom and online school.",
      },
    ],
  },
  {
    id: 4,
    qAnda: [
      {
        ques: "What is Newton Academy",
        ans: "Newton Academy is tech talent development firm that provides support for individuals to build thriving careers in tech. Through our online learning platform and AI talent marketplace, we help anyone interested in tech to learn and get mentored by global industry leaders and access the support and resources they need to become competent tech leaders",
      },
      {
        ques: "What kind of training programs does Newton Academy offer?",
        ans: "We offer a wide range of training programs which can be found here.",
      },
      {
        ques: "Who can enrol in our training programs?",
        ans: "Our training programs are open to anyone interested in developing their skills in the tech industry. Whether you’re a beginner with no prior experience or an experienced professional looking to enhance your knowledge, we have programs tailored to different skill levels.",
      },
      {
        ques: "Are training programs online or in-person?",
        ans: "All classes will be held online via our Learning and Management System (LMS) and live through our virtual classrooms",
      },
      {
        ques: "What is online training program going to be like?",
        ans: "On enrollment, each student gets access to a personalized dashboard on our LMS. All interactions with the tutors will be had via the virtual classroom and online school.",
      },
    ],
  },
  {
    id: 5,
    qAnda: [
      {
        ques: "What is Newton Academy",
        ans: "Newton Academy is tech talent development firm that provides support for individuals to build thriving careers in tech. Through our online learning platform and AI talent marketplace, we help anyone interested in tech to learn and get mentored by global industry leaders and access the support and resources they need to become competent tech leaders",
      },
      {
        ques: "What kind of training programs does Newton Academy offer?",
        ans: "We offer a wide range of training programs which can be found here.",
      },
      {
        ques: "Who can enrol in our training programs?",
        ans: "Our training programs are open to anyone interested in developing their skills in the tech industry. Whether you’re a beginner with no prior experience or an experienced professional looking to enhance your knowledge, we have programs tailored to different skill levels.",
      },
      {
        ques: "Are training programs online or in-person?",
        ans: "All classes will be held online via our Learning and Management System (LMS) and live through our virtual classrooms",
      },
      {
        ques: "What is online training program going to be like?",
        ans: "On enrollment, each student gets access to a personalized dashboard on our LMS. All interactions with the tutors will be had via the virtual classroom and online school.",
      },
    ],
  },
];

const FAQ: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<number>(1);
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

  const toggleQuestion = (index: number) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null); 
    } else {
      setOpenQuestionIndex(index);
    }
  };

  return (
    <section className="relative w-full py-12">
      <Image
        src="/bg/line.svg"
        width={800}
        height={600}
        alt="bg line"
        className="absolute top-1/2 w-full h-auto object-center"
        priority
      />
      <div className="w-full max-w-6xl p-7">
        <h2 className="text-3xl font-semibold md:text-5xl md:font-medium text-center">
          <span className="text-primary">Frequently</span> Asked Questions
        </h2>
        <div className="w-full flex flex-col md:flex-row items-start gap-10 mt-12">
          <div className="w-full md:w-[250px] bg-[#E6F3F3] py-3 md:py-7 px-5 rounded-xl md:flex flex-row md:flex-col flex-nowrap overflow-x-auto items-center justify-center gap-3 hidden">
            {faqSections.map((section) => (
              <button
                key={section.id}
                className={`py-3 px-5 border rounded-lg border-primary text-nowrap ${
                  selectedSection === section.id
                    ? "bg-primary text-white"
                    : "hover:bg-primary text-primary hover:text-white"
                } font-medium`}
                onClick={() => setSelectedSection(section.id)}
              >
                Section {section.id}
              </button>
            ))}
          </div>
          <div className="w-full">
            {selectedSection !== null && (
              <div className="w-full">
                {faqSections
                  .find((section) => section.id === selectedSection)
                  ?.qAnda.map((qa, index) => (
                    <div
                      key={index}
                      className="border-b mb-4 p-5 bg-[#F8F8F8] rounded-xl"
                    >
                      <button
                        className="text-lg font-semibold py-2 w-full text-left flex justify-between items-center "
                        onClick={() => toggleQuestion(index)}
                      >
                        {qa.ques}
                        <span>{openQuestionIndex === index ? "x" : "+"}</span>
                      </button>
                      {openQuestionIndex === index && (
                        <p className="text-sm text-gray-700 bg-[#F8F8F8] py-2">
                          {qa.ans}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;