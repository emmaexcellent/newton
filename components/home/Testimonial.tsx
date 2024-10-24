import React from 'react'
import Image from "next/image"

const testimonials = [
  {
    rating: 5,
    review:
      "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
    reviewer: {
      image: "/images/testimonial/1.png",
      name: "Bana Bernier",
      role: "Senior Paradigm Strategist",
    },
  },
  {
    rating: 3,
    review:
      "I like Infinity Estate more and more each day because it makes my life a lot easier. We can't understand how we've been living without Infinity Estate. Infinity Estate has got everything I need. The service was excellent.",
    reviewer: {
      image: "/images/testimonial/2.png",
      name: "Mrs Van Hartmann",
      role: "Legacy Usability Manager",
    },
  },
  {
    rating: 4,
    review:
      "You've saved our business! Infinity Estate has got everything I need. We were treated like royalty. It's really wonderful.",
    reviewer: {
      image: "/images/testimonial/3.png",
      name: "Philip Deckow",
      role: "District Assurance Officer",
    },
  },
  {
    rating: 4,
    review:
      "I like Infinity Estate more and more each day because it makes my life a lot easier. We can't understand how we've been living without Infinity Estate. Infinity Estate has got everything I need. The service was excellent.",
    reviewer: {
      image: "/images/testimonial/1.png",
      name: "Mrs Van Hartmann",
      role: "Legacy Usability Manager",
    },
  },
];

const Testimonial = () => {
  return (
    <section className="relative w-full bg-[#F8F8F8] py-20 md:py-24 lg:py-36">
      <div className="w-full max-w-6xl mx-auto p-7 overflow-hidden">
        <div className="w-full md:w-[500px] lg:w-[750px] space-y-4 mx-auto">
          <p className="uppercase text-primary md:text-2xl text-center">
            testimonial
          </p>
          <h2 className="text-center text-2xl md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug md:font-medium font-semibold">
            What Newton Tech Leaders are saying about us
          </h2>
        </div>
        <div className="mt-12 flex flex-nowrap overflow-hidden items-center justify-between gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border shadow-lg basis-[85%] sm:basis-[75%] md:basis-[45%] lg:basis-[30%] shrink-0 p-5 py-7 space-y-5 h-[350px] flex flex-col justify-center"
            >
              <div className="flex items-center gap-0">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Image
                    key={index}
                    src="/icon/star.svg"
                    width={5}
                    height={5}
                    alt="star"
                    className="w-5"
                  />
                ))}
              </div>
              <p className="line-clamp-5">{testimonial.review}</p>
              <div className="flex items-center gap-3 pt-10">
                <Image
                  src={testimonial.reviewer.image}
                  width={70}
                  height={70}
                  alt={testimonial.reviewer.name}
                  className="rounded-full w-216 h-16 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.reviewer.name}</p>
                  <p className="text-xs">{testimonial.reviewer.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/bg/topwave.svg"
        width={1000}
        height={400}
        alt="wave"
        className="w-full absolute bottom-0 priority"
      />
    </section>
  );
}

export default Testimonial