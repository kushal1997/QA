import React, { useEffect, useState } from 'react';
import './header.css';
import { Sidebar } from './Sidebar';
import { Link } from 'react-router-dom';

// import gif1 from "../image/icons8-twitter.gif"




const Header = () => {

  const [time, setTime] = useState(new Date())
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
    setInterval(() => setDate(new Date()))
  }, [])

  return (
    <>

      <header className="site-header">
        <div className="site" >
          <div className="site-id">
            <p>
              {time.toLocaleTimeString()}</p>
          </div>

          <div className="site-id">
            <p>{date.toLocaleDateString()}</p>
          </div>
        </div>

        <div className="site-identity ">
          <h1>
            <Link to='/'>
              <b><l> INTERVIEW Q&A </l></b>
            </Link>

          </h1>

        </div>
        <nav className="site-navigation">
          <ul className="nav">
            <li className='user'>
              <Link to='/contact_page'>
                <img width="40" height="40" src="https://img.icons8.com/external-anggara-filled-outline-anggara-putra/32/external-contact-home-screen-anggara-filled-outline-anggara-putra-2.png" alt="external-contact-home-screen-anggara-filled-outline-anggara-putra-2" />
              </Link>
            </li>
            <div className='fb-tw'>
              <li>
                <a target='_blank' href='https://www.facebook.com/dayaconsultancyservicespvt.ltd/'>
                  <img width="40" height="40" src="https://img.icons8.com/color/48/facebook.png" alt="facebook" />
                </a>
                {/* <a href="#">About</a> */}
              </li>
              <li>
                <a target='_blank' href='https://twitter.com/i/flow/login?redirect_after_login=%2FDayaservices'>
                  <img width="40" height="40" src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1" />
                </a>
                {/* <img src={gif1} ></img> */}
              </li>
            </div>


          </ul>
        </nav>
      </header>
      <Sidebar className="sticky" />

    </>
  )
}

export default Header

