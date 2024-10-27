import React from 'react'
import Link from 'next/link'

import style from "./navbar.module.css"
const navbar = () => {
  return (
    <div>
      <nav className={style.nav}>
        <ul className=".nav ul">
        <li className='.nav li'><Link href ="/">Home</Link></li>
        <li className='.nav li'><Link href ="/About" target='blanck'>About</Link></li>
        <li className='.nav li'><Link href ="/Contact"target='blanck' >Contect</Link></li>
        </ul>
      </nav>
      </div>
  )
}

export default navbar
