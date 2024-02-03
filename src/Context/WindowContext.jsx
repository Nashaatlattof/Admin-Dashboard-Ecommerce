import React, { createContext, useEffect, useState } from 'react'

export const Window= createContext("");

const WindowContext = ({children}) => {
const[windowSize, setWindowSize]= useState(window.innerWidth)

useEffect(() => {
    /* function setWindow () {
        setWindowSize(window.innerWidth);
    } */
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));

    return () => {
        window.removeEventListener("resize", () =>
          setWindowSize(window.innerWidth)
        );
    }
}, [])
  return (
    <Window.Provider value={{ windowSize, setWindowSize }}>
      {children}
    </Window.Provider>
  );
}

export default WindowContext
