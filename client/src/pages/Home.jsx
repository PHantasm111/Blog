import React from 'react'
import { Link } from 'react-router-dom';
import img2 from "../img/images2.jpg"
import img3 from "../img/images3.jpg"
import img4 from "../img/images4.jpg"
import img5 from "../img/images5.jpg"

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Exploring the Mountains",
      desc: "A journey through the rocky mountains and the adventures that await.",
      img: img2
    },
    {
      id: 2,
      title: "The Art of Cooking",
      desc: "Delve into the world of culinary arts and discover new recipes.",
      img: img2
    },
    {
      id: 3,
      title: "Tech Innovations 2024",
      desc: "An overview of the latest technological advancements and gadgets.",
      img: img3
    },
    {
      id: 4,
      title: "Travel Guide: Paris",
      desc: "Discover the hidden gems and famous landmarks of Paris.",
      img: img4
    },
    {
      id: 5,
      title: "Healthy Living Tips",
      desc: "Tips and tricks to maintain a healthy lifestyle and well-being.",
      img: img5
    }
  ];
  
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home