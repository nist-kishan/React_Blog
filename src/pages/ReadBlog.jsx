import React, { useEffect } from 'react';
import readBlogStyle from '../css/readBlog.module.css';
import { useData } from '../useContext/DataContext';

export default function ReadBlog() {
    const { selectedBlog } = useData();
    
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
                <button type="button" className={readBlogStyle.closeBtn}>
                    Close
                </button>
            </div>
        </article>
    );
}
