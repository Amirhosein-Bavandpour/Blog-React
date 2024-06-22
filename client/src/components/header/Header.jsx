import './header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://4kwallpapers.com/images/wallpapers/gta-6-teaser-3840x2160-13559.png"
        alt=""
      />
    </div>
  )
}