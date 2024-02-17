import React from "react";
import "./BodyCont.css";

const BodyCont = () => {
  return (
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
        <p>My tasks</p>
        <div className="comp1">
          <div>
            <input type="checkbox" id="check"></input>
            <label for="check">
              <b>Create Wareframe</b> <br></br> 10:30 am - 11:30 am
            </label>
          </div>
          <p>Today</p>
        </div>
        <div className="comp1">
          <div>
            <input type="checkbox" id="check"></input>
            <label for="check">
              <b>Design Landingpage</b> <br></br> 10:30 am - 11:30 am
            </label>
          </div>
          <p>Today</p>
        </div>
        <div className="comp1">
          <div>
            <input type="checkbox" id="check"></input>
            <label for="check">
              <b>Go shopping</b> <br></br> 10:30 am - 11:30 am
            </label>
          </div>
          <p>Today</p>
        </div>
        <div className="comp1">
          <div>
            <input type="checkbox" id="check"></input>
            <label for="check">
              <b>Do my laundry</b> <br></br> 10:30 am - 11:30 am
            </label>
          </div>
          <p>Today</p>
        </div>
        <div className="comp1">
          <div>
            <input type="checkbox" id="check"></input>
            <label for="check">
              <b>Meeting with project manager</b> <br></br> 10:30 am - 11:30 am
            </label>
          </div>
          <p>Today</p>
        </div>
        <div className="comp1">
          <div>
            <input type="checkbox" id="check"></input>
            <label for="check">
              <b>Meeting with stake holders</b> <br></br> 10:30 am - 11:30 am
            </label>
          </div>
          <p>Today</p>
        </div>
        <div className="comp1">
          <div className="comp2">
            <input type="checkbox" id="check"></input>
            <label for="check">
              <b>Go shopping</b> <br></br> 10:30 am - 11:30 am
            </label>
          </div>
          <p>Today</p>
        </div>
      </div>
      <div className="dateRight">
        <div className="dateHeader">
          <button className="btn2">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 11L1.5 6L6.5 1"
                stroke="#667085"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p>January 2024</p>
          <button className="btn2">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 11L6.5 6L1.5 1"
                stroke="#667085"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="dInput">
          <input type="text" name="date" id="" placeholder="Jan 6, 2024" />
          <button>Today</button>
        </div>
        <table bgcolor="lightgrey">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>sat</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr></tr>
            <tr>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
            </tr>
            <tr>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
            </tr>
            <tr>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
            </tr>
            <tr>
              <td>31</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default BodyCont;
