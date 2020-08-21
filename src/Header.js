import React from 'react'
import "./index.css"
import header from "./images/header.png"

function Header() {
    return (
        <div className ="container">
            <div className ="row">
                <div className = "col mt-5 text-mute">
                    <br></br>
                    <h1 className="text-mute modern">Modern online and offline<br></br> payments for Africa</h1>
                    <br></br>
                    <p className="text-mute child">Paystack helps businesses in Africa get paid by anyone<br></br> anywhere in the world</p>
                    <br></br>
                    <button>Create a free account</button>
                </div>
                <div className="col mt-5 d-none d-sm-block">
                    <img className="ml-5" src={header} alt=""></img>

                </div>

            </div>
            <div className="row d-block d-sm-none">
                <div className="col-12">
                    <img className="d-block d-sm-none mobile-view ml-1" src={header} alt=""></img>     


                </div>

            </div>
            
    
        </div>
    )
}

export default Header
