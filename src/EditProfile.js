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
                        <Form.Label> First Name</Form.Label>
                        <Form.Control disabled className = "standardTxtInput" type = "firstName" placeholder='First Name'/>
                    </Form.Group>

                    <Form.Group className="standardTxtInput" controlId="formBasicPassword">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control disabled className = "standardTxtInput" type = "surname" placeholder='Surname'/>
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