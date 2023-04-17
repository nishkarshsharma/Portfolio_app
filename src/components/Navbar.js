import React from 'react';
import gitLogo from './images/githubLogo.jpg'
import youtubeLogo from './images/youtubeLogo.jpg'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Game Dev</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">Renders</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/"></a>
                        </li>
                    </ul>
                </div>
            </div>
            <a href="https://www.youtube.com/@dtoxicatedcaffe">
                <img src = {youtubeLogo} className="img-thumbnail" alt=""/>    
            </a>
            <a href = "https://github.com/nishkarshsharma">              
                <img src = {gitLogo} className="img-thumbnail mx-3" alt=""/>    
            </a>
        </nav>
    </>
  )
}
