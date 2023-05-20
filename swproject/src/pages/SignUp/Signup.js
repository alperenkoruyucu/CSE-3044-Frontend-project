import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import React from 'react';
function Signup() {
  return (
    <div className='SignUpPage'>
        <div className='SignUpContainer'>
            <Form>
                <h1>Kayıt ol</h1>
                <Form.Group className="mb-3 text-align-left">
                    <Form.Label >Ad</Form.Label>
                        <Form.Control type="text" placeholder="Adınızı giriniz" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Soyad</Form.Label>
                    <Form.Control type="text" placeholder="Soyadınızı giriniz" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Yaşınızı giriniz" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Boy</Form.Label>
                    <Form.Control type="number" placeholder="Boyunuzu cm cinsinden giriniz" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Kilo</Form.Label>
                    <Form.Control type="number" placeholder="Kilonuzu kg cinsinden giriniz" />
                </Form.Group>
                <label className='mb-3' htmlfor="inlineCheckbox1">Choose your gender:</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlfor="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlfor="inlineRadio1">Female</label>
                    </div>
                <form className='mb-3'>
                    <label htmlFor="aktiflik-seviyesi">Aktiflik Seviyesi:</label>
                    <select id="aktiflik-seviyesi" name="aktiflik-seviyesi">
                        <option value="cok-hareketli">Çok Hareketli</option>
                        <option value="orta-hareketli">Orta Hareketli</option>
                        <option value="az-hareketli">Az Hareketli</option>
                    </select>
                    </form>
                    <form className='mb-3'>
                        <label htmlFor="password">Şifre:</label>
                    </form>
                    <form className='mb-3'>
                        <input type="password" id="password" name="password"/>
                    </form>
                    <form className='mb-3'>
                        <label htmlFor="confirm-password">Şifre Tekrar:</label>
                    </form>
                    <form className='mb-3'>
                        <input type="password" id="confirm-password" name="confirm-password"/>
                    </form>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        {/* <div className='Footer'>    
            <h1></h1>

        </div> */}
    </div>
  );
}

export default Signup;