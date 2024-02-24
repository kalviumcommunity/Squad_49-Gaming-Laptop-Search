import React, { useState ,useEffect} from 'react'

function laptopsList() {
  const [laptopData,setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/laptops_api').then(i=>i.json()).then(j=>setData(j))
  },[])
  console.log(laptopData)
  return (
    <div>
      {laptopData.map((a,i)=>{
        return(
          <div>
            <h3>{a.modelName}</h3>
            <p>{a.processor}, {a.ram} Ram, {a.storage} Storage, {a.internalGraphicCard} </p>
            <h4>{a.price}</h4>
            <br /><br />
          </div>
        )
      })}
    </div>
  )
}

export default laptopsList