import React from "react"
import { Link } from "react-router-dom"

const Card = ({ item: { id, cover, catgeory, title, time } }) => {
  return (
    <div className='box'>
      <div className='img'>
        <img src={cover} alt='' />
      </div>
      <div className='text'>
        <span className='category'>{catgeory}</span>
        <Link to={`/SinglePage/${id}`}>
          <h1 className='titleBg'>{title}</h1>
        </Link>
        <div className='time'>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}

export default Card