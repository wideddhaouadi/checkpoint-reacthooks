import React from 'react'

function Rating(props) {
    let stars=[]
    for (let i=0 ;i<5 ;i++){
        if (i<props.rate) {
            stars.push(<span className='sta'>★</span>)
            
        } else {
            stars.push(<span className='star' >★</span>)
            
        }
    }
  return (
    <div>{stars}</div>
  )
}

export default Rating