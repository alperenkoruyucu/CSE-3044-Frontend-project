import React, { useState, useEffect } from "react";
function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("/user_data.json")
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
<div style={{justifyContent:"center"}}>
  <div className="card" style={{ backgroundColor: "darkblue", alignItems: "center", height: "100%", marginTop: "80px" ,width:"50%",marginLeft:"25%"}}>
    <div className="card-body" style={{ width: "100%" }}>
      <h5 className="card-title" style={{ color: "white" }}>Kullanıcı Bilgileri</h5>
      <div className="card-text" style={{ width: "100%" }}>
        <div className="form-group row" style={{ paddingLeft: "10%", marginTop: "20px" }}>
          <label htmlFor="nameInput" className="col-sm-2 col-form-label" style={{ color: "white" }}><strong>Ad:</strong></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="nameInput" style={{ width: "50%", marginLeft: "15%" }} value={user.name} readOnly />
          </div>
        </div>
        <div className="form-group row" style={{ paddingLeft: "10%", marginTop: "20px" }}>
          <label htmlFor="surnameInput" className="col-sm-2 col-form-label" style={{ color: "white" }}><strong>Soyad:</strong></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="surnameInput" style={{ width: "50%", marginLeft: "15%" }} value={user.surname} readOnly />
          </div>
        </div>
        <div className="form-group row" style={{ paddingLeft: "10%", marginTop: "20px" }}>
          <label htmlFor="emailInput" className="col-sm-2 col-form-label" style={{ color: "white" }}><strong>Email Adresi:</strong></label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="emailInput" style={{ width: "50%", marginLeft: "15%" }} value={user.email} readOnly />
          </div>
        </div>
        <div className="form-group row" style={{ paddingLeft: "10%", marginTop: "20px" }}>
          <label htmlFor="birthDateInput" className="col-sm-2 col-form-label" style={{ color: "white" }}><strong>Doğum Tarihi:</strong></label>
          <div className="col-sm-10">
            <input type="date" className="form-control" id="birthDateInput" style={{ width: "50%", marginLeft: "15%" }} value={user.birthDate} readOnly />
          </div>
        </div>
        <div className="form-group row" style={{ paddingLeft: "10%", marginTop: "20px" }}>
          <label htmlFor="heightInput" className="col-sm-2 col-form-label" style={{ color: "white" }}><strong>Boy:</strong></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="heightInput" style={{ width: "50%", marginLeft: "15%" }} value={user.height} readOnly />
          </div>
        </div>
        <div className="form-group row" style={{ paddingLeft: "10%", marginTop: "20px" }}>
          <label htmlFor="weightInput" className="col-sm-2 col-form-label" style={{ color: "white" }}><strong>Kilo:</strong></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="weightInput" style={{ width: "50%", marginLeft: "15%" }} value={user.weight} readOnly />
          </div>
        </div>
        <div className="form-group row" style={{ paddingLeft: "10%", marginTop: "20px" }}>
          <label htmlFor="genderInput" className="col-sm-2 col-form-label" style={{ color: "white" }}><strong>Cinsiyet:</strong></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="genderInput" style={{ width: "50%", marginLeft: "15%" }} value={user.gender} readOnly />
          </div>
        </div>
        <div className="form-group row" style={{ paddingLeft: "10%", marginTop: "20px" }}>
          <label htmlFor="aktiflikInput" className="col-sm-2 col-form-label" style={{ color: "white" }}><strong>Aktiflik Seviyesi:</strong></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="aktiflikInput" style={{ width: "50%", marginLeft: "15%" }} value={user.aktiflik} readOnly />
          </div>
        </div>
        <button className="btn btn-primary mt-5">Kullanıcı bilgilerini güncelle</button>
      </div>
    </div>
  </div>
</div>




    </>
  );
}

export default Profile;
