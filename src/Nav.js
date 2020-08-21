import React from 'react'
import {Link} from "react-router-dom"
import "./index.css"

function Nav() {
    return (
        <div className="text-mute">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="" className="navbar-brand ">CloneStack</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-lg-auto">
                    <Link to="/" className="nav-link active mt-2">Home</Link>
                    <Link to ="/services" className="nav-link mt-2">Service</Link>
                    <Link to ="/about" className="nav-link mt-2">About</Link>
                    <Link to ="/contact" className="nav-link mt-2">Contact Us</Link>
                    <Link to="" className="nav-link" ><button>Create a free account</button></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
