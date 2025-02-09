import React, { useEffect, useState } from 'react';
import readBlogStyle from '../css/readBlog.module.css';
import { useNavigate } from 'react-router-dom';

export default function ReadBlog() {
    const navigate=useNavigate();
   const [selectedBlog,setSelectedblog]=useState(()=>{
    return JSON.parse(localStorage.getItem('selectedBlog'))
   });
   useEffect(() => {
    if (selectedBlog) {
      localStorage.setItem("selectedBlog", JSON.stringify(selectedBlog));
    }
  }, [selectedBlog]);
  
  useEffect(() => {
    return () => {
      localStorage.removeItem("selectedBlog");
    };
  }, []);
  
  const handleClose=()=>{
    navigate(-1);
  }
  
    return (
        <article>
            <div className={readBlogStyle.blurBackground}>
                <img src={`https://flagsapi.com/${selectedBlog.author.countryCode}/flat/64.png`}
                    alt="Country Flag"
                    className={readBlogStyle.countryImage}
                />

                <div className={readBlogStyle.PersonDetails}>
                    <div className={readBlogStyle.writerImage}>
                        <img src={selectedBlog.author.image} alt="Profile Picture" />
                    </div>
                    <div className={readBlogStyle.userDetails}>
                        <p className={readBlogStyle.outputName}>{selectedBlog.author.name}</p>
                        <p className={readBlogStyle.outputStatus}>{selectedBlog.author.qualification}</p>
                        <p>Date: {selectedBlog.date}</p>
                    </div>
                </div>
            </div>

            <div className={readBlogStyle.blogBody}>
                <div className={readBlogStyle.blogInfo}>
                    <p><b>Heading:</b> {selectedBlog.heading}</p>
                    <p><b>Category: </b>{selectedBlog.category}</p>
                </div>

                <div className={readBlogStyle.content}>
                    <pre className={readBlogStyle.contentIndentation}>{selectedBlog.content}</pre>
                </div>
            </div>

            <div className={readBlogStyle.btn}>
                <button type="button" className={readBlogStyle.closeBtn} onClick={handleClose}>
                    Close
                </button>
            </div>
        </article>
    );
}
