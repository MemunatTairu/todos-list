import React from "react";
import "./Footer.css"

const Footer =()=>{
    return<div className="footer">
        <div className="previous"><h4><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8334 10H4.16675M4.16675 10L10.0001 15.8334M4.16675 10L10.0001 4.16669" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Previous</h4></div>
        <table>
            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>...</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
            </tr>
        </table>
       <div className="next"> <h4>Next <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></h4></div>
    </div>
}
export default Footer;