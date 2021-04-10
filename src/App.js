import React from 'react'
import Header from "./Header"
import About from "./About"
import Service from "./Service"
import Nav from "./Nav"
import Contact from "./Contact"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Route} from "react-router-dom"


function App(){
    return(
        <div>
            <BrowserRouter>
            <Nav />
            <Route path = '/' exact component = {Header} />
            <Route path = '/about' exact component = {About} />
            <Route path = '/services' exact component = {Service} />    
            <Route path = '/contact' exact component = {Contact} />    
            </BrowserRouter>
        </div>

    )
}

export default App