import React from "react";
import "./Card.css";
import { BiStopwatch } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';

function Card({ name, image, ingredients, recipeDetails, prepHours, numberOfPeople, id }) {
  const handleClick = () => {
    if (document.getElementById(id).classList.contains("closed")) {
      document.getElementById(id).classList.remove("closed");
    } else {
      document.getElementById(id).classList.add("closed");
    }
  }

  return (
    <div class="closed card-box" id={id}>
      <header id="toggle"  onClick={handleClick} >
        <div className="header">
          <img src={image} />
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "-240px"}}>
          <div className="icons-div icon-div-right">
            <BiStopwatch size={25} color="black" />
            <p style={{fontSize:"12px",  marginBottom: 0, fontWeight: "bold"}}>{prepHours}</p>
          </div>
          <div className="icons-div icon-div-left">
            <BsFillPeopleFill size={25} color="black" />
            <p style={{fontSize:"15px", marginBottom: 0, fontWeight: "bold", marginTop: "3px"}}>{numberOfPeople}</p>
          </div>
        </div>
        <div id="card-box-name" class="title">{name}</div>
        <button id="card-box-button" style={{width: "100%", backgroundColor: "black", borderColor:"black", color:"white"}}>Tarifi Gör </button>
      </header>
      <article>
        <ul class="ingredients">
          {
            // JSON dosyasındaki ingredients bölümündeki stringi '\n' karakterine göre parse edip ingredients adında bir array ile Card componentına gönderildiğini varsaydım. 
            ingredients.map(item => (
              <li key={item}> 
                <div class="amount">{item}</div>
              </li>
            ))
          }
        </ul>
        <div class="preperation"> 
          <ul>
            {
              recipeDetails.map(item => (
                <li key={item}>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>
      </article>
  </div>
  );
}

export default Card;
