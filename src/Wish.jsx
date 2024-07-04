import React, { useEffect, useState } from 'react'
import baloonGold from "./assets/baloonGold.png"

export const Wish = () => {
  const [showBallon, setShowBallon] = useState(false)
  useEffect(() => {
    const showTimer =
      setTimeout(() => {
        setShowBallon(true)
      }, 1000);

    const hideTimer =
      setTimeout(() => {
        setShowBallon(false)
      }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    }

  }, [])
  return (
    <div className="absolute bottom-4 overflow-hidden ">{
      showBallon && <>
        <img src={baloonGold} alt="floating img" className=' w-[60%] animate-bounce'/>
      </>
    }
    </div>
  )
}
