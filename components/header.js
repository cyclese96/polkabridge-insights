import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header>
      <div className="flex flex-wrap items-center lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center flex-grow">
          <Image
            src="/Logo.png"
            height={40}
            width={120}            
            alt="logo"
          />
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto gap-6",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "Home", route: "/home" },
            { title: "Connect", route: "/connect" },
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 border-0 border-b-2 border-pink-500" key={title}>
              <Link href={route}>
                <a className="block text-white">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button className="rounded-sm py-1 px-6 bg-gradient-to-r from-pink-300 to-pink-500 md:ml-6">Write and Earn</button>
      </div>
    </header>
  );
}
