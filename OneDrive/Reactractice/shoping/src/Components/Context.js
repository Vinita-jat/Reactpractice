import React, { createContext,useContext, useReducer} from 'react'
import { cartReducer, productReducer } from './Reducers'
const Cart=createContext()
function Context({children}) {
  
  const grocery=[
    {
        id:1,
        image:"/images/01.jpg",
        name:'Coconut, Indonesia (piece)',
        desc:'Fruits and Vegetables',
        price:2.99,
        stock:10,
        qty:0
    },
    {
        id:2,
        image:"/images/02.jpg",
        name:'Soft Creme Cheese (200g)',
        desc:'Dairy and Eggs',
        price:3.99,
        stock:8,
        qty:0
    },
    {
        id:3,
        image:"/images/03.jpg",
        name:'Pepsi Soda Can (33ml)',
        desc:'Soft Drinks and Juice',
        price:1.00,
        stock:5,
        qty:0
    },
    {
        id:4,
        image:"/images/04.jpg",
        name:'Fresh Orange, Spain (1kg)',
        desc:'Fruits and Vegetables',
        price:1.75,
        stock:7,
        qty:0
    },
    {
        id:5,
        image:"/images/05.jpg",
        name:'Moisture Body Lotion',
        desc:'Personal hygiene',
        price:5.20,
        stock:8,
        qty:0
    },
    {
        id:6,
        image:"/images/06.jpg",
        name:'Nut Chocolate Paste (750g)',
        desc:'Snacks, Sweets and Chips',
        price:7.50,
        stock:6,
        qty:0
    },
    {
        id:7,
        image:"/images/07.jpg",
        name:'Mozzarella Mini Cheese',
        desc:'Dairy and Eggs',
        price:4.99,
        stock:5,
        qty:0
    },
    {
        id:8,
        image:"/images/08.jpg",
        name:'Mozzarella Cheese (125g)',
        desc:'Dairy and Eggs',
        price:4.30,
        stock:5,
        qty:0
    },
    {
        id:9,
        image:"/images/09.jpg",
        name:'Men’s Shampoo (400ml)',
        desc:'Personal hygiene',
        price:5.99,
        stock:8,
        qty:0
    },
    {
        id:10,
        image:"/images/10.jpg",
        name:'Frozen Oven-ready Poultry',
        desc:'Meat and Poultry',
        price:12.00,
        stock:7,
        qty:0
    },
    {
        id:11,
        image:"/images/11.jpg",
        name:'Dark Chocolate with Nuts',
        desc:'Snacks, Sweets and Chips',
        price:2.50,
        stock:6,
        qty:0
    },
    {
        id:12,
        image:"/images/12.jpg",
        name:'Corn Oil Bottle (500ml)',
        desc:'Canned Food and Oil',
        price:3.10,
        stock:4,
        qty:0
    },
    {
        id:13,
        image:"/images/13.jpg",
        name:'Steak Salmon Fillet (1kg)',
        desc:'Fish and Seafood',
        price:17.99,
        stock:9,
        qty:0
    },
    {
        id:14,
        image:"/images/14.jpg",
        name:'Sardine in Tomato Sauce',
        desc:'Canned Food and Oil',
        price:3.25,
        stock:7,
        qty:0
    },
    {
        id:15,
        image:"/images/15.jpg",
        name:'Italian Pasta (500g)',
        desc:'Packets, Cereals',
        price:2.99,
        stock:5,
        qty:0
    },
    {
        id:16,
        image:"/images/16.jpg",
        name:'Rice Cakes with Chia Seeds',
        desc:'Packets, Cereals',
        price:1.40,
        stock:4,
        qty:0
    }
]
const [state,dispatch]=useReducer(cartReducer,{
    products:grocery,
    cart:[]
})
const [productState,productDispatch]=useReducer(productReducer,{
    stock:false,
    searchQuery:""
})
  return (
    <Cart.Provider value={{state,dispatch, productState, productDispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context
export const Cartstate=()=>{
    return useContext(Cart)
}