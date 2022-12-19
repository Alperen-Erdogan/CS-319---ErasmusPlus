import './EditProfile.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import pfp from './items/default-profile-photo.jpg'
import {PersonVcardFill} from 'react-bootstrap-icons/dist';

function EditProfile() {
  return (
    <div>
       <Container fluid className = 'editProfileCont'>
            <Row>
                <header style={{marginTop: "1%", marginLeft: "0.5%"}}><h3> <PersonVcardFill size={42}/><span>Profile Information</span></h3></header>
            </Row>
            <Row style = {{marginBottom: "5vh"}}>
                <Col className='pfpCol2'><Image src={pfp} className = "pfp2" style={{borderRadius: "50%", marginLeft: "3vw"}}/></Col>
            </Row>
            <Row>
                <Form>
                    <Form.Group as = {Row} className="standardTxtInput">
                        <Col className = "editProfileCol" style = {{marginTop: "5%", maxWidth: "24%", marginLeft: "3%", marginRight: "3%"}}><Form.Label>First Name</Form.Label></Col>
                        <Col className = "editProfileCol" style = {{maxWidth: "65%"}}><Form.Control className = "standardTxtInput" type="firstName" placeholder={localStorage.getItem("firstName")} /></Col>
                    </Form.Group>

                    <Form.Group as = {Row} className="standardTxtInput" controlId="formBasicPassword" >
                        <Col className = "editProfileCol" style = {{marginTop: "5%", maxWidth: "24%", marginLeft: "3%", marginRight: "3%"}}><Form.Label>Surname</Form.Label></Col>
                        <Col className = "editProfileCol" style = {{maxWidth: "65%"}}><Form.Control className = "standardTxtInput" type="surname" placeholder={localStorage.getItem("lastName")} /></Col>
                    </Form.Group>
                    
                    <Form.Group as = {Row} className="standardTxtInput">
                        <Col className = "editProfileCol" style = {{marginTop: "5%", maxWidth: "24%", marginLeft: "3%", marginRight: "3%"}}><Form.Label>Email</Form.Label></Col>
                        <Col className = "editProfileCol" style = {{maxWidth: "65%"}}><Form.Control disabled className = "standardTxtInput" type="email" placeholder= {localStorage.getItem("email")} /></Col>
                    </Form.Group>

                    <Form.Group as = {Row} className="standardTxtInput">
                        <Col className = "editProfileCol" style = {{marginTop: "5%", maxWidth: "24%", marginLeft: "3%", marginRight: "3%"}}><Form.Label>Bilkent ID</Form.Label></Col>
                        <Col className = "editProfileCol" style = {{maxWidth: "65%"}}><Form.Control className = "standardTxtInput" type="bilkentID" placeholder={localStorage.getItem("bilkentID")} /></Col>
                    </Form.Group>

                    <Form.Group as = {Row} className="standardTxtInput" controlId="formBasicPassword">
                        <Col className = "editProfileCol" style = {{marginTop: "5%", maxWidth: "24%", marginLeft: "3%", marginRight: "3%"}}><Form.Label>Date of Birth</Form.Label></Col>
                        <Col className = "editProfileCol" style = {{maxWidth: "65%"}}><Form.Control className = "standardTxtInput" type="dob" placeholder= {localStorage.getItem("doB")} /></Col>
                    </Form.Group>

                    <Form.Group as = {Row} className="standardTxtInput" controlId="formBasicPassword">
                        <Col className = "editProfileCol" style = {{marginTop: "5%", maxWidth: "24%", marginLeft: "3%", marginRight: "3%"}}><Form.Label>CGPA</Form.Label></Col>
                        <Col  className = "editProfileCol" style = {{maxWidth: "65%"}}><Form.Control className = "standardTxtInput" type="cgpa" placeholder={localStorage.getItem("cgpa")} /></Col>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Col style={{width: "20%", marginLeft:"3.8%", paddingBottom:"3%"}}>  
                    <Button variant="primary" className = 'customBtn'>
                        Confirm Changes
                    </Button>
                </Col> 
            </Row>
        </Container>  
    </div>
    );
}

export default EditProfile; 