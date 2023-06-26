import React, { useState } from 'react'
import { json } from 'react-router-dom'

function PostapiMethod() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [city,setCity]=useState("")
    const [phone,setPhone]=useState("")
    function adduser()
    {
        let data={name,email,city,phone}
        fetch("http://localhost:3000/User",{
            method:"Post",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        }).then((res1)=>{
            res1.json().then((res2)=>console.log(res2))
        })
        console.log(name,email,city,phone)
    }
  return (
    <div>
        <h1>Add New User</h1>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <input type="text" placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)}/><br/><br/>
        <input type="text" placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/><br/>
        <button onClick={()=>adduser()}>Add Data</button>
    </div>
  )
}

export default PostapiMethod