import React from 'react'
import recentCardStyle from "../css/recentCard.module.css"
import { useNavigate } from 'react-router-dom';


export default function RecentCard({ blogInfo }) {
  const navigate = useNavigate();
  const { _id, heading, category, content, date, author } = blogInfo;

  const handleReadMore = () => {
    localStorage.setItem('selectedBlog', JSON.stringify(blogInfo));
    navigate(`/readBlog/${_id}`, { state: blogInfo });
  }

  return (
    <div className={recentCardStyle.outerContainer}>
      <img src="https://th.bing.com/th/id/OIP.ebbtGVr_BwIh7X6lmjZ67wHaEK?rs=1&pid=ImgDetMain" className={recentCardStyle.blurImage} alt='Blur Image' />
      <div className={recentCardStyle.container}>
        <div className={recentCardStyle.writerDetails}>
          <img src={author.image} alt='Profile Picture' />
          <div className={recentCardStyle.aboutWriter}>
            <p>{author.name}</p>
          </div>
        </div>
        <div className={recentCardStyle.contentDetail}>
          <div className={recentCardStyle.header}>
            <h2>{heading}</h2>
            <div className={recentCardStyle.timeCategory}>
              <p className={recentCardStyle.underLine}>{category}</p>
              <em>{date}</em>
            </div>
          </div>
          <p className={recentCardStyle.content}>{content}</p>
          <div className={recentCardStyle.readmoreBox}>
            <ul>
              <li className={recentCardStyle.readMore} onClick={handleReadMore}>Read more</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
