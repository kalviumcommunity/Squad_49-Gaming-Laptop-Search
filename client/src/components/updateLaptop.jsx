import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './updateLaptop.css';

function UpdateLaptop() {
  const { id } = useParams();
  window.scrollTo(0,0)
  const [modelName, setModelName] = useState('');
  const [processor, setProcessor] = useState('');
  const [ram, setRam] = useState('');
  const [storage, setStorage] = useState('');
  const [internalGraphicCard, setInternalGraphicCard] = useState('');
  const [price, setPrice] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [buttonStatus,setButtonStatus] = useState(false)
  useEffect(() => {
    axios.get(`http://localhost:3000/update/${id}`)
      .then((response) => {
        const i = response.data;
        setModelName(i.ModelName);
        setProcessor(i.Processor);
        setRam(i.Ram);
        setStorage(i.Storage);
        setInternalGraphicCard(i.InternalGraphicCard);
        setPrice(i.Price);
        setImageLink(i.ImageLink);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const update = (e) => {
    alert('Data is Updated')
    e.preventDefault();
    setButtonStatus(true);
    const updatedData = {
      ModelName: modelName,
      Processor: processor,
      Ram: ram,
      Storage: storage,  
      InternalGraphicCard: internalGraphicCard,
      Price: price,
      ImageLink: imageLink,
    };
    axios.put(`http://localhost:3000/update/${id}`, updatedData)
      .then((i) =>console.log(i.data))
  };
  
  return (
    <div className="UpdateLaptop">
      <h1>Update Gaming Laptop details</h1>
      <form >
        <label>Model Name :</label><br /><input type="text" name='ModelName' value={modelName} onChange={(e) => setModelName(e.target.value)} /><br /><br /><br />
        <label>Processor :</label><br /><input type="text" name='Processor' value={processor} onChange={(e) => setProcessor(e.target.value)} /><br /><br /><br />
        <label>RAM :</label><br /><input type="text" name='Ram' value={ram} onChange={(e) => setRam(e.target.value)} /><br /><br /><br />
        <label>Storage :</label><br /><input type="text" name='Storage' value={storage} onChange={(e) => setStorage(e.target.value)} /><br /><br /><br />
        <label>Internal Graphic Card :</label><br /><input type="text" name='InternalGraphicCard' value={internalGraphicCard} onChange={(e) => setInternalGraphicCard(e.target.value)} /><br /><br /><br />
        <label>Price (₹) :</label><br /><input type="text" name='Price' value={price} onChange={(e) => setPrice(e.target.value)} /><br /><br /><br />
        <label>Image Link :</label><br /><input type='url' name='ImageLink' value={imageLink} onChange={(e) => setImageLink(e.target.value)} /><br /><br /><br />
        <button onClick={update} disabled={buttonStatus}>Update Gaming Laptop</button>
      </form>
    </div>
  );
}

export default UpdateLaptop;