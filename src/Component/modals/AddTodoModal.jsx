import React from "react";
import "./addTodo.css";

const AddTodoModal = ({handleToggleAddModal}) => {
  return (
    <div className="modal-cont">
      <div className="modal-body">
        <div className="modal-body-content">
          <div className="modal-body-top">
            <span>Add Task</span>
            <button type="button" onClick={handleToggleAddModal} className="close-icon">X</button>
          </div>
          <div className="modal-text-area">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="todo-date-time">
            <input type="date" name="" id="" />
            <div className="input-time-group">
              <input type="time" name="" id="" />
              <input type="time" name="" id="" />
            </div>
          </div>
          <div className="duration">
            <p>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9998 6.96671C10.9998 6.04729 10.5784 5.16553 9.82824 4.5154C9.0781 3.86528 8.06068 3.50004 6.99981 3.50004C5.93895 3.50004 4.92153 3.86528 4.17139 4.5154C3.42124 5.16553 2.99981 6.04729 2.99981 6.96671C2.99981 8.48791 2.62257 9.60043 2.15186 10.3965C1.61537 11.3038 1.34713 11.7574 1.35772 11.8658C1.36984 11.9898 1.39216 12.0289 1.49271 12.1024C1.58059 12.1667 2.02215 12.1667 2.90527 12.1667H11.0944C11.9775 12.1667 12.419 12.1667 12.5069 12.1024C12.6075 12.0289 12.6298 11.9898 12.6419 11.8658C12.6525 11.7574 12.3843 11.3038 11.8478 10.3965C11.3771 9.60043 10.9998 8.48791 10.9998 6.96671Z"
                  fill="#667085"
                />
                <path
                  d="M8.99981 12.1667C8.99981 13.2713 8.10438 14.1667 6.99981 14.1667C5.89524 14.1667 4.99981 13.2713 4.99981 12.1667M8.19748 3.65908C8.48781 3.35913 8.66648 2.95045 8.66648 2.50004C8.66648 1.57957 7.92029 0.833374 6.99981 0.833374C6.07934 0.833374 5.33315 1.57957 5.33315 2.50004C5.33315 2.95045 5.51182 3.35913 5.80214 3.65908M10.9998 6.96671C10.9998 6.04729 10.5784 5.16553 9.82824 4.5154C9.0781 3.86528 8.06068 3.50004 6.99981 3.50004C5.93895 3.50004 4.92153 3.86528 4.17139 4.5154C3.42124 5.16553 2.99981 6.04729 2.99981 6.96671C2.99981 8.48791 2.62257 9.60043 2.15186 10.3965C1.61537 11.3038 1.34713 11.7574 1.35772 11.8658C1.36984 11.9898 1.39216 12.0289 1.49271 12.1024C1.58059 12.1667 2.02215 12.1667 2.90527 12.1667H11.0944C11.9775 12.1667 12.419 12.1667 12.5069 12.1024C12.6075 12.0289 12.6298 11.9898 12.6419 11.8658C12.6525 11.7574 12.3843 11.3038 11.8478 10.3965C11.3771 9.60043 10.9998 8.48791 10.9998 6.96671Z"
                  stroke="#667085"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>10 Minute before</span>
            </p>
            <button className="close-icon">X</button>
          </div>
        </div>
        <div className="modal-body-footer"></div>
      </div>
    </div>
  );
};

export default AddTodoModal;
