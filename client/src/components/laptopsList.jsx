import React, { useState, useEffect } from 'react';
import './laptopList.css';
import { Link } from 'react-router-dom';

function LaptopsList() {
  const [laptopData, setData] = useState([]);
  const [selUser, setSelUser] = useState("");
  const [usernameData, setUsernameData] = useState([]);
  const fetchLaptops = async () => {
    let apiUrl = "http://localhost:3000/laptops_api";
    if (selUser && selUser!=="Select Entity Adder") {
      apiUrl += `?Username=${selUser}`;
    }
      const response = await fetch(apiUrl);
      const data = await response.json();
      setData(data);
  };
  useEffect(() => {
    fetchLaptops();
  }, [selUser]);
  useEffect(() => {
    fetch("http://localhost:3000/login_data/username").then((i) => i.json()).then((j) => setUsernameData(j.Usernames))
  }, []);
  return (
    <div>
      <label id="label">View Gaming Laptops added by</label>
      <select name="created_by" id="creatorMenu" onChange={(e) => setSelUser(e.target.value)}>
        <option>Select Entity Adder</option>
        {usernameData.map((uname, i) => (
          <option key={i} value={uname}>
            {uname}
          </option>
        ))}
      </select>
      <Link to='/addLaptop'><button id='adder'>Add a Gaming Laptop</button></Link>
      <br /><br />
      <div id='laptopList'>
        {laptopData.length === 0 && <h1 id='noData'>No gaming laptops found for the selected user.</h1>}
        {laptopData.map((a, i) => (
          <div key={i} id='boxes'>
            <br /><br /><br />
            <img src={a.ImageLink} id="laptopImg" />
            <h2>{a.ModelName}</h2>
            <h4>Specifications</h4>
            <p>{a.Processor} <br /> {a.Ram} Ram <br /> {a.Storage} Storage <br /> {a.InternalGraphicCard} </p>
            <h4>Price - {a.Price}</h4>
            <Link to={`/update/${a._id}`}><button id='update'>Update</button></Link> <button id='delete' onClick={() => deleteData(a._id)}>Delete</button>
            <br /><br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LaptopsList;