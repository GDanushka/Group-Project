import './Login.css';
import profile from "./../image/profile.png";
import Navbar from "../../../component/navbar/Navbar.jsx";
function Login() {
  return (
    <div>
      <div className="Main_Frame">
        <div>
        <Navbar></Navbar>
        </div>
        <div className="main">

      <div className="sub-main">
        <div>
           <div className="imgs">
           <div className="container-image">
           <img src={profile} alt="profile" className="profile"/>
           </div>
           </div>
            <div className="fist-input">
             <input type="text" placeholder="Username" className="name"/>
           </div>
           <div className="second-input">
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
            <button>Login</button>
          </div>
         </div>
       </div>       
      </div>
      </div>

    </div>
  );
}

export default Login;
