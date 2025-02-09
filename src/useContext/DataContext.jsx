import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [newBlog, setNewBlog] = useState([]);
  const [allBlog, setAllBlog] = useState([]);
  // const [selectedBlog, setSelectedBlog] = useState({
  //   id:"",heading: "", category: "", content: "", date: "", author: {
  //     name: "", email: "", qualification: "", image: "", countryCode: "",
  //   }
  // });

  useEffect(() => {
    fetch("./data/blog.json")
      .then((response) => response.json())
      .then((data) => {
        setAllBlog(data)
        console.log(data)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <DataContext.Provider value={{ newBlog, setNewBlog, allBlog, setAllBlog, }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext);