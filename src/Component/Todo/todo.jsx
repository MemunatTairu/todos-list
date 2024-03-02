import React from "react";
import "./todo.css"


const TodoItem = ({todoItemList}) => {
    // console.log('todoItemList', todoItemList);
  return (
    (todoItemList.map((item,i) => (
      <div className="dInput">
      <div className="wareFrame" >
        <input type="checkbox" id="check"></input>
        <label htmlFor="check">
          <p><b>{item.todo}</b> <br></br>{item.startTime} - {item.endTime}</p>
        </label>
      </div>
      <p>{item.day}</p>
    </div>
    )))
    
  ); 
//   todo?.length > 0?{}
};

export default TodoItem;
