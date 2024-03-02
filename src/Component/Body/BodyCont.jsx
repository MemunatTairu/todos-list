import "./BodyCont.css";
import TodoItem from "../Todo/todo";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Footer from "../Footer/Footer";
import AddTodoModal from "../modals/AddTodoModal";

const todoItemList = [
  {
    todo: "Create Wireframe",
    startTime: "10:30 am",
    endTime: "11:30 am",
    day: "today",
  },
  {
    todo: "Create Wireframe",
    startTime: "10:30 am",
    endTime: "11:30 am",
    day: "today",
  },
  {
    todo: "Create Wireframe",
    startTime: "10:30 am",
    endTime: "11:30 am",
    day: "today",
  },
  {
    todo: "Design Landingpage",
    startTime: "10:30 am",
    endTime: "11:30 am",
    day: "today",
  },
  {
    todo: "Go shopping",
    startTime: "10:30 am",
    endTime: "11:30 am",
    day: "today",
  },
  {
    todo: "Do my laundry",
    startTime: "10:30 am",
    endTime: "11:30 am",
    day: "today",
  },
  {
    todo: "Meeting with Product Manager ",
    startTime: "10:30 am",
    endTime: "11:30 am",
    day: "today",
  },
];

const BodyCont = ({toggleAddTodoModal, handleToggleAddModal}) => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="headerCont">
        <div>
          <h3>January 2024</h3>
          <div className="dateButtons">
            <button className="btn">
              Mon<p>1</p>
            </button>
            <button className="btn">
              Tue<p>2</p>
            </button>
            <button className="btn">
              Wed<p>3</p>
            </button>
            <button className="btn">
              Thur<p>4</p>
            </button>
            <button className="btn">
              Fri<p>5</p>
            </button>
            <button className="btn">
              Sat<p>6</p>
            </button>
            <button className="btn">
              Sun<p>7</p>
            </button>
            <button className="btn">
              Mon<p>8</p>
            </button>
            <button className="btn">
              Tue<p>9</p>
            </button>
            <button className="btn">
              Wed<p>10</p>
            </button>
            <button className="btn">
              Thur<p>11</p>
            </button>
          </div>
          <h4>My tasks</h4>
          <div className="todoAndCal">
            <div className="compElement">
              <TodoItem todoItemList={todoItemList} />
              <Footer />
            </div>
         </div>
         </div>
            <div className="dateRight">
             
            <Calendar onChange={onChange} value={value} />
            {/* {
              toggleAddTodoModal && <AddTodoModal />
            } */}
            {
              toggleAddTodoModal ? <AddTodoModal handleToggleAddModal={handleToggleAddModal}/> : null
            }
            
            </div>
         
      </div>
      
    </>
  );
};
export default BodyCont;
