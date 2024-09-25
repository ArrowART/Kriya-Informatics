import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'




function Home() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section className='text-3xl bg-home-page lg:h-[50vh] h-[60vh] bg-no-repeat bg-center bg-cover flex justify-center items-center px-5'>
        <div className='bg-gray-200 rounded-lg shadow-lg border max-w-[80rem] 2xl:mx-auto border-blue-600'>
          <div className='lg:text-2xl md:text-2xl lg:p-10 p-5 text-sm text-[#0B4671] font-semibold italic'>
            <span className='text-3xl font-bold italic'>Kriya Informatics</span> constitutes the activities to innovate and introduce new Research activities and services to improve researcher’s expectation Skill development, Industry-Institute Interaction, and Research & Publications.
          </div>
        </div>
      </section>
      <div className="max-w-[60rem] mx-auto my-10 px-5 lg:text-lg">
        <div className='lg:grid lg:grid-cols-2 grid-cols-1'>
          <img src='/Images/aboutt.jpg' alt='about' />
          <div>
            <p className="flex justify-center items-center text-justify">
              Kriya Informatics Research and development be made up out of Research activities that undertake to innovate and introduce new Research and services. Kriya Informatics constitutes the activities to innovate and introduce new Research activities and services to improve researcher’s expectation. Kriya Informatics Research and development company work in different sectors and industries to conduct research-related activities. Especially technology, medical, management organisations.
            </p>
            <div className='mx-auto my-3' id='service'>
              <Link to='/AboutUs' onClick={scrollToTop} >
                <button className='border border-[#0B4671] font-bold text-[#0B4671] hover:bg-[#0B4671] hover:text-white rounded-md text-red shadow-md p-2'>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <section className='max-w-[120rem] my-10' >
        <div className='text-center text-3xl my-10'>
          <p className="text-4xl text-[#0B4671] font-bold">Our Services</p>
        </div>
        <div className='max-w-[60rem] mx-auto'>
          <div className='lg:grid lg:grid-cols-2 grid grid-cols-1 gap-10 px-5 lg:text-lg'>
            <div className='border rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out'>
              <img className='w-40 h-40 mx-auto' src='/Images/Researchh.jpg' alt='Research article proposal' />
              <p className="text-center font-semibold my-3 text-[#0B4671] text-xl">Research article proposal</p>
              <p className="text-justify">
                Our Research article proposal applied towards the academic research also applies to applying for a Government-funded or researcher PhD research work.
              </p>
              <div className='text-center mt-20'>
                <Link to='/ResearchArticleProposal' onClick={scrollToTop}>
                  <button className='border border-[#0B4671] font-bold text-[#0B4671] hover:bg-[#0B4671] hover:text-white rounded-md text-red shadow-md p-2'>
                    View More
                  </button>
                </Link>
              </div>
            </div>
            <div className='border rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out'>
              <img className='w-40 h-40 mx-auto' src='/Images/Writte.png' alt='Research article Writing' />
              <p className="text-center font-semibold my-3 text-[#0B4671] text-xl">Research article Writing</p>
              <p className="text-justify">
                We provide high quality support to Research Article Writing services (UGC, SCOPUS, SCI and SCIE Listed Journals) with minimal plagiarism reports ({'<'}10%) and also provide support for research article writing, proofreading and editing.. etc.
              </p>
              <div className='text-center mt-5'>
                <Link to='/ResearchArticleWriting' onClick={scrollToTop}>
                  <button className='border border-[#0B4671] font-bold text-[#0B4671] hover:bg-[#0B4671] hover:text-white rounded-md text-red shadow-md p-2'>
                    View More
                  </button>
                </Link>
              </div>
            </div>
            <div className='border rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out'>
              <img className='w-40 h-40 mx-auto' src='/Images/6223856.jpg' alt='Synopsis and Thesis Writing' />
              <p className="text-center font-semibold my-3 text-[#0B4671] text-xl">Synopsis and Thesis Writing</p>
              <p className="text-justify">
                We provide high quality support to Synopsis and Thesis Writing (to various universities across India) with minimal plagiarism reports (less than 15%) and also provide support for research Power point presentation, etc.
              </p>
              <div className='text-center mt-5'>
                <Link to='/SynopsisandThesisWriting' onClick={scrollToTop}>
                  <button className='border border-[#0B4671] font-bold text-[#0B4671] hover:bg-[#0B4671] hover:text-white rounded-md text-red shadow-md p-2'>
                    View More
                  </button>
                </Link>
              </div>
            </div>
            <div className='border rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out'>
              <img className='w-40 h-40 mx-auto' src='/Images/publication.jpg' alt='Academic Book Publication' />
              <p className="text-center font-semibold my-3 text-[#0B4671] text-xl">Academic Book Publication</p>
              <p className="text-justify">
                The front-end development framework with a steep learning curve. It changes the way you develop sites. Suspendisse nec risus fermentum sapien congue fermentum sed at lorem.
              </p>
              <div className='text-center mt-12'>
                <Link to='/AcademicBookPublication' onClick={scrollToTop}>
                  <button className='border border-[#0B4671] font-bold text-[#0B4671] hover:bg-[#0B4671] hover:text-white rounded-md text-red shadow-md p-2'>
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='max-w-[30rem] mx-auto px-5'>
            <div className='lg:grid lg:grid-cols-1 my-10 border rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out'>
              <img className='w-40 h-40 mx-auto' src='/Images/gone.png' alt='International Conference Organizing' />
              <p className="text-center font-semibold my-3 text-[#0B4671] text-xl">International Conference Organizing</p>
              <p className="text-justify lg:text-lg">
                Cleanstart comes with a style.less file that tries to use all the power of {"{less}"} and bootstrap combined. Suspendisse nec risus fermentum sapien congue fermentum sed at lorem.
              </p>
              <div className='text-center mt-20'>
                <Link to='/InternationalConferenceOrganizing' onClick={scrollToTop}>
                  <button className='border border-[#0B4671] font-bold text-[#0B4671] hover:bg-[#0B4671] hover:text-white rounded-md text-red shadow-md p-2'>
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
export default Home;
