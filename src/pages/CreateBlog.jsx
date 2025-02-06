import React, { useEffect } from 'react'
import { useState } from 'react';
import createBlogStyle from "../css/createBlog.module.css"
import { useData } from '../useContext/DataContext';
export function CreateBlog() {
    const [selectedCountryCode, setSelectedCountryCode] = useState('IN');
    const [selectedImage, SetSelectedImage] = useState('./images/male.jpg');
    const [countryName, setCountryName] = useState([]);
    const [blogCategories, setBlogCategories] = useState([])
    const { allBlog } = useData();

    useEffect(() => {
        fetch("./data/countryFlag.json")
            .then((response) => response.json())
            .then((data) => {
                setCountryName(data)
            })
            .catch((e) => console.log(e))
    }, [])

    useEffect(() => {
        fetch("./data/Category.json")
            .then((response) => response.json())
            .then((data) => {
                setBlogCategories(data.categoryOption)
            })
            .catch((e) => console.log(e))
    }, [])

    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                SetSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleCountryChange = (event) => {
        setSelectedCountryCode(event.target.value);
    };

    const handleBlog = (e) => {
        e.preventDefault();
        console.log("clicked")
        const now = new Date();

        const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} `;
        const formData = {
            heading: e.target[6].value,
            description: e.target[7].value,
            category: e.target[5].value,
            content: e.target[8].value,
            date: formattedDate,
            readMore: "https://example.com/top-10-travel-destinations-2025",
            author: {
                name: e.target[0].value,
                email: e.target[1].value,
                qualification: e.target[2].value,
                image: selectedImage,
                countryCode: selectedCountryCode,
            }
        };
        allBlog.push(formData)
    }

    return (
        <>
            <article>
                <form encType="multipart/form-data" onSubmit={handleBlog}>
                    <div className={createBlogStyle.PersonDetails}>
                        <div className={createBlogStyle.userDetails}>
                            <div className={createBlogStyle.userName}>
                                <label>Full Name</label>
                                <input type="text" placeholder="Name your name" required />
                            </div>
                            <div className={createBlogStyle.email}>
                                <label>Email</label>
                                <input type="email" placeholder="email" required />
                            </div>
                            <div className={createBlogStyle.userStatus}>
                                <label>Qualification</label>
                                <input type="text" placeholder={createBlogStyle.Qualification} required />
                            </div>
                            <div className={createBlogStyle.userCountry}>
                                <label>Country</label>
                                <div className={createBlogStyle.countryCode}>
                                    <img src={`https://flagsapi.com/${selectedCountryCode}/flat/64.png`} alt="Country Flag" id="flagImg" />
                                    <select value={selectedCountryCode} onChange={handleCountryChange}>
                                        {Object.values(countryName).map((country, index) => (
                                            <option key={index} value={country.code}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={createBlogStyle.writerImage}>
                            <img src={selectedImage} alt="profile Picture" id={createBlogStyle.setImage} />
                            <label htmlFor="upload" className={createBlogStyle.customFileUpload}>Upload Image</label>
                            <input type="file" id="upload" placeholder="Upload" accept="image/*" onChange={handleImage} />
                        </div>
                    </div>
                    <div className={createBlogStyle.blogDetail}>
                        <div className={createBlogStyle.blogCategory}>
                            <label>Category</label>
                            <select name="category" id={createBlogStyle.categories} required>
                                {blogCategories.map((Categories, index) => (
                                    <option key={index} value={Categories}>{Categories}</option>
                                ))}
                            </select>
                        </div>
                        <div className={createBlogStyle.blogInfo} id={createBlogStyle.blogHeading}>
                            <label>Heading of Your Blog</label>
                            <textarea id={createBlogStyle.heading} name='heading' placeholder="Heading of your Blog" maxLength="150"
                                required></textarea>
                        </div>
                        <div className={createBlogStyle.blogInfo} id={createBlogStyle.blogDescription}>
                            <label>Description</label>
                            <textarea id={createBlogStyle.description} placeholder="short description of your blog in 200 words.." maxLength="300" required></textarea>
                        </div>
                    </div>
                    <div className={createBlogStyle.blogBody}>
                        <label>Content</label>
                        <textarea id={createBlogStyle.blogContent} placeholder="Describe your blog without any word limitations" required></textarea>
                    </div>
                    <div className={createBlogStyle.btn}>
                        <div className={createBlogStyle.rulescheck}>
                            <div className={createBlogStyle.rule1}>
                                <input type="checkbox" id={createBlogStyle.rules} required />
                                <label htmlFor="rules" id={createBlogStyle.labelrules}>Please read the <a href="/rules">terms and condition</a>
                                    before posting your blog</label>
                            </div>
                            <div className={createBlogStyle.rule2}>
                                <input type="checkbox" id={createBlogStyle.decision} required />
                                <label htmlFor="decision" id={createBlogStyle.labelDecision}>Do you want to post this blog</label>
                            </div>
                        </div>
                        <button type="submit">Post</button>
                    </div>
                </form>
            </article>
        </>
    )
}


