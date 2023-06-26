import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Cartstate } from './Context';

function Products({prod}) {
  const {state:{cart},dispatch}=Cartstate()
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <h6>{prod.name}</h6>
        <Card.Text>
          {prod.desc}<br/>
          ${prod.price}
        </Card.Text>
        {cart.some((p)=>p.id===prod.id)?(<Button variant="danger" disabled={!prod.stock} 
        onClick={()=>dispatch({
          type:"removefromcart",
          payload:prod,
        })}>Remove</Button>):(<Button variant="primary" disabled={!prod.stock} 
        onClick={()=>dispatch({
          type:"addtocart",
          payload:prod,
        })}>
          {!prod.stock?"Out of Stock":"Add to Cart"}</Button>)}
      </Card.Body>
    </Card>
    </div>
  )
}

export default Products