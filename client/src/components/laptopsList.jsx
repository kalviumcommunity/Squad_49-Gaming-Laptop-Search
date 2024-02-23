import React from 'react'
import laptopData from "./laptopData.json"

function laptopsList() {
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