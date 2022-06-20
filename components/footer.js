import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export default function Footer() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <footer>
      <div className="mx-8">
        <div className="flex flex-wrap items-center lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
          <div className="flex flex-grow space-x-24">
            <div className="grid gap-4 flex-grow">
              <img
                src="/Logo.png"
                height={40}
                width={120}
                alt="logo"
              />
              <span className="block text-white">Connect With PolkaBridge</span>
              <div className="flex space-x-8">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 1.03813C22.0424 1.71361 20.9821 2.23024 19.86 2.56813C19.2577 1.87564 18.4573 1.38482 17.567 1.16206C16.6767 0.939292 15.7395 0.995328 14.8821 1.32259C14.0247 1.64984 13.2884 2.23253 12.773 2.99185C12.2575 3.75116 11.9877 4.65047 12 5.56813V6.56813C10.2426 6.6137 8.50127 6.22394 6.93101 5.43358C5.36074 4.64321 4.01032 3.47677 3 2.03813C3 2.03813 -1 11.0381 8 15.0381C5.94053 16.4361 3.48716 17.1371 1 17.0381C10 22.0381 21 17.0381 21 5.53813C20.9991 5.25959 20.9723 4.98173 20.92 4.70813C21.9406 3.70163 22.6608 2.43084 23 1.03813V1.03813Z" stroke="#DCDCDC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#DCDCDC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z" stroke="#DCDCDC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 6.5H17.51" stroke="#DCDCDC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="#DCDCDC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 9H2V21H6V9Z" stroke="#DCDCDC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#DCDCDC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="grid gap-4">
              <span className="text-white text-xl block">Category</span>
              <span className="text-white block">PolkaBridge Finance</span>
              <span className="text-white block">Crypto Basics</span>
              <span className="text-white block">Ecosystem</span>
              <span className="text-white block">Crypto Knowledge</span>
              <span className="text-white">More Category</span>
            </div>
            <div className="grid gap-4">
              <span className="text-white text-xl block">About Me</span>
              <span className="text-white block">About Me</span>
              <span className="text-white block">Projects</span>
              <span className="text-white block">Achievement</span>
            </div>
            <div className="grid gap-4">
              <span className="text-white text-xl block">Get in touch</span>
              <span className="text-white block">+62-8XXX-XXX-XX</span>
              <span className="text-white block">demo@gmail.com</span>
            </div>
            <div className="grid gap-4">
              <span className="text-white text-xl block">Follow Us</span>
              <span className="text-white block">Medium</span>
              <span className="text-white block">Instagram</span>
              <span className="text-white block">Twitter</span>
              <span className="text-white block">Facebook</span>
            </div>
          </div>
          <div className="mt-4 w-full">
            <div className="border flex-grow border-gray-800"></div>
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
        </div>
        <div className="flex justify-between items-center mx-8 mb-4">
          <div>
            <span className="text-white">
              © 2022 PolkaBridge
            </span>
          </div>
          <div>
            <span className="text-white text-right">
              All Right Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
