import React from 'react'
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  {
    title: "Diploma Programs",
    href: "#",
  },
  {
    title: "Certificate Programs",
    href: "#",
  },
  {
    title: "Tuition",
    href: "#",
  },
  {
    title: "Partners",
    href: "#"
  },
  {
    title: "Careers",
    href: "#"
  }
];

const NavLinks = ({ setOpenMenu }: { setOpenMenu : React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <nav className="flex flex-col lg:flex-row items-center gap-12 text-sm">
      <ul className="flex flex-col lg:flex-row items-center gap-5 font-normal">
        <Link
          href="/"
          className="lg:hidden pt-10"
          onClick={() => setOpenMenu(false)}
        >
          <Image
            src="/logo.svg"
            width={120}
            height={40}
            alt="Newton Academy"
            priority
          />
        </Link>

        {navLinks.map((nav) => (
          <li
            key={nav.title}
            className="hover:text-primary font-medium"
            onClick={() => setOpenMenu(false)}
          >
            <Link href={nav.href}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col lg:flex-row items-center gap-5 font-medium">
        <li className="hover:text-primary" onClick={() => setOpenMenu(false)}>
          <Link href="#">Login</Link>
        </li>
        <li onClick={() => setOpenMenu(false)} className="hidden lg:block">
          <Link href="#">
            <button className="bg-gradient text rounded-full text-background py-3 px-6 text-sm">
              Apply Now
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks