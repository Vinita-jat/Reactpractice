import React, { useEffect, useState } from 'react'
import { Cartstate } from './Context'
import ListGroup  from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
function Cart() {
  const {state:{cart},dispatch, }= Cartstate()
  const [total,setTotal] =useState([])
  useEffect(()=>{
    setTotal(
      cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0)
    )
  },[cart])
  return (
    <div className='d-flex flex-row'>
      <ListGroup>
        {cart.map((prod)=> (
          <ListGroup.Item key={prod.id}>
            <Row>
              <Col md={2}>
                <img src={prod.image} alt={prod.name} className='img-fluid rounded'/>
              </Col>
              <Col md={2}>
                <span>{prod.name}</span>
              </Col>
              <Col md={2}>
                <span> $ {prod.price}</span>
              </Col>
              <Col md={2}>
               <Form.Select aria-label="Default select example"
               value={prod.qty} onChange={(e)=>dispatch({
                type:"changecartqty",
                payload:{id:prod.id,qty:e.target.value,},
               })}>
                {[...Array(prod.stock).keys()].map((x)=>(
                  <option key={x+1}>{x+1}</option>
                ))}
               </Form.Select>
              </Col>
              <Col md={2}>
                <i class="fa-solid fa-trash" onClick={()=>dispatch({type:"removefromcart",payload:prod})}></i>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className='bg-dark text-white fs-5 p-4'>
        <span className='mt-4'>Subtotal ({cart.length}) item(s)</span><br/><br/>
        <span className='mt-4'>Total: $ {total}</span><br/><br/>
        <button disabled={cart.length===0} className='mt-4 br-primary text-whit'>Proceed To
        Checkout</button>
      </div>
    </div>
  )
}

export default Cart