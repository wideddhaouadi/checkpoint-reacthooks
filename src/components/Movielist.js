import React from 'react'
import Moviecard from './Moviecard'

const Movielist = (props) => {
  return (
    <div className='container'>{props.films.map((el,i)=><Moviecard film={el}/>) }
    </div>
  )
}

export default Movielist