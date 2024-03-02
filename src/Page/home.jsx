import React, { useState } from "react"
import Header from "../Component/Header/Header"
import Greeting from "../Component/Greetings/Greeting"
import BodyCont from "../Component/Body/BodyCont"
import './home.css'
import ClassCounter from "../Component/ClassCounter"
import Hook from "../Component/Hook"
import HookCounterTwo from "../Component/HookCounterTwo"
// import Great from "../Component/Greet/Great"
const Home = ()=>{
    const [toggleAddTodoModal, setToggleAddTodoModal] = useState(false)
    const [state, setState] = useState('This is a state');
    const handleToggleAddModal = () => {
        setToggleAddTodoModal(!toggleAddTodoModal);
    }

    // setState('The state has changed')
    console.log(state);
    return <div>
         <Header />
        <div className="cont"><Greeting handleToggleAddModal={handleToggleAddModal}/>    
        <BodyCont toggleAddTodoModal={toggleAddTodoModal} handleToggleAddModal={handleToggleAddModal}/>
        <ClassCounter />
        <Hook />
        <HookCounterTwo />
        {/* <Great name="new"/>
        <Great name="old"/>
        <Great name="new"/> */}
    </div>
    
    </div>
       
}
export default Home;