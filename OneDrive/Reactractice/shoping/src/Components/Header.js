import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { BsCart3 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { Cartstate } from './Context';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';

function Header() {
  const {state:{cart},dispatch,prodctDispatch}=Cartstate()
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Online Shoping</Navbar.Brand>
          <Nav className="m-auto">
          <Form >
            <Form.Control
              type="search"
              placeholder="Search for a product"
              aria-label="Search"
              style={{width:"500px"}}
              onChange={(e)=>{prodctDispatch({
                type:"filterbysearch",
                payload:e.target.value,
              })
            }}
            />
          </Form>
          </Nav>
          <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
      <BsCart3 className='cart'/>          
        <Badge bg="success">{cart.length}</Badge>        
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"18rem",marginLeft:"-150px"}}>
        {cart.length>0?(
          <>
          {cart.map((prod)=>(
            <span key={prod.id} className='d-flex'>
              <img src={prod.image} alt={prod.name} className='h-25 w-25'/>
              <div className='d-flex'>
                <span>{prod.name}</span>
                <span>${prod.price}</span>
              </div>
              <i class="fa-solid fa-trash fs-5"
                onClick={() => dispatch({
                  type: "removefromcart",
                  payload: prod,
                })}></i>
            </span>
          ))}
          <Link to="/Cart">
            <Button variant='primary'>Go To Cart</Button>
          </Link>
          </>
        ):(<span>cart is empty</span>)}
      </Dropdown.Menu>
    </Dropdown>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header