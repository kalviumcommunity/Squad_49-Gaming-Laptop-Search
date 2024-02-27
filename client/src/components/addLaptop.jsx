import React, { useState } from 'react';
import axios from 'axios';
import './addLaptop.css';

export default function AddLaptop() {
  const [modelName, setModelName] = useState('');
  const [processor, setProcessor] = useState('');
  const [ram, setRam] = useState('');
  const [storage, setStorage] = useState('');
  const [internalGraphicCard, setInternalGraphicCard] = useState('');
  const [price, setPrice] = useState('');
  const [imageLink,setImageLink] = useState('')

  const [buttonStatus,setButtonStatus] = useState(false)

  const addData = (e) => {
    if(!modelName || !processor || !ram || !storage || !internalGraphicCard || !price || !imageLink){
      alert('Please fill all the data required.')
    } else{
      e.preventDefault()
    setButtonStatus(true)
    console.log([modelName,processor,ram,storage,internalGraphicCard,price])
    axios.post('http://localhost:3000/add_laptop',{ModelName:modelName,Processor:processor,Ram:ram,Storage:storage,InternalGraphicCard:internalGraphicCard,Price: "₹ "+price,ImageLink:imageLink}).then(i=>console.log(i))
    setTimeout(()=>{
      window.location.href="/"
      setButtonStatus(false)
      alert('Data is Added Sucessfully')
    },2000)
    }
  };
  return (
    <div className="App">
      <h1>Enter all Gaming Laptop details</h1>
      <form>
        <label>Model Name :</label><br /><input type="text" name='modelName' value={modelName} onChange={(e) => setModelName(e.target.value)} /><br /><br /><br />
        <label>Processor :</label><br /><input type="text" name='processor' value={processor} onChange={(e) => setProcessor(e.target.value)} /><br /><br /><br />
        <label>RAM :</label><br /><input type="text" name='ram' value={ram} onChange={(e) => setRam(e.target.value)} /><br /><br /><br />
        <label>Storage :</label><br /><input type="text" name='storage' value={storage} onChange={(e) => setStorage(e.target.value)} /><br /><br /><br />
        <label>Internal Graphic Card :</label><br /><input type="text" name='internalGraphicCard' value={internalGraphicCard} onChange={(e) => setInternalGraphicCard(e.target.value)} /><br /><br /><br />
        <label>Price (₹) :</label><br /><input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} /><br /><br /><br />
        <label>Image Link :</label><br /><input type='url' name='imageLink' value={imageLink} onChange={(e) => setImageLink(e.target.value)} /><br /><br /><br />
        <button type="button" onClick={addData} disabled={buttonStatus}>Add Gaming Laptop</button>
      </form>
    </div>
  );
}
