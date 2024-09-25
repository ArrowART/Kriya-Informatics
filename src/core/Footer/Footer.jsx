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
        <div className="  lg:flex   lg:flex-wrap flex flex-wrap lg:gap-5 lg:justify-around md:justify-around">
          <div className="mb-6 md:mb-0">
            <h2 className="mb-3 font-bold text-lg text-white uppercase underline">Contact</h2>


            <div className="flex items-center text-white font-semibold gap-4 mb-1  list-disc">
              <img className='w-7' src='/Images/Envelope (1).png' alt='location ' />
              <a href='mailto:' className='hover:underline'>hr@kriyainformatics.com</a>
            </div>

            <div className="flex items-center font-semibold text-white gap-4 list-disc">
              <img className='w-7' src='/Images/Ringer Volume (1).png' alt='location ' />
              <a className='hover:underline' onClick={scrollToTop}  ><h1>6381140147, 8610191396 </h1></a>
            </div>
          </div>
          <div className=' text-white lg:text-center'>
            <h2 className="mb-3 font-bold text-lg uppercase underline">Quick Links </h2>
            <ul className="font-semibold">
              <li className="">
                <Link to="/" onClick={scrollToTop} className="hover:underline">Home</Link>
              </li>
              <li className="">
                <Link to="/AboutUs" onClick={scrollToTop} className="hover:underline">About Us</Link>
              </li>
              <li className="">
                <a href='#service' onClick={scrollToTop} className="hover:underline">
                  Services
                </a>
              </li>
              <li className="">
                <Link to="/ContactUs" onClick={scrollToTop} className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='lg:text-right lg:mt-0 md:mt-0 mt-5'>
            <h2 className="mb-3 font-bold text-lg text-white uppercase underline ">Our Services</h2>
            <ul className=" dark:text-gray-400 font-semibold ">
              <li><Link to="/ResearchArticleProposal" onClick={scrollToTop} className="hover:underline mb-2  text-white">Research Article Proposal</Link></li>
              <li><Link to="/ResearchArticleWriting" onClick={scrollToTop} className="hover:underline mb-2 text-white">Research Article Writing</Link></li>
              <li><Link to="/SynopsisandThesisWriting" onClick={scrollToTop} className="hover:underline mb-2 text-white">Synopsis and Thesis Writing</Link></li>
              <li><Link to="/AcademicBookPublication" onClick={scrollToTop} className="hover:underline mb-2 text-white">Academic Book Publication</Link></li>
              <li><Link to="/InternationalConferenceOrganizing" onClick={scrollToTop} className="hover:underline mb-2 text-white">International Conference Organizing</Link></li>
            </ul>
          </div>

        </div>
        <hr className="my-3 md:my-6 border-gray-200 sm:mx-auto lg:my-4" />
        <div className=" font-semibold text-white lg:px-12 px-5  ">
            <h1 className='text-center mb-3 font-bold text-lg text-white uppercase underline '> Address</h1>
          <div className='flex items-center justify-center gap-4'>

            <img className='w-7' src='/Images/Location (1).png' alt='location ' />
            <a className='hover:underline'   ><h1 className=''>215B, Sargunaveedhi, Ramavarmapuram, Nagercoil, Kanyakumari District - 629001.
             <br/> Landmark: Near Sudalaimadasamy Koil </h1></a>
          </div>
        </div>
        <hr className="my-3 md:my-6 border-gray-200 sm:mx-auto lg:my-4" />
        <div className="  flex flex-wrap gap-2 justify-center">
          <div className=" text-white ">© 2024 <Link to="/" className="hover:underline">Kriya Informatics</Link>.
          </div>
          <div className='text-white'>
            Website Designed By<a href='http://arrowthought.com/' target='_blank'><span className='underline'> Arrow Thought.</span></a>
          </div>
        </div>
      </div>
      <div className='relative'><a href="https://ijacser.com/ijacser/index.php/ijacser/about/submissions"><img src="logo/ojs_brand.png" alt="" className='drop-shadow-[] h-16 absolute right-5 md:right-24 bottom-20 md:bottom-2 2xl:right-[400px]' /></a></div>
    </footer>
  );
}

