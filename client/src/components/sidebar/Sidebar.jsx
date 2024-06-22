import './sidebar.css'

export default function Sidebar() {
  const user = true;
  return (
    <div>
      {user && (
        <div className='sidebar'>
          <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className='sidebarImg'
              src="https://4kwallpapers.com/images/wallpapers/malia-baker-5k-3840x2160-16752.jpg"
              alt=""
            />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, praesentium. Assumenda amet quam, vitae dolorem reprehenderit.</p>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sport</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li>
            </ul>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
              <i className="sidebarIcon fa-brands fa-facebook"></i>
              <i className="sidebarIcon fa-brands fa-x-twitter"></i>
              <i className="sidebarIcon fa-brands fa-pinterest"></i>
              <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>)}
    </div>
  )
}
