import './EditProfile.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { PersonVcard, PersonVcardFill } from 'react-bootstrap-icons/dist';

function EditProfile() {
  return (
    <div>
       <Container fluid className = 'editProfileCont'>
            <Row>
                <Form.Text className="ProfileInfo">
                    <PersonVcardFill size={30} className = 'profileOVIcon'/>
                    Profile Information 
                </Form.Text>
            </Row>
            <Row>
                <Form>
                    <Form.Group className="standardTxtInput">
                        <Col className = "editProfileCol"><Form.Label>First Name</Form.Label></Col>
                        <Col className = "editProfileCol"><Form.Control className = "standardTxtInput" type="firstName" placeholder="First Name" /></Col>
                    </Form.Group>

                    <Form.Group className="standardTxtInput" controlId="formBasicPassword">
                        <Col className = "editProfileCol"><Form.Label>Surname</Form.Label></Col>
                        <Col className = "editProfileCol"><Form.Control className = "standardTxtInput" type="surname" placeholder="Surname" /></Col>
                    </Form.Group>
                    
                    <Form.Group className="standardTxtInput">
                        <Col className = "editProfileCol"><Form.Label>Email</Form.Label></Col>
                        <Col className = "editProfileCol"><Form.Control disabled className = "standardTxtInput" type="email" placeholder= "Email" /></Col>
                    </Form.Group>

                    <Form.Group className="standardTxtInput">
                        <Col className = "editProfileCol"><Form.Label>Bilkent ID</Form.Label></Col>
                        <Col className = "editProfileCol"><Form.Control className = "standardTxtInput" type="bilkentID" placeholder="Bilkent ID" /></Col>
                    </Form.Group>

                    <Form.Group className="standardTxtInput" controlId="formBasicPassword">
                        <Col className = "editProfileCol"><Form.Label>Date of Birth</Form.Label></Col>
                        <Col className = "editProfileCol"><Form.Control className = "standardTxtInput" type="dob" placeholder="Date of Birth" /></Col>
                    </Form.Group>

                    <Form.Group className="standardTxtInput">
                        <Col className = "editProfileCol"><Form.Label>National ID</Form.Label></Col>
                        <Col className = "editProfileCol"><Form.Control className = "standardTxtInput" type="nationalID" placeholder="National ID" /></Col>
                    </Form.Group>

                    <Form.Group className="standardTxtInput" controlId="formBasicPassword">
                        <Col className = "editProfileCol"><Form.Label>CGPA</Form.Label></Col>
                        <Col className = "editProfileCol"><Form.Control className = "standardTxtInput" type="cgpa" placeholder="CGPA" /></Col>
                    </Form.Group>
                    <Button variant="primary" className = 'customBtn'>
                        Confirm Changes
                    </Button>
                </Form>
            </Row>
        </Container>  
    </div>
    );
}

export default EditProfile; 