import React from 'react'
import "./index.css"
import team from "./images/team.png"


function About(){
    return(
        <div>
        <h1 className = "modern text-center mt-5 text-center">About Us</h1>
        <p className="text-center child">The CloneStack is a multidimensional companies across the the world<br>
        </br>
        some of which include UK,Russia and China
        <br></br>
        <img className="d-none d-sm-block lap" src={team} alt=""></img>  
        <img className="d-block d-sm-none mobile-view ml-5" src={team} alt=""></img>     
        </p>
        </div>
    )
}

export default About