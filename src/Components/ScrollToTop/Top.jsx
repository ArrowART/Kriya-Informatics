import React, { useEffect, useState } from 'react'
import { IoIosArrowDropupCircle } from 'react-icons/io'
export default function Top() {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        const handleScroll
            = () => {
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
        <div className={`fixed right-4 bottom-4 transition-opacity duration-300 ease-in-out ${showScrollTopButton ? 'opacity-100' : 'opacity-0'}`}>
            <IoIosArrowDropupCircle onClick={scrollToTop} className='text-blue-950 text-4xl cursor-pointer brightness-75 hover:brightness-150' />
        </div>
    )
}
