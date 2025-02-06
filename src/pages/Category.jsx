import React, { useEffect, useState } from 'react'
import CategoryCard from '../UI/CategoryCard'
import catoriesStyle from "../css/catories.module.css"

export default function Category() {
    const [categoryInfo,setcategoryInfo]=useState([])
    useEffect(()=>{
        fetch("/data/categories.json")
        .then((response)=>response.json())
        .then((data)=>{
            setcategoryInfo(data)
        })
        .catch((error)=>{
            console.log("error");
        })
    },[])

  return (  
    <div className={catoriesStyle.container}>
        {
            categoryInfo.map((data,index)=>(
                <CategoryCard data={data} key={index}/>
            ))
        }
    </div>
  )
}
