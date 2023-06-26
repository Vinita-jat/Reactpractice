import React from 'react'
import Header from './Header'
import Filters from './Filters'
import { Cartstate } from './Context'
import Products from './Products'
function Home() {
  const {state:{products},productState:{sort,stock,searchQuery}}=Cartstate()
  console.log(products)
  const transformproduct=()=>{
    let sortedproducts=products
    if(sort)
    {
      sortedproducts=sortedproducts.sort((a,b)=>
      sort==="lowToHigh"?a.price-b.price:b.price-a.price)
    }
    if(!stock)
    {
      sortedproducts=sortedproducts.filter((prod)=>prod.stock)
    }
    if(searchQuery)
    {
      sortedproducts=sortedproducts.filter((prod)=>prod.name.toLowerCase().
      includes(searchQuery))
    }
    return sortedproducts
  }
  return (
    <div>
     <Header/>
     <div className='row mt-2'>
      <div className='col-2'>
      <Filters/>
      </div>
      <div className='col-10 d-flex flex-row flex-wrap yrow-cols-1 row-cols-md-4 gap-2 '>
        {
          transformproduct().map((prod)=>{
            return (
              <Products prod={prod} key={prod.id}/>
            )
          })
        }
      </div>
     </div>
    </div>
  )
}

export default Home