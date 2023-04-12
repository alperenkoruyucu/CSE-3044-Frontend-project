import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import React from 'react';
function Signup() {
  return (
    <div className='SignUpPage'>
        <div className='topBar'>
            <h1>Sign Up</h1>
        </div>
        <div className='SignUpContainer'>
            <Form>
                <h1>Kişisel Bilgilerim</h1>
                <label htmlfor="inlineCheckbox1">Choose your gender:</label>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className="form-check-label" htmlfor="inlineRadio1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className="form-check-label" htmlfor="inlineRadio1">Female</label>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Kilo</Form.Label>
                    <Form.Control type="number" placeholder="Kilonuzu kg cinsinden giriniz" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Boy</Form.Label>
                    <Form.Control type="number" placeholder="Boyunuzu cm cinsinden giriniz" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>doğum tarihiniz</Form.Label>
                    <Form.Control type="date" placeholder="GG/AA/YY" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Hedef Kilo</Form.Label>
                    <Form.Control type="number" placeholder="Ulaşmak istediğiniz ağırlığı kg cinsinden giriniz" />
                </Form.Group>
                <h1>Hesap Bilgileri</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
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