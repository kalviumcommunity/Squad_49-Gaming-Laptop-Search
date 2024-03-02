import React, { useState ,useEffect} from 'react'
import './laptopList.css'
import { Link } from 'react-router-dom'

function laptopsList() {
  const [laptopData,setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/laptops_api').then(i=>i.json()).then(j=>setData(j))
  },[])
  // console.log(laptopData)
  const deleteData = (id)=>{
    fetch('http://localhost:3000/laptops_api/'+id,{
      method:'DELETE'
    }).then(window.location.href="/")
  }
  return (
    <div>
      <Link to='/addLaptop'><button id='adder'>Add a Gaming Laptop</button></Link>
      <br /><br />
      <div id='laptopList'>
      {laptopData.map((a,i)=>{
        return(
          <div id='boxes'>
            <br /><br /><br />
            <img src={a.ImageLink} id="laptopImg" />
            <h2>{a.ModelName}</h2>
            <h4>Specifications</h4>
            <p>{a.Processor} <br /> {a.Ram} Ram <br /> {a.Storage} Storage <br /> {a.InternalGraphicCard} </p>
            <h4>Price - {a.Price}</h4>
            <Link to={`/update/${a._id}`} ><button id='update'>Update</button></Link> <button id='delete' onClick={(e)=>deleteData(a._id)}>Delete</button>
            <br /><br />
          </div>
        )
      })}
      
    </div>
    </div>
    
  )
}

export default laptopsList