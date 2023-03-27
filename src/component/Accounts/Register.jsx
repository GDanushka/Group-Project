import React, { useState } from "react";
import Navbar from "../../parts/navbar/Navbar";
import Sidebar from "../../parts/sideBar/Sidebar";
import E_Details from "./E_Details"
import "./Register.css"

function Register() {
  const [button, setbutton] = useState(false);

  const popupwindow = (props) => {
    if (props === true) {
      return (
        <div className="clsButnContainer">
        <div className="mainWindow">
            <div className="closeButton" onClick={()=>{setbutton(false)}}>
              <p>X</p>
            
          </div>
          <div className="popupwindow">
            <form className="Register_form">
              <input
                type="text"
                className="textinput"
                placeholder="Full Name"
              />
              <br />
              <input
                type="text"
                className="textinput"
                placeholder="Mobile Number"
              />
              <br />
              <input
                type="text"
                className="textinput"
                placeholder="Role"
              />
                <br />
              <input
                type="Password"
                className="textinput"
                placeholder="Password"
                />
              <div className="submitbutton" onClick={()=>{setbutton(false)}}>Save</div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  };
 return (
    <div className="mainframe">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="frame2">
        <div>
          <Sidebar />
        </div>
        <div className="frame3">
            <div
              className="addEmployee"
              onClick={() => {
                setbutton(true);
              }}
            >
              + add Employee
         </div>
         <div className="frame4"> 
           <div className="E_Details">
             <E_Details/>
           </div>
         </div>
       </div>
       <div className="popWindow">{ popupwindow( button ) }
       </div>
     </div>
   </div>
  );
}

export default Register;
