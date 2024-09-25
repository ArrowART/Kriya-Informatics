import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Top from '../../Components/ScrollToTop/Top'
function Main() {
  return (
    <div > 
      <Header />
      <main className='mt-[]'>
        <Outlet/>
      </main>
      <Top/>
      <Footer/>
    </div>
  )
}
export default Main
