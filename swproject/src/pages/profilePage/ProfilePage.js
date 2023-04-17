import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Navbarx from "../../Components/navbar/navbar";

function Profile() {
  const [foods, setFoods] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/yemekdeneme.json")
      .then(response => response.json())
      .then(data => setFoods(data))
      .catch(error => console.log(error));
    fetch("/user_data.json")
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="row">
        <Navbarx />
      </div>
      <div className="row" style={{ width: "100%", height: "850px", marginTop: "100px" }}>
        <div className="col-8">
          <div className="row">
            {foods.slice(0, 3).map(food => (
              <div className="col-4" key={food.id}>
                <Card name={food.name} image={food.image} />
              </div>
            ))}
          </div>
          <div className="row">
            {foods.slice(3, 6).map(food => (
              <div className="col-4" key={food.id}>
                <Card name={food.name} image={food.image} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-4 ">
          <div className="card"style={{backgroundColor:"#f5deb3"}}>
            <div className="card-body">
              <h5 className="card-title">Kullanıcı Bilgileri</h5>
              <div className="card-text">
                <p className="mt-5"style={{textAlign:"left"}}>Cinsiyet: {user.gender}</p>
                <p className="mt-5"style={{textAlign:"left"}}>Kilo: {user.weight}</p>
                <p className="mt-5"style={{textAlign:"left"}}>Boy: {user.height}</p>
                <p className="mt-5"style={{textAlign:"left"}}>Doğum Tarihi: {user.birthDate}</p>
                <p className="mt-5"style={{textAlign:"left"}}>Hedef Kilo: {user.goalWeight}</p>
                <p className="mt-5"style={{textAlign:"left"}}>Email Adresi: {user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
