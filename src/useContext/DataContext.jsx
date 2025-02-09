import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const DataContext = createContext(null);

export default function DataProvider({ children }) {
  const [newBlog, setNewBlog] = useState([]);
  const [allBlog, setAllBlog] = useState([]);

  useEffect(() => {
    fetch("./data/blog.json")
      .then((response) => response.json())
      .then((data) => {
        {
          setAllBlog(data)
        }
      })
      .catch((e) => {
        console.log(e)
        setIsLoader(false);
      })

  }, [])

   return (
    <DataContext.Provider value={{ newBlog, setNewBlog, allBlog, setAllBlog }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  return useContext(DataContext);
};
