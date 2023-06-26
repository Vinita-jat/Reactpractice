import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Cartstate } from './Context';
function Filters() {
  const {productDispatch,productState:{stock,sort},}=Cartstate()
  return (
    <div className='bg-dark text-white mt-2 p-4 fs-5'>
       <Form>
      {[ 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={'Ascending'}
            name='r1'
            onChange={()=>productDispatch({
              type:"sortbyprice",
              payload:"lowToHigh"
            })}
            checked={sort==="lowToHigh"?true:false}
          />
          <Form.Check
            type={type}
            label={'Descending'}
            id={`disabled-default-${type}`}
            name='r1'
            onChange={()=>productDispatch({
              type:"sortbyprice",
              payload:"highToLow"
            })}
            checked={sort==="hightToLow"?true:false}
          />
        </div>
      ))}
    </Form>
    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={'Out of Stock'}
            onChange={()=>productDispatch({
              type:"filterbystock"
            })}
            checked={stock}
          />
        </div>
      ))}
    </Form>
    <Button variant="secondary" className='fs-4 mt-4'
    onClick={()=>productDispatch({
      type:"clearfilters"
    })}
    >Clear Filters</Button>{''}
    </div>
  )
}

export default Filters