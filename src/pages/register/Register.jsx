import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter Your Username....." />
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter Your Email....." />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter Your Password....." /> 
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
    </div>
  )
}
