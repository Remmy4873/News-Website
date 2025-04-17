import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/politics'>Politics</Link>
              </li>
              <li>
                <Link to='/world'>World</Link>
              </li>
              <li>
                <Link to='/business'>Business</Link>
              </li>
              <li>
                <Link to='/life-style'>Life & Style</Link>
              </li>
              <li>
                <Link to='/health'>Health</Link>
              </li>
              <li>
                <Link to='/fashion'>Fashion</Link>
              </li>
              <li>
                <Link to='/tech'>Technology</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header