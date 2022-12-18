import './Register.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import logo2 from './items/bilkent-logo.png';

import {useState, useEffect} from 'react';

import axios from 'axios'

// All the request will be sended here
const api = axios.create({
    baseURL: "http://localhost:5000"
})

// Regex Validation
const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/*
    registerc classes will be
*/

function Register() {

    let handleSubmit = async (email, password) =>{
        let res = await api.post("/register", {"email": email, "password":password} )
        return res
    } 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [bilkent, setBilkentId] = useState(0)

    function submit(){

        //alert("sda")
        console.log("Email is: " , email)
        console.log("Password is: ", password)

        if(!email.match(validEmailRegex)){
            console.log("Not Valid Mail Address")
            return
        }
        let res = handleSubmit(email, password)
    }


  return(
    <div>
        <Container className = 'registerCont2'>
            <Row>
                <Col style={{maxWidth: "10vw", marginLeft: "1.5vw"}}>
                    <img src={logo2} className="Bilkent-Logo-login" alt='bilkent logo'/>
                </Col>
                <Col>
                    <Row>
                        <Form.Text style={{fontSize:"60px", fontWeight: "bold"}}>Bilkent University</Form.Text>
                    </Row>
                    <Row> 
                        <Form.Text style={{fontSize:"25px", fontWeight: "bold"}}>ErasmusPlus</Form.Text>
                    </Row>
                </Col>
            </Row>   
        </Container>
        <Container className = 'registerCont'>
            <Form>
                <Form.Group as = {Row} controlId="formBasicEmail">
                    <Col className = "registerCol"><Form.Label style={{marginTop: "4.7vh"}}>Email</Form.Label></Col>
                    <Col className = "registerCol"><Form.Control style={{maxWidth:"10vw", minWidth:"11vw"}} className = "standardTxtInput" type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/></Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formBasicPassword">
                    <Col className = "registerCol"><Form.Label style={{marginTop: "4.7vh"}}>Password</Form.Label></Col>
                    <Col className = "registerCol"><Form.Control style={{maxWidth:"10vw", minWidth:"11vw"}} className = "standardTxtInput" type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} /></Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formBasicPassword">
                    <Col className = "registerCol"><Form.Label style={{marginTop: "4.7vh"}}>Confirm Password</Form.Label></Col>
                    <Col className = "registerCol"><Form.Control style={{maxWidth:"10vw", minWidth:"11vw"}} className = "standardTxtInput" type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} /></Col>
                </Form.Group>
                
                <Button variant="primary" className = "customBtn" onClick={() => {submit()}} >
                    Register
                </Button>
            </Form>        
        </Container>
    </div>);
}
export default Register;