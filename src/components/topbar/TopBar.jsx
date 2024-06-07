import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-x-twitter"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem"><Link className="link" to="/">{user && "LOGOUT"}</Link></li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <Link className='link' to="/settings">
              <img 
                className="topImg"
                src="https://4kwallpapers.com/images/wallpapers/malia-baker-8k-3840x2160-16748.jpg" 
                alt="" 
              />
              </Link>
            ) : (
              <ul className='topList'>
                <li className='topListItem'><Link className="link" to="/login">LOGIN</Link></li>
              <li className='topListItem'><Link className="link" to="/register">REGISTER</Link></li>
              </ul>
            )
          }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
