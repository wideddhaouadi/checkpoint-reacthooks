import React from 'react'
import {Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import Rating from './Rating'


const Moviecard = ({film})=> {
  return (
    <div className='container'>
        <Card style={{ width: '18rem' }}>
  <Card.Img className='image' src={film.img} />
  <Card.Body>
    <Card.Title>{film.name}</Card.Title>

  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{film.réalisateur}</ListGroupItem>
    <ListGroupItem>{film.acteur}</ListGroupItem>
    <ListGroupItem><Rating rate={film.rating} /> </ListGroupItem>

  </ListGroup>
  <Card.Body>
    
    <Card.Link href={film.link}></Card.Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default Moviecard