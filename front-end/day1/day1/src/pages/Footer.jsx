// import React from 'react'
import '../assets/css/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footcontainer'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>FAQ</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/terms'>Terms and Conditions</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Privacy Policy</a>
                    </li>
                    {/* <li className='nav-item'>
                        <a href='#demo'>mmmbbbu</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>vanagoooo</a>
                    </li> */}
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p className='footer-text'>2024 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer