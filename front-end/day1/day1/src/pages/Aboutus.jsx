
// import React from 'react'
import john from '../assets/images/Screenshot (154).png'
import '../assets/css/about.css'
import Footer from './Footer'
// import Navbar from './NavBar'

const About = () => {
    return (
        <div>
            {/* <Navbar/> */}
        <div className='about' id='about'>
            <div className='aboutcontainer'>
                <div className='about-img'>
                <img src={john} alt='john' />
                </div>
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
                    <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
        <div>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.47295765238!2d76.92319257405602!3d10.927601489230492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1710823750793!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        // referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
        <Footer/>
        </div>
    )
}

export default About
