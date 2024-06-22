import { Link } from 'react-router-dom'
import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img className="postImg"
        src="https://4kwallpapers.com/images/wallpapers/couple-beach-romantic-together-star-trails-surreal-seascape-3840x2160-6681.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link className='link' to="/post/:postId">Lorem ipsum, dolor sit amet</Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi totam nam sequi. Id sunt, sequi corrupti est et consequatur omnis, quo ipsa iste, provident atque? Ratione nulla quod quia beatae!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi totam nam sequi. Id sunt, sequi corrupti est et consequatur omnis, quo ipsa iste, provident atque? Ratione nulla quod quia beatae!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi totam nam sequi. Id sunt, sequi corrupti est et consequatur omnis, quo ipsa iste, provident atque? Ratione nulla quod quia beatae!
        Lorem ipsum dolor sit amet consectetur, sequi corrupti est et consequatur omnis, quo ipsa iste, provident atque? Ratione nulla quod quia beatae!
      </p>
    </div>
  )
}
