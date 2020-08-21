import React from 'react'
import contact from "./images/contact.png"

function Contact() {
    return (
        <div>
            <h1 className="modern mt-5 text-center text-mute">Contact Us
            <br></br>
            
            <img className="text-center d-none d-sm-block lap" src={contact} alt=""></img>
            <img className="d-block d-sm-none mobile-view ml-5" src={contact} alt=""></img>     


            </h1>
                       
        </div>
    )
}

export default Contact
