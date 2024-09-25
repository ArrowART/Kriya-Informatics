import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

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
      setMenuOpen(false);
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
        <a href="/"><img src="/Images/Kriya Informatics.png" alt="logo" className='w-36' /></a>
        <div id="collapseMenu"
          className={`lg:flex ${menuOpen ? 'block' : 'hidden'} max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[270px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto`}
        >
          <button id="toggleClose" className='lg:hidden fixed top-3 right-8 z-[100] rounded-full bg-white p-3' onClick={handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>
          <ul className='lg:flex lg:ml-10 lg:gap-x-10 max-lg:space-y-4 max-lg:fixed max-lg:bg-white  max-lg:min-w-[270px] md:w-[600px]   max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='px-3 max-lg:border-b max-lg:pb-4 lg:hidden'>
              <Link to="/"><img src="/Images/Kriya Informatics.png" alt="logo" className='w-36' />
              </Link>
            </li>
            <li className='max-lg:border-b max-lg:px-3 max-lg:py-2'>
              <Link to='/' onClick={scrollToTop}
                className={`lg:hover:underline hover:underline-offset-4 text-[#0B4671]  font-medium text-base block  ${isActive('/') ? 'lg:text-[#0B4671]  lg:underline lg:underline-offset-4 lg:bg-white text-white lg:p-0 p-1 w-fit  bg-[#0B4671]' : ''}`}>Home
              </Link>
            </li>
            <li className='max-lg:border-b max-lg:px-3 max-lg:py-2'><Link to='/AboutUs' onClick={scrollToTop}
              className={`lg:hover:underline hover:underline-offset-4  text-[#0B4671]  font-medium text-base block  ${isActive('/AboutUs') ? 'lg:text-[#0B4671] lg:underline lg:underline-offset-4 lg:bg-white text-white lg:p-0 p-1 w-fit  bg-[#0B4671]' : ''}`}>About Us</Link></li>
            <li className='group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative'>
              <a href='#products'
                className={` hover:fill-[#007bff] text-[#0B4671]  font-medium text-base block ${isActive('/service') ? 'lg:text-[#0B4671] lg:underline lg:underline-offset-4 lg:bg-white text-white lg:p-0 p-1 w-fit  bg-[#0B4671]' : ''}`}>Services<svg
                  xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="inline-block ml-1"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16" data-original="#000000" />
                </svg>
              </a>
              <div
                className='absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500'>
                <div className="lg:min-w-[200px]  max-lg:min-w-[140px]">
                  <ul className='pt-3 mt-3 space-y-3 border-t '>
                    <li className='py-1 rounded max-lg:border-b'>
                      <Link to='/ResearchArticleProposal' onClick={scrollToTop}
                        className={`lg:hover:underline hover:underline-offset-4 text-[#0B4671]  font-medium text-base block ${isActive('/ResearchArticleProposal') ? 'lg:text-[#0B4671] lg:underline lg:underline-offset-4 lg:bg-white text-white lg:p-0 p-1 w-fit  bg-[#0B4671]' : ''}`}>Research article proposal
                      </Link>
                    </li>
                    <li className='py-1 rounded max-lg:border-b'>
                      <Link to='/ResearchArticleWriting' onClick={scrollToTop}
                        className={`lg:hover:underline hover:underline-offset-4 text-[#0B4671]  font-medium text-base block  ${isActive('/ResearchArticleWriting') ? 'lg:text-[#0B4671] lg:underline lg:underline-offset-4 lg:bg-white text-white lg:p-0 p-1 w-fit  bg-[#0B4671]' : ''}`}>Research article Writing
                      </Link>
                    </li>
                    <li className='py-1 rounded max-lg:border-b'>
                      <Link to='/SynopsisandThesisWriting' onClick={scrollToTop}
                        className={`lg:hover:underline hover:underline-offset-4 text-[#0B4671]  font-medium text-base block ${isActive('/SynopsisandThesisWriting') ? 'lg:text-[#0B4671] lg:underline lg:underline-offset-4 lg:bg-white text-white lg:p-0 p-1 w-fit  bg-[#0B4671]' : ''}`}>Synopsis and Thesis Writing
                      </Link>
                    </li>
                    <li className='py-1 rounded max-lg:border-b'>
                      <Link to='/AcademicBookPublication' onClick={scrollToTop}
                        className={`lg:hover:underline hover:underline-offset-4  font-medium text-[#0B4671]  text-base block ${isActive('/AcademicBookPublication') ? 'lg:text-[#0B4671] lg:underline lg:underline-offset-4 lg:bg-white text-white lg:p-0 p-1 w-fit  bg-[#0B4671]' : ''}`}>Academic book Publication
                      </Link>
                    </li>
                    <li className='py-1 rounded max-lg:border-b'>
                      <Link to='/InternationalConferenceOrganizing' onClick={scrollToTop}
                        className={`lg:hover:underline hover:underline-offset-4  font-medium text-[#0B4671]  text-base block ${isActive('/InternationalConferenceOrganizing') ? 'lg:text-[#0B4671] lg:underline lg:underline-offset-4 lg:bg-white text-white lg:p-0 p-1 w-fit  bg-[#0B4671]' : ''}`}>International Conference Organizing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className='max-lg:border-b max-lg:px-3 max-lg:py-2'><Link to='/ContactUs' onClick={scrollToTop}
              className={`lg:hover:underline hover:underline-offset-4 text-[#0B4671] font-medium text-base block ${isActive('/ContactUs') ? 'lg:text-[#0B4671] lg:underline lg:underline-offset-4 lg:bg-white text-white lg:p-0 p-1 w-fit  bg-[#0B4671]' : ''}`}>Contact Us</Link></li>
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




