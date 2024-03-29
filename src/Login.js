/* eslint-disable no-restricted-globals */
import './Login.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import logo2 from './items/bilkent-logo.png';
import { useHistory } from "react-router-dom";

import {useState, useEffect} from 'react';
import Redirect from "react-router-dom"
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
    let history = useHistory();

    useEffect(() => {
        localStorage.setItem("authenticated", false)
        setAuthenticated(false)
      }, []);

    //const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") || false)

    const handleSubmit = async () =>{
        try{
            let res = await api.post("/login", {"email": email, "password":password} )
            return res
        }catch(e){
            console.log("Something Went Wrong")
        }
       
    } 

    const submit = (e) =>{

        if(!email.match(validEmailRegex)){
            console.log("Not Valid Mail Address")
        }
        handleSubmit()
            .then(res => {
                console.log(res.data.token)
                console.log(res.data.message)
                console.log(res.data.user.firstName)
                //setName(res.data.user.name)

                localStorage.setItem("firstName", res.data.user.firstName)
                localStorage.setItem("lastName", res.data.user.lastName)
                localStorage.setItem("userType", res.data.user.userType)
                localStorage.setItem("email", res.data.user.email)
                localStorage.setItem("bilkentID", res.data.user.bilkentId)
                localStorage.setItem("doB", res.data.user.doB)
                localStorage.setItem("cgpa", res.data.user.cgpa)

                setAuthenticated(true) // It shows that it is authenticated
                localStorage.setItem("authenticated", true)
                history.push('/Dashboard')
                location.reload()
            })
            .catch(error => console.log(error))
    }

  return(
    <div>
        <Container className = 'loginCont2'>
            <Row>
                <Col style={{maxWidth: "27%", marginLeft: "8%"}}>
                    <img src={logo2} className="Bilkent-Logo-login" alt='bilkent logo'/>
                </Col>
                <Col>
                    <Row>
                        <Form.Text style={{fontSize:"300%", fontWeight: "bold"}}>Bilkent University</Form.Text>
                    </Row>
                    <Row> 
                        <Form.Text style={{fontSize:"140%", fontWeight: "bold"}}>ErasmusPlus</Form.Text>
                    </Row>
                </Col>
            </Row>   
        </Container>
        
        <Container className = 'loginCont'>
            <Form>
                <Form.Group as = {Row} controlId="formBasicEmail">
                    <Col className = "loginCol"><Form.Label style={{marginTop: "23%"}}>Email:</Form.Label></Col>
                    <Col className = "loginCol" style={{maxWidth:"60%", minWidth:"60%"}}><Form.Control className = "standardTxtInput" type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/></Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formBasicPassword">
                    <Col className = "loginCol"><Form.Label style={{marginTop: "23%"}}>Password:</Form.Label></Col>
                    <Col className = "loginCol" style={{maxWidth:"60%", minWidth:"60%"}}><Form.Control  className = "standardTxtInput" type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} /></Col>
                </Form.Group>
                <Row style={{marginTop: "5%"}}>
                    
                    <Col className = "loginCol">
                        <Button variant="secondary" className = "customBtn" href='/Register'>
                            Register
                        </Button>
                    </Col>
                    <Col className = "loginCol" style={{marginLeft:"61.5%"}}>
                        <Button variant="primary" className = "customBtn" onClick={() => {submit()}}>
                            Login
                        </Button>
                    </Col>
                </Row>
            </Form>        
        </Container>
    </div>);
}
export default Login;