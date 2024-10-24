import AcademyGuide from "@/components/home/AcademyGuide";
import Hero from "@/components/home/Hero";
import TechLeaderAction from "@/components/home/TechLeaderAction";
import DiplomaPrograms from "@/components/home/DiplomaPrograms";
import NewtonTech from "@/components/home/NewtonTech";
import SkillProgram from "@/components/home/SkillProgram";
import Testimonial from "@/components/home/Testimonial";
import IntoTech from "@/components/home/IntoTech";
import Tutors from "@/components/home/Tutors";
import WhyNewton from "@/components/home/WhyNewton";
import HowToApply from "@/components/home/HowToApply";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <AcademyGuide />
      <TechLeaderAction />
      <DiplomaPrograms />
      <NewtonTech />
      <SkillProgram />
      <Testimonial />
      <IntoTech />
      <Tutors />
      <WhyNewton />
      <HowToApply />
      <FAQ />
      <CTA />
      <Newsletter />
    </main>
  );
}
