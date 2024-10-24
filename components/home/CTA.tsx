import React from 'react'

const CTA = () => {
  return (
    <section className="bg-[url('/bg/cta.png')]">
      <div className="w-full max-w-6xl mx-auto p-7">
        <div className="text-background w-full md:w-[80%] lg:w-[70%] my-20">
          <h2 className="text-2xl md:text-4xl font-medium leading-snug">
            Join the Newton Academy Tech Revolution Today!
          </h2>
          <p className="my-5 text-sm md:text-base">
            We are on a mission to raise top techies for the world. Whether you
            want to build a tech career, learn in-demand skills, upgrade, or
            switch careers, Newton Academy is here for you! We can&apos;t wait
            to start this journey with you. Apply now and let the adventure
            begin!
          </p>
          <div className="flex items-center gap-12">
            <button className="bg-gradient rounded-full text-sm text-background py-3 px-6">
              Join Now
            </button>
            <button className="border border-background rounded-full text-sm text-background py-3 px-6">
              Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA