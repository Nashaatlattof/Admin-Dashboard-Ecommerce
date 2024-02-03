import React, { useEffect, useRef } from 'react'

const Test = () => {

    const name = useRef("")
     console.log(document.querySelector(".test"));
    useEffect(() => {
       
    }, [])
  return (
    <div className='container'>
      
    <input></input>
    <p ref={name} className='test'>Ahmad</p>
    </div>
  )
}

export default Test 
