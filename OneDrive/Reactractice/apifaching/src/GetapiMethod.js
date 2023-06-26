import React, { useEffect, useState } from 'react'

function GetapiMethod() {
    const [User,setUser]=useState([])
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [city,setCity]=useState()
    const [phone,setPhone]=useState()
    const [id,setId]=useState(null)
    useEffect(()=>{
   getusers()
},[])
   function selectuser(id)
   {
    let el=User[id-1]
    setName(el.name)
    setEmail(el.email)
    setCity(el.city)
    setPhone(el.phone)
    setId(el.id)
   }
   function updatedata()
   {
       let data={id,name,email,city,phone}
       fetch(`http://localhost:3000/User/${id}`,{
           method:"PUT",
           headers:{
               "Accept":"application/json",
               "Content-type":"application/json"
           },
           body:JSON.stringify(data)
       }).then((res1)=>{
           res1.json().then((res2)=>{
           console.log(res2)
           
               getusers()
           }
           )
       })
   }
   function getusers()
   {
    fetch("http://localhost:3000/User").then((result)=>{
  result.json().then((resp)=>{
      console.log(resp)
      setUser(resp)
      setName(resp[0].name)
      setEmail(resp[0].email)
      setCity(resp[0].city)
      setPhone(resp[0].phone)
      setId(resp[0].id)
  })
})
   }
   function deleteuser(id)
   {
    fetch(`http://localhost:3000/User/${id}`,{
           method:"DELETE",
       }).then((res1)=>{
           res1.json().then((res2)=>{
           console.log(res2)
               getusers()
           }
           )
       })
   }
  return (
    <div>
        <table border="2">
          <tr><th>Id</th><th>Name</th><th>Email</th><th>City</th><th>Phone</th></tr>
        <tbody>
           {
             User.map((items,i) =>{
                return(
                    <tr keys={i}>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.email}</td>
                        <td>{items.city}</td>
                        <td>{items.phone}</td>
                        <td><button onClick={()=>selectuser(items.id)}>Update</button></td>
                        <td><button onClick={()=>deleteuser(items.id)}>Delete</button></td>
                    </tr>
                )
            })
           }
        </tbody>
        </table>
        <h1>Update User</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <input type="text"  value={city} onChange={(e)=>setCity(e.target.value)}/><br/><br/>
        <input type="text"  value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/><br/>
        <button onClick={updatedata}>Update Data</button>
    </div>
  )
}

export default GetapiMethod