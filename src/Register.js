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
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") || false)
    useEffect(() => {
        localStorage.setItem("authenticated", false)
        setAuthenticated(false)
      }, []);

    let handleSubmit = async (email, password, firstName, lastName, bilkentId, doB, cgpa) =>{
        let res = await api.post("/register", {"email": email, "password":password, 
                                    "firstName":firstName, "lastName":lastName, "bilkentId":bilkentId, "doB":doB, "cgpa":cgpa, "userType": userType })
        return res
    } 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [bilkentId, setBilkentId] = useState("")
    const [doB, setDoB] = useState("")
    const [cgpa, setCgpa] = useState("")
    const [userType, setUserType] = useState("Student")



    function submit(){  
        if(!email.match(validEmailRegex)){
            console.log("Not a Valid Mail Address")
            return
        }
        if(password === ("")){
            console.log("Not a Valid Password")
            return
        }
        if(firstName ===("")){
            console.log("Not a Valid First Name")
            return
        }
        if(lastName === ("")){
            console.log("Not a Valid Last Name")
            return
        }
        if(bilkentId === ("")){
            console.log("Not a Valid Bilkent ID")
            return
        }
        if(doB === ("")){
            console.log("Not a Valid Date of Birth")
            return
        }
        if(cgpa === ("")){
            console.log("Not a Valid CGPA")
            return
        }

        //alert("sda")
        console.log("Email is: " , email)
        console.log("Password is: ", password)
        console.log("First Name is : ", firstName)
        console.log("Last Name is: " , lastName)
        console.log("Bilkent ID is: " , bilkentId)
        console.log("Date of Birth is: ", doB)
        console.log("CGPA is: ", cgpa)


        let res = handleSubmit(email, password, firstName, lastName, bilkentId, doB, cgpa, userType);
    }


  return(
    <div>
        <Container className = 'registerCont2'>
            <Row>
                <Col style={{maxWidth: "25%", marginLeft: "3%"}}>
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
                    <Col className = "registerCol"><Form.Label style={{marginTop: "9%"}}>First Name:</Form.Label></Col>
                    <Col className = "registerCol"><Form.Control className = "standardTxtInput" type="firstName" placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)}/></Col>
                    <Col className = "registerCol"><Form.Label style={{marginTop: "9%"}}>Last Name:</Form.Label></Col>
                    <Col className = "registerCol"><Form.Control  className = "standardTxtInput" type="lastName" placeholder="Enter Last Name" onChange={e => setLastName(e.target.value)}/></Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formBasicPassword">
                    <Col className = "registerCol"><Form.Label style={{marginTop: "9%"}}>Email:</Form.Label></Col>
                    <Col className = "registerCol"><Form.Control  className = "standardTxtInput" type="email" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/></Col>
                    <Col className = "registerCol"><Form.Label style={{marginTop: "9%"}}>Bilkent ID:</Form.Label></Col>
                    <Col className = "registerCol"><Form.Control  className = "standardTxtInput" type="bilkentId" placeholder="Enter Bilkent ID" onChange={e => setBilkentId(e.target.value)}/></Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formBasicPassword">
                    <Col className = "registerCol"><Form.Label style={{marginTop: "9%"}}>Date of Birth:</Form.Label></Col>
                    <Col className = "registerCol"><Form.Control  className = "standardTxtInput" type="doB" placeholder="Enter Date of Birth" onChange={e => setDoB(e.target.value)}/></Col>
                    <Col className = "registerCol"><Form.Label style={{marginTop: "9%"}}>CGPA:</Form.Label></Col>
                    <Col className = "registerCol"><Form.Control  className = "standardTxtInput" type="cgpa" placeholder="Enter CGPA" onChange={e => setCgpa(e.target.value)}/></Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formBasicPassword">
                    <Col className = "registerCol"><Form.Label style={{marginTop: "5%", marginLeft: "50%"}}>Password:</Form.Label></Col>
                    <Col className = "registerCol"><Form.Control style={{maxWidth:"25%", minWidth:"%25"}} className = "standardTxtInput" type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/></Col>
                </Form.Group>
                
                <Row>
                    <Col style={{width: "100%"}} >    
                        <Button variant="secondary" className = "customBtn" href='/login'>
                            Back to Login
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{marginLeft: "72%"}} variant="primary" className = "customBtn" onClick={() => {submit()}} >
                            Register
                        </Button>
                    </Col>
                </Row>
                
                
            </Form>        
        </Container>
    </div>);
}
export default Register;