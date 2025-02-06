import React, {useRef} from 'react'
import homeStyle from "../css/home.module.css"
import RecentCard from '../UI/RecentCard'
import {useNavigate} from 'react-router-dom'
import { useData } from '../useContext/DataContext'


export default function Home() {
    const searchRef = useRef();
    const navigate=useNavigate();
    const{allBlog}=useData();
    
    const handleCreateBlog = () => {
        navigate('/createBlog');
    }

    const handleSearchBlog = () => {
        searchRef.current.focus()
    }

    return (
        <>
            <section>
                <div className={homeStyle.createBlog}>
                    <p className={homeStyle.initPara}>
                        Are you interested in writing a blog?<br />
                        You can create your own blog by clicking on the "Create Blog"
                        button.
                    </p>
                    <button type="button" className={homeStyle.btnblog} id={homeStyle.createBtn} onClick={handleCreateBlog}>Create Blog</button>
                </div>

                <div className={homeStyle.readBlog}>
                    <p className={homeStyle.initPara}>
                        Are you intrigued by the idea of perusing blogs?<br />
                        There is an extensive array of blog collections tailored to various categories, depending on your
                        preferences
                    </p>
                    <button type="button" className={homeStyle.btnblog} id={homeStyle.searchBtn} onClick={handleSearchBlog}>Search Blog</button>
                </div>
            </section>

            <section className={homeStyle.block3}>
                <div className={homeStyle.recentBlog}>
                    <div className={homeStyle.containerBox}>
                        <h2>Recent Blog</h2>
                        <input type="text" className={homeStyle.searchBox} placeholder="Search your blog..." ref={searchRef} />
                    </div>
                    <div className={homeStyle.blogCard}>
                        {
                            allBlog.map((blogInfo, index) => (
                                <RecentCard blogInfo={blogInfo} key={index} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
