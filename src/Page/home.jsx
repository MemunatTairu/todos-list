import React from "react"
import Header from "../Component/Header/Header"
import Greeting from "../Component/Greetings/Greeting"
import BodyCont from "../Component/Body/BodyCont"
import Footer from "../Component/Footer/Footer"
import './home.css'
// import Great from "../Component/Greet/Great"
const Home = ()=>{
    return <div className="cont">
        <Header />
        <Greeting />    
        <BodyCont />
        <Footer />
        {/* <Great name="new"/>
        <Great name="old"/>
        <Great name="new"/> */}
    </div>
    
}
export default Home;