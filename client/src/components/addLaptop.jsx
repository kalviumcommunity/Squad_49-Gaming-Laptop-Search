import React, { useState } from "react";
import axios from "axios";
import "./addLaptop.css";
import Joi from "joi";

export default function AddLaptop() {
  const [modelName, setModelName] = useState("");
  const [processor, setProcessor] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [internalGraphicCard, setInternalGraphicCard] = useState("");
  const [price, setPrice] = useState("");
  const [imageLink, setImageLink] = useState("");

  const [buttonStatus, setButtonStatus] = useState(false);

  const schema = Joi.object({
    modelName: Joi.string().required(),
    processor: Joi.string().required(),
    ram: Joi.string().required(),
    storage: Joi.string().required(),
    internalGraphicCard: Joi.string().required(),
    price: Joi.number().required(),
    imageLink: Joi.string().uri().required(),
  });

  const addData = (e) => {
    e.preventDefault();
    const data = {modelName,processor,ram,storage,internalGraphicCard,price,imageLink}
    const { error } = schema.validate(data)
    if (error) {
      alert(`Please fix the following errors:\n\n ${error.details.map((x) => x.message).join("\n")}`);
    } else {
      setButtonStatus(true);
      axios.post("http://localhost:3000/add_laptop",{ModelName: modelName,Processor: processor,Ram: ram,Storage: storage,InternalGraphicCard: internalGraphicCard,Price: "₹ " + price,ImageLink: imageLink}).then((i) => console.log(i));
      setTimeout(() => {
        window.location.href = "/";
        setButtonStatus(false);
        alert("Data is Added Successfully");
      }, 2000);
    }
  };

  return (
    <div className="App">
      <h1>Enter all Gaming Laptop details</h1>
      <form>
        <label>Model Name :</label><br /><input type="text" name='modelName' value={modelName} onChange={(e) => setModelName(e.target.value)} /><br /><br />
        <label>Processor :</label><br /><input type="text" name='processor' value={processor} onChange={(e) => setProcessor(e.target.value)} /><br /><br />
        <label>RAM :</label><br /><input type="text" name='ram' value={ram} onChange={(e) => setRam(e.target.value)} /><br /><br />
        <label>Storage :</label><br /><input type="text" name='storage' value={storage} onChange={(e) => setStorage(e.target.value)} /><br /><br />
        <label>Internal Graphic Card :</label><br /><input type="text" name='internalGraphicCard' value={internalGraphicCard} onChange={(e) => setInternalGraphicCard(e.target.value)} /><br /><br />
        <label>Price (₹) :</label><br /><input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} /><br /><br />
        <label>Image Link :</label><br /><input type='url' name='imageLink' value={imageLink} onChange={(e) => setImageLink(e.target.value)} /><br /><br /><br /><br /><br />
        <button type="button" onClick={addData} disabled={buttonStatus} id="addButton">Add Gaming Laptop</button>
      </form>
    </div>
  );
}
