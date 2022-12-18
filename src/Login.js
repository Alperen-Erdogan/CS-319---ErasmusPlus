import './Login.css';
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
    Loginc classes will be
*/

function Login() {
    let handleSubmit = async (email, password) =>{
        try{
            let res = await api.post("/login", {"email": email, "password":password} )
            return res
        }catch(e){
            alert("Password or Email is Wrong")
        }
       
    } 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [href, setHref] = useState("")

    const submit = (e) =>{
        e.preventDefault()

        alert("Submit Worked")
        setHref("/")

        //alert("sda")
        console.log("Email is: " , email)
        console.log("Password is: ", password)

        if(!email.match(validEmailRegex)){
            console.log("Not Valid Mail Address")
            setHref("/")
            return
        }
        let res = handleSubmit(email, password)
        
        let isSuccesfull = res.body.isSuccesfull

        
        if(isSuccesfull){
            setHref("/MyProfilePage")
        }
        
        else{
            setHref("/")
        }
    }


  return(
    <div>
        <Container className = 'loginCont2'>
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
        
        <Container className = 'loginCont'>
            <Form>
                <Form.Group as = {Row} controlId="formBasicEmail">
                    <Col className = "loginCol"><Form.Label style={{marginTop: "5vh"}}>Email</Form.Label></Col>
                    <Col className = "loginCol"><Form.Control style={{maxWidth:"10vw", minWidth:"11vw"}} className = "standardTxtInput" type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/></Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formBasicPassword">
                    <Col className = "loginCol"><Form.Label style={{marginTop: "5vh"}}>Password</Form.Label></Col>
                    <Col className = "loginCol"><Form.Control style={{maxWidth:"10vw", minWidth:"11vw"}} className = "standardTxtInput" type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} /></Col>
                </Form.Group>
                <Row style={{marginTop: "1vh"}}>
                    <Col className = "loginCol">
                        <Button variant="primary" className = "customBtn" onClick={() => {submit()}} href={href} >
                            Login
                        </Button>
                    </Col>
                    <Col className = "loginCol" style={{marginLeft:"9.4vw"}}>
                        <Button variant="primary" className = "customBtn" /*onClick={() => {submit()}} href={href }  TO DO*/  href='/Register'>
                            Register
                        </Button>
                    </Col>
                </Row>
            </Form>        
        </Container>
    </div>);
}
export default Login;