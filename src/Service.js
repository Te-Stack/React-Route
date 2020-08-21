import React from 'react'
import "./index.css"
import mobile from "./images/mobile-payment.png"


function Service(){
    return(
        <div>
            <h1 className="modern text-center text-mute mt-5">What does CloneStack Offers</h1>
            <p className="text-center child text-mute">CloneStack is a financial company like Paystack<br></br>
            that specialise in payment of money to staff of a company
            <br></br>
            <img className="d-none d-sm-block  lap" src={mobile} alt=""></img>
            <img className="d-block d-sm-none mobile-view ml-5" src={mobile} alt=""></img>     


            </p>
            
        </div>
        

    )
}

export default Service 