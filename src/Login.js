import './Login.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import {useState, useEffect} from 'react';

import axios from 'axios'

// All the request will be sended here
const api = axios.create({
    baseURL: "http://localhost:5000"
})

// Regex Validation
const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/*
    Loginc classes will be
*/

function Login() {

    let handleSubmit = async (email, password) =>{
        let res = await api.post("/login", {"email": email, "password":password} )
        return res
    } 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

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
        <Container className = 'loginCont'>
            <Form>
                <Form.Group as = {Row} controlId="formBasicEmail">
                    <Col className = "loginCol"><Form.Label>Email</Form.Label></Col>
                    <Col className = "loginCol"><Form.Control className = "standardTxtInput" type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/></Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formBasicPassword">
                    <Col className = "loginCol"><Form.Label>Password</Form.Label></Col>
                    <Col className = "loginCol"><Form.Control className = "standardTxtInput" type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} /></Col>
                </Form.Group>
                <Button variant="primary" className = "customBtn" onClick={() => {submit()}} >
                    Login
                </Button>
            </Form>        
        </Container>
    </div>);
}
export default Login;