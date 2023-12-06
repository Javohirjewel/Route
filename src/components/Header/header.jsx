// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./header.css"
export default function header() {
  return (
    <div className='header'>
      <ul>
        <li>
          <Link to={'/main/home'}>Home</Link>
        </li>
        <li>
          <Link to={'/main/about'}>About</Link>
        </li>
        <li>
          <Link to={'/main/blog'}>Blog</Link>
        </li>
      </ul>
    </div>

  )
}


