import React from 'react'
import css from "./Hero.module.css"
const Hero = () => {
  return (
    <div className={css.Container}> 
    <title >My Second assignment</title>
    
    <main className={css.main}>
      <h1 className={css.h1}>Welcome!</h1>
      <p className={css.p}>This is my Hero Section</p>

    </main>
    </div>
  )
}

export default Hero
