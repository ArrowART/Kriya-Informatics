import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropupCircle } from "react-icons/io";


export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-dark-green bg-[#0B4671]   text-primary-white">
      <div className="mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8">
        <div className="  lg:flex   lg:flex-wrap flex flex-wrap gap-5 lg:justify-around md:justify-around">
          <div className="mb-6 md:mb-0">
            <Link to="" onClick={scrollToTop} className=" items-center  gap-2 inline-block">
              <img className="drop-shadow h-12 " src="logo/logo.png" alt="" />
              {/* <span className="self-center text-3xl font-semibold whitespace-nowrap">IJACSER</span> */}
            </Link>
            <div className="flex items-center text-white font-semibold gap-4 mb-2  list-disc">
              <img className='w-7' src='/Images/Envelope (1).png' alt='location ' />
              <a href='mailto:' className='hover:underline'>hr@kriyainformatics.com</a>
            </div>
            <div className="flex items-center font-semibold text-white gap-4 list-disc">
              <img className='w-7' src='/Images/Location (1).png' alt='location ' />
              <a  className='hover:underline' onClick={scrollToTop}  ><h1>Nagercoil, India </h1></a>
            </div>
            <div className="flex items-center font-semibold text-white gap-4 list-disc">
              <img className='w-7' src='/Images/Ringer Volume (1).png' alt='location ' />
              <a  className='hover:underline' onClick={scrollToTop}  ><h1>xxxxxxxxxx </h1></a>
            </div>

          </div>

          <div className=' text-white lg:text-center'>
            <h2 className="mb-3 font-bold text-lg uppercase underline">Quick Links </h2>
            <ul className="font-semibold">
              <li className="">
                <Link to="/" onClick={scrollToTop} className="hover:underline">Home</Link>
              </li>
              <li className="">
                <Link to="/about" onClick={scrollToTop} className="hover:underline">About Us</Link>
              </li>
              <li className="">
                <a href='#service' onClick={scrollToTop} className="hover:underline">
                  Services
                </a>
              </li>
              <li className="">
                <Link to="/contact" onClick={scrollToTop} className="hover:underline">Contact Us</Link>
              </li>

            </ul>
          </div>
          <div className='lg:text-right'>
            <h2 className="mb-3 font-bold text-lg text-white uppercase underline ">Our Services</h2>
            <ul className=" dark:text-gray-400 font-semibold ">
              <li><Link to="/research" onClick={scrollToTop} className="hover:underline mb-2  text-white">Research Article Proposal</Link></li>
              <li><Link to="/writing" onClick={scrollToTop} className="hover:underline mb-2 text-white">Research Article Writing</Link></li>
              <li><Link to="/synopsis" onClick={scrollToTop} className="hover:underline mb-2 text-white">Synopsis and Thesis Writing</Link></li>
              <li><Link to="/book" onClick={scrollToTop} className="hover:underline mb-2 text-white">Academic Book Publication</Link></li>
              <li><Link to="/conference" onClick={scrollToTop} className="hover:underline mb-2 text-white">International Conference Organizing</Link></li>
              {/* <li><Link to="#" onClick={scrollToTop}  className="hover:underline mb-2">Journal Reports</Link></li> */}
            </ul>

            {/* <div >
              <h2 className="mb-6 font-semibold  uppercase ">Special Issues</h2>
              <ul className=" font-medium">
                <li><Link to="#" className="hover:underline mb-2">Published Special Issues</Link></li>
                <li><Link to="#" className="hover:underline mb-2">Propose Special Issue</Link></li>
                <li><Link to="#" className="hover:underline mb-2">About Special Issues</Link></li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className='relative'>
          <IoIosArrowDropupCircle onClick={scrollToTop} className=' text-blue-200 text-4xl cursor-pointer absolute right-0 bottom-28 md:-bottom-20 xl:-bottom-24 lg:mt-32 brightness-75 hover:brightness-150 duration-200 ease-out' />

        </div>

        <hr className="my-3 md:my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className=" text-center">
          <span className="text-sm  text-white sm:text-center">© 2024 <Link to="/" className="hover:underline">Kriya Informatics</Link>. All Rights Reserved.
          </span>

        </div>
      </div>
      <div className='relative'><a href="https://ijacser.com/ijacser/index.php/ijacser/about/submissions"><img src="logo/ojs_brand.png" alt="" className='drop-shadow-[] h-16 absolute right-5 md:right-24 bottom-20 md:bottom-2 2xl:right-[400px]' /></a></div>
    </footer>


  );
}