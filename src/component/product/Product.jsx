import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sideBar/Sidebar";
import Laptopslider from "../Sliders/Laptopslider";
import "./Product.css";

function Product() {
  const [button, setbutton] = useState(false);

  const popupwindow = (props) => {
    if (props === true) {
      return (
        <div className="mainWindow">
          <div className="clsButnContainer">
            <div className="closeButton" onClick={()=>{setbutton(false)}}>
              <p>X</p>
            </div>
          </div>
          <div className="popupwindow">
            <div className="imageArea"></div>
            <form className="productform">
              <input
                type="text"
                className="textinput"
                placeholder="Item Name"
              />
              <br />
              <input
                type="text"
                className="textinput"
                placeholder="Item Code"
              />
              <br />
              <div className="fileinputarea">
              <input
                type="file"
                className="fileinput"
                name="choose image"
              />
              </div>
              <br />
              <input
                type="text"
                className="textinput"
                placeholder="Item price"
              />
              <br />
              <input
                type="text"
                className="textinput"
                placeholder="Item description"
              />
              <br />
              <div className="submitbutton" onClick={()=>{setbutton(false)}}>Submit</div>
            </form>
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
          <div className="secondNavbar">
            <div className="searchSection">
              <div className="searchbar">
                <input
                  className="textInput"
                  type="text"
                  placeholder="Search..."
                />
                <div className="searchIcon">
                  <BsSearch />
                </div>
              </div>
            </div>
            <div
              className="AddProduct"
              onClick={() => {
                setbutton(true);
              }}
            >
              + add Product
            </div>
          </div>

          <div className="content">
            <div className="laptopconteiner">
              <div className="headDesign">
                <p className="heding2">Laptops</p>
              </div>
              <div className="slider">
                <Laptopslider />
              </div>
            </div>

            <div className="laptopconteiner">
              <div className="headDesign">
                <p className="heding2">Desktop</p>
              </div>
              <div className="slider">
                <Laptopslider />
              </div>
            </div>

            <div className="headingContainer">
              <div className="headDesign">
                <p className="heding2">Hardwer</p>
              </div>
              <div className="slider">
                <Laptopslider />
              </div>
            </div>

            <div className="popWindow">{popupwindow(button)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
