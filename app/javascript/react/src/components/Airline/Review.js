import React from 'react'

const Review = (props) => {
  const { score, title, description } = props.attributes
  return (
    <div className='r-card' style={{margin: 10 + 'px', border: 2 + 'px solid black' }}>
      <div className='r-container'>
        <div className='r-score'>score: {score}</div>
      </div>
      <div className='r-title'>title: {title}</div>
      <div className='r-description'>description: {description}</div>
    </div>
  )
}

export default Review