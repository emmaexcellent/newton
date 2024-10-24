import React from 'react'
import Image from "next/image"
import Link  from "next/link"
import { Download } from 'lucide-react';

const pageLinks = [
  {
    title: "About Us",
    href: "#"
  },
  {
    title: "Partners",
    href: "#"
  },
  {
    title: "Careers",
    href: "#"
  },
  {
    title: "Lecturers",
    href: "#"
  },
  {
    title: "FAQS",
    href: "#"
  },
  {
    title: "Artist",
    href: "#"
  },
  {
    title: "Privacy Policy",
    href: "#"
  },
]

const courses = [
  {
    title: "Data Science",
    href: "#",
  },
  {
    title: "Digital Marketing",
    href: "#",
  },
  {
    title: "full stack developement",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: "/icon/fb.svg",
    href: "#",
  },
  {
    icon: "/icon/x.svg",
    href: "#",
  },
  {
    icon: "/icon/lin.svg",
    href: "#",
  },
  {
    icon: "/icon/tg.svg",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gradient pt-16 pb-10">
      <div className="w-full max-w-6xl mx-auto p-7 grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 text-white/80">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-between gap-10 md:gap-20 lg:gap-10">
          <div className="space-y-3">
            <Image
              src="/flogo.svg"
              width={450}
              height={300}
              alt="Newton academy"
              className="w-64"
            />
            <p>
              Build software and participate in the full life cycle of products
            </p>
            <p className="text-sm hidden lg:block">
              ALL RIGHT RESERVED COPYRIGHT 2024
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-background pb-3 md:text-nowrap">
              Newton Academy{" "}
            </h4>
            <ul className="space-y-2">
              {pageLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-between gap-10 md:gap-20 lg:gap-10">
          <div>
            <h4 className="text-xl font-semibold text-background pb-3 md:text-nowrap">
              Avalailable Courses
            </h4>
            <ul className="space-y-2">
              {courses.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-background pb-3 md:text-nowrap">
              Follow Us
            </h4>
            <ul className="flex items-center gap-4 my-5">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <Image
                      src={link.icon}
                      width={20}
                      height={20}
                      alt="social handle"
                      className="w-7"
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-background pb-3">
              Download Our brochoure
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <p className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">
                  <Download size={15} />
                </p>
                <p>DSDP Brochure</p>
              </li>
              <li className="flex items-center gap-2">
                <p className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">
                  <Download size={15} />
                </p>
                <p>Diploma Brochure</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-sm text-center lg:hidden m-10 text-white">ALL RIGHT RESERVED COPYRIGHT 2024</p>
    </footer>
  ); 
}

export default Footer