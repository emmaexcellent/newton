import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="w-full bg-[#FFFFC3] pt-20 sm:pt-24 md:pt-28 md:pb-0">
        <div className="relative max-w-6xl w-full mx-auto py-9 px-5 overflow-hidden">
          <div className="relative max-w-[850px]">
            <Image
              src="/icon/dot1.svg"
              width={180}
              height={150}
              alt="orange dot box"
              priority
              className="absolute -top-5 -right-28"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug lg:text-7xl lg:leading-snug font-semibold capitalize">
              Learn in-demand tech skills,{" "}
              <span className="text-gradient">build your future</span>
            </h1>
            <div className="w-full md:w-[70%] relative mt-2">
              <Image
                src="/icon/line1.svg"
                width={120}
                height={25}
                alt="design line 1"
                priority
                className="absolute -top-4 right-2"
              />
              <p className="text-base sm:text-lg font-medium">
                Get trained by global industry leaders and go from beginner to
                pro in record time, Newton Academy prepares you for global
                opportunities in tech.
              </p>
            </div>
            <div className="flex items-center gap-5 mt-6">
              <button className="bg-gradient rounded-full text-sm text-background py-3 px-6">
                Apply Now
              </button>
              <button className="bg-gradient p-0.5 rounded-full">
                <span className="w-full h-full inline-flex gap-1.5 items-center bg-[#FFFFC3]  rounded-full py-2 px-5">
                  <Image
                    src="/icon/play.svg"
                    width={35}
                    height={35}
                    alt="Watch"
                    priority
                    className="w-5"
                  />
                  <span className="text-gradient">Watch</span>
                </span>
              </button>
            </div>
          </div>
          <div className="mt-8 md:mt-12">
            <p className="font-semibold">Join other Newton Learners</p>
            <ul className="flex items-center gap-0 pt-1">
              <li className="h-10 w-10 sm:h-12 sm:w-12 flex justify-center items-center p-1 bg-foreground rounded-full text-background">
                <p className="text-xs">120+</p>
              </li>
              {[
                "/images/pic/p1.png",
                "/images/pic/p2.png",
                "/images/pic/p3.png",
                "/images/pic/p4.png",
              ].map((img, index) => (
                <li key={index}>
                  <Image
                    src={img}
                    width={30}
                    height={30}
                    alt="pictures"
                    priority
                    className="h-10 sm:h-12 w-10 sm:w-12 rounded-full object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex -ml-20 md:ml-0 lg:justify-end">
            <Image
              src="/bg/1.svg"
              width={1000}
              height={200}
              alt="bg gradient"
              priority
              className="mt-20 md:-mt-5 lg:-mt-20 h-96"
            />
          </div>
          <div className="absolute -right-36 md:-right-24 lg:right-5 top-[50%] md:top-[35%] xl:top-[32%]">
            <Image
              src="/icon/arr.svg"
              width={100}
              height={30}
              alt="design arrow"
              priority
              className="absolute w-24 -left-24 xl:-left-32 top-[25%] lg:top-[10%]"
            />
            <Image
              src="/icon/line2.svg"
              width={100}
              height={30}
              alt="design arrow"
              priority
              className="absolute w-32 -left-[200px] lg:-left-[340px] xl:-left-96 bottom-[50%] lg:bottom-[55%]"
            />
            <Image
              src="/images/hero1.svg"
              width={600}
              height={300}
              alt="a person wearing high tech glass"
              priority
            />
            <Image
              src="/icon/boxdot1.svg"
              width={230}
              height={180}
              alt="design box dot"
              priority
              className="absolute sm:28 sm:w-32 md:w-40 top-0 right-12"
            />
            <div className="absolute bottom-[35%] left-0 md:-left-40 flex items-center px-7 py-3 rounded-xl bg-background gap-5">
              <p className="text-sm md:text-lg">100% verified certification</p>
              <Image
                src="/icon/ntcheck.svg"
                width={50}
                height={50}
                alt="newton check"
                className="w-7 md:w-12"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="-mt-[200px] md:-mt-[350px] lg:-mt-[500px] xl:-mt-[650px] absolute top-0 z-20">
          <Image
            src="/bg/roundwhite.svg"
            width={650}
            height={400}
            alt=""
            className="w-full h-auto "
            priority
          />
          <div className="w-full flex items-center justify-center gap-12 -mt-16 lg:-mt-20 flex-nowrap overflow-hidden py-10 md:py-5">
            {[
              "/brand/1.png",
              "/brand/2.png",
              "/brand/3.png",
              "/brand/4.png",
              "/brand/1.png",
            ].map((img, index) => (
              <Image
                key={img + index}
                src={img}
                width={120}
                height={50}
                alt=""
                priority
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero