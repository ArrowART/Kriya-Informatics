import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const collapseMenu = document.getElementById('collapseMenu');
    const links = collapseMenu.getElementsByTagName('a');

    const handleLinkClick = (event) => {
      const href = event.target.getAttribute('href');
      if (href.startsWith('#')) {
        event.preventDefault();
        const elementId = href.slice(1);
        document.getElementById(elementId).scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    };

    for (let link of links) {
      link.addEventListener('click', handleLinkClick);
    }
    return () => {
      for (let link of links) {
        link.removeEventListener('click', handleLinkClick);
      }
    };
  }, []);

  return (

    <header className='flex border-b border-1 bg-white min-h-[70px] tracking-wide relative z-50 sticky top-0'>
      <div className='relative flex flex-wrap items-center justify-around w-full gap-6 px-10 py-3'>
        <a href="/"><img src="/Images/Kriya Informatics.png" alt="logo" className='w-36' />
        </a>

        <div id="collapseMenu"
          className={`lg:flex ${menuOpen ? 'block' : 'hidden'} max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto`}
        >
          <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3' onClick={handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            className='lg:flex lg:ml-10 lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='px-3 max-lg:border-b max-lg:pb-4 lg:hidden'>
              <Link to="/"><img src="/Images/Kriya Informatics.png" alt="logo" className='w-36' />
              </Link>
            </li>
            <li className='max-lg:border-b max-lg:px-3 max-lg:py-2'>
              <Link to='/' onClick={scrollToTop}
                className='hover:text-[#007bff] text-[#0B4671]  font-medium text-base block'>Home
              </Link>
            </li>
             
            <li className='max-lg:border-b max-lg:px-3 max-lg:py-2'><Link to='/about'
              className='hover:text-[#007bff] text-[#0B4671]  font-medium text-base block'>About Us</Link></li>
            <li className='group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative'>
              <a href='#products'
                className='hover:text-[#007bff] hover:fill-[#007bff] text-[#0B4671]  font-medium text-base block'>Services<svg
                  xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="inline-block ml-1"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16" data-original="#000000" />
                </svg>
              </a>
              <div
                className='absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500'>
                <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
             
                  <ul className='pt-3 mt-3 space-y-3 border-t '>
                    <li className='py-1 rounded max-lg:border-b'>
                      <Link to='/research' onClick={scrollToTop}
                        className='hover:text-[#007bff] text-[#0B4671]  font-medium text-base block'>Research article proposal
                      </Link>
                    </li>

                    <li className='py-1 rounded max-lg:border-b'>
                      <Link to='/writing' onClick={scrollToTop}
                        className='hover:text-[#007bff] text-[#0B4671]  font-medium text-base block'>Research article Writing
                      </Link>
                    </li>

                    <li className='py-1 rounded max-lg:border-b'>
                      <Link to='/synopsis' onClick={scrollToTop}
                        className='hover:text-[#007bff] text-[#0B4671]  font-medium text-base block'>Synopsis and Thesis Writing
                      </Link>
                    </li>
                    <li className='py-1 rounded max-lg:border-b'>
                      <Link to='/book' onClick={scrollToTop}
                        className='hover:text-[#007bff]  font-medium text-[#0B4671]  text-base block'>Academic book Publication
                      </Link>
                    </li>
                    <li className='py-1 rounded max-lg:border-b'>
                      <Link to='/conference' onClick={scrollToTop}
                        className='hover:text-[#007bff]  font-medium text-[#0B4671]  text-base block'>International Conference Organizing
                      </Link>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </li>
            {/* <li className='max-lg:border-b max-lg:px-3 max-lg:py-2'>
              <Link to='/blogs' onClick={scrollToTop}
                className='hover:text-[#007bff] text-gray-500 font-medium text-base block'>Blogs
              </Link>
            </li> */}
            <li className='max-lg:border-b max-lg:px-3 max-lg:py-2'><Link to='/contact' onClick={scrollToTop}
              className='hover:text-[#007bff] text-[#0B4671] font-medium text-base block'>Contact Us</Link></li>
           
            {/* <li className="-my-2 max-lg:border-b max-lg:px-3 max-lg:py-2">
              <Link to='/login' onClick={scrollToTop}>
                <button className="p-2 px-3 text-white ease-in-out transform bg-blue-500 rounded-lg duration-250 hover:bg-blue-600">Login</button>
              </Link>
            </li> */}
          </ul>
        </div>

        <div className='flex items-center ml-auto lg:hidden'>
          <button id="toggleOpen" onClick={handleToggle}>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

























































// import React, { useEffect, useState, useRef } from "react";
// import "./Header.css";
// import { Link } from "react-router-dom";
// import { RiMenu4Fill } from "react-icons/ri";
// import { FaAngleDown } from "react-icons/fa";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [dropdown1Open, setdropdown1Open] = useState(false);
//   // const [scroll, setScroll] = useState(false);
//   // click outside to close
//   const menuRef = useRef(null);
//   const menuRef2 = useRef(null);
//   // 

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown1 = () => {
//     setdropdown1Open(!dropdown1Open);
//   };


//   // const handleScroll = () => {
//   //   if (window.scrollY > 1) {
//   //     setScroll(true);
//   //   } else {
//   //     setScroll(false);
//   //   }
//   // };




//   // close menu when click outside py-2 text-center w-full 
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsMenuOpen(false);
//         setdropdown1Open(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   // 
//   // close menu when click outside 2
//   useEffect(() => {
//     const handleClickOutside2 = (event) => {
//       if (menuRef2.current && !menuRef2.current.contains(event.target)) {
//         setdropdown1Open(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside2);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside2);
//     };
//   }, []);

//   // 



//   // useEffect(() => {
//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => {
//   //     window.removeEventListener("scroll", handleScroll);
//   //   };
//   // }, []);

//   return (
//     <>
//       <nav
//         className={`
//             "bg-primary-white shadow-lg  w-full start-0 transition-all z-20 `}
//       >
//         <div className="max-w-screen-xl relative    w-full flex items-center justify-between mx-auto p-5 md:px-16 2xl:px-0  transition-all"
//           ref={menuRef}
//         >
//           <Link to="/" onClick={scrollToTop}>
//             <img className="h-14" src="/Images/Kriya Informatics.png" alt="logo" />
//           </Link>
//           <div className="z-50">
//             <button onClick={() => { toggleMenu(); setdropdown1Open(false) }} className="md:hidden  border p-1 rounded-lg"><RiMenu4Fill className="text-2xl " />   </button>

//             <ul className={`${isMenuOpen ? 'block ' : 'hidden'}  lg:flex   lg:flex-row  flex-col  font-semibold  items-center gap-x-10  `}>
//               <Link to='/' >
//                 <li onClick={toggleMenu} className="cursor-pointer p-1 py-2 text-center w-full text-[#0B4671]   ">Home</li>
//               </Link>
//               <Link to='/about'>

//                 <li onClick={toggleMenu} className="cursor-pointer p-1 py-2 text-center w-full text-[#0B4671]  ">About</li>
//               </Link>
             
//                 <li onClick={() => { toggleDropdown1(), setIsMenuOpen(false) }} className="cursor-pointer text-[#0B4671] inline-flex gap-x-2 items-center p-1 py-2 text-center w-full   justify-center transition-all "
//                 > Service <FaAngleDown
//                     className={`${dropdown1Open ? "rotate-180" : "rotate-0"
//                       } transition-transform  duration-300 ease-in-out text-xl`}
//                   /> </li>
             
//               <Link to='/contact'>
//                 <li onClick={toggleMenu} className="cursor-pointer p-1 py-2 text-center w-full  text-[#0B4671] ">Contact</li>
//               </Link>
//             </ul>
//           </div>

//           <div
//             className={`${dropdown1Open ? "block" : "hidden"
//               } top-[70px] border right-0 2xl:-right-16 lg:w-80 w-full p-4 z-50 bg-white rounded-lg absolute lg:h-auto`}
//           >
//             <ul className="gap-2 p-4 md:p-0 font-medium rounded-lg text-center w-full">
//               <Link to="/research" onClick={scrollToTop}>
//                 <li
//                   onClick={toggleDropdown1}
//                   className="p-2 py-3 w-full  text-[#0B4671]   transition rounded-md border-b"
//                 >
//                   Research Article Proposal
//                 </li>
//               </Link>
//               <Link to="/writing" onClick={scrollToTop}>
//                 <li
//                   onClick={toggleDropdown1}
//                   className="p-2 py-3 w-full  text-[#0B4671]   transition rounded-md border-b"
//                 >
//                   Research Article Writing
//                 </li>
//               </Link>
//               <Link to="/synopsis" onClick={scrollToTop}>
//                 <li
//                   onClick={toggleDropdown1}
//                   className="p-2 py-3 w-full text-[#0B4671]    transition rounded-md border-b"
//                 >
//                   Synopsis and Thesis Writing
//                 </li>
//               </Link>
//               <Link to="/book" onClick={scrollToTop}>
//                 <li
//                   onClick={toggleDropdown1}
//                   className="p-2 py-3 w-full text-[#0B4671]    transition rounded-md border-b"
//                 >
//                   Academic Book Publication
//                 </li>
//               </Link>
//               <Link to="/conference" onClick={scrollToTop}>
//                 <li
//                   onClick={toggleDropdown1}
//                   className="p-2 py-3 w-full text-[#0B4671]    transition rounded-md border-b"
//                 >
//                   International Conference Organizing
//                 </li>
//               </Link>

//               {/* <li ref={menuRef2}>
//                 <button
//                   onClick={toggleDropdown1}
//                   className="p-2 w-full    transition rounded-md border-b flex items-center gap-2 justify-center"
//                 >
//                   Journal Overview
//                   <FaAngleDown
//                     className={`${
//                       dropdown1Open ? "rotate-180" : "rotate-0"
//                     } transition-transform duration-300 ease-in-out text-xl`}
//                   />
//                 </button>
//                 <div
//                   className={`${
//                     dropdown1Open ? "block" : "hidden"
//                   } z-10 font-normal bg-primary-white border rounded-lg shadow w-48 absolute  left-0 md:left-32 lg:-left-48  lg:-mt-10 -mt-28`}
//                 >
//                   <ul className="p-2 text-sm">
//                     <li onClick={()=>{toggleMenuDrop1() , scrollToTop()}}>
//                       <Link
//                         to="/editorial-board"
//                         className="block px-4 py-2 border-b rounded   transition"
//                       >
//                         Editorial Board
//                       </Link>
//                     </li>
//                     <li onClick={()=>{toggleMenuDrop1() , scrollToTop()}}>
//                       <Link
//                         to="/peer-review"
//                         className="block px-4 py-2 border-b rounded   transition"
//                       >
//                         Peer Review Process
//                       </Link>
//                     </li>
//                     <li onClick={()=>{toggleMenuDrop1() , scrollToTop()}}>
//                       <Link
//                         to="/pub-ethics"
//                         className="block px-4 py-2 border-b rounded   transition"
//                       >
//                         Publication Ethics
//                       </Link>
//                     </li>
//                     <li onClick={()=>{toggleMenuDrop1() , scrollToTop()}}>
//                       <Link
//                         to="/abstracting&index"
//                         className="block px-4 py-2 border-b rounded   transition"
//                       >
//                         Abstracting and Indexing
//                       </Link>
//                     </li>
//                     <li onClick={()=>{toggleMenuDrop1() , scrollToTop()}}>
//                       <Link
//                         to="/articleindex"
//                         className="block px-4 py-2 border-b rounded   transition"
//                       >
//                         Article Processing Charges
//                       </Link>
//                     </li>
                    
//                   </ul>
//                 </div>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {/* <div className={${isMenuOpen ? 'block':'hidden' } fixed h-screen backdrop-blur-sm top-0 w-full left-0 lg:hidden z-10}></div> */}
//     </>
//   );
// }

// export default Header;