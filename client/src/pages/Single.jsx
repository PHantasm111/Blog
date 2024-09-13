import React from 'react'
import img1 from '../img/images2.jpg'
import img2 from '../img/images3.jpg'
import edit from '../img/edit.svg'
import del from '../img/delete.svg'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src={img1} alt="" />
        <div className="user">
          <img src={img2} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          {/* if we are editor : */}
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={edit} alt="" />
            </Link>
            <img src={del} alt="" />
          </div>
        </div>

        <h1>Exploring the Wonders of Nature</h1>
        <p>Nature has always been a source of inspiration and wonder for humanity. The intricate patterns of leaves, the vibrant colors of flowers, and the harmonious sounds of a forest are just a few examples of the beauty that surrounds us. 
          Every walk in the woods, every hike up a mountain, and every moment spent by the ocean can bring a sense of peace and connection to the natural world. In these moments, we are reminded of the delicate balance of ecosystems and the importance of preserving our environment for future generations. Whether it's the grandeur of a national park or the simple joy of a backyard garden, nature's wonders are always there to be discovered and cherished.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single