// import React from 'react'
import '../assets/css/Home.css'
import About from './Aboutus'
import Footer from './Footer'
// import Footer from './Footer'
import Job from './Job'

import Navbar from "./NavBar"
import Testimonials from './Testimonial'
function Home() {
    return (
      <div className='hero'>
          <Navbar/>
            <div className='content'>
                <p className='home-text'>Call us</p>
                <p className='home-text'>+91-9942137316</p>
                <p className='home-text'>Turning dreams into careers</p>
                <p className='home-text'>one click at a time.</p>
                <button href='/login' className='button1'>Free Consultation</button>
            </div>
            <Job/>
            <Testimonials/>
            <About/>
            {/* <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.47295765238!2d76.92319257405602!3d10.927601489230492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1710823750793!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
            {/* <Footer/> */}
        </div>
    )

}

export default Home
