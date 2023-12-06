// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

export default function notFound() {
  return (
    <>
    <div className='info'>
        <p>Error 404</p>
        <Link to={'/'}>
            <button>Back to home</button>
        </Link>
    </div>
    
    </>
  )
}
