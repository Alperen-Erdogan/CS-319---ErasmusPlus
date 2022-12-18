import './Applications.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import EditProfile from './EditProfile';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import NavItem from 'react-bootstrap/NavItem';
import Tab from 'react-bootstrap/Tab';
import {Bank2, Clipboard2Fill, FileEarmarkBreakFill} from 'react-bootstrap-icons/dist';
import { Table } from 'react-bootstrap';


function NewApplication() {
    const pageTitle = "New Application";
  return (
    <div>   
        <Container fluid className = 'applCont'>
                        <Row>
                            <Form.Text style={{padding: "1.2vh", fontSize: "25px"}}>
                                <Clipboard2Fill size={30} className = 'applIcon'/>
                                New Application
                            </Form.Text>
                        </Row>
                        <Row>
                            <Form>
                                <Form.Group as = {Row} className = "standardTxtInput">
                                    <Col className = "editProfileCol"><Form.Label>Application:</Form.Label></Col>
                                    <Col className = "editProfileCol"><Form.Control type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "60vw", minWidth: "60vw"}}/></Col>
                                </Form.Group>
                                <Form.Group as = {Row} className = "standardTxtInput">
                                    <Col className = "editProfileCol"><Form.Label>Application:</Form.Label></Col>
                                    <Col className = "editProfileCol"><Form.Control type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "60vw", minWidth: "60vw"}}/></Col>
                                </Form.Group>
                                <Form.Group as = {Row} className = "standardTxtInput">
                                    <Col className = "editProfileCol"><Form.Label>Application:</Form.Label></Col>
                                    <Col className = "editProfileCol"><Form.Control type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "25vw", minWidth: "25'vw"}}/></Col>
                                    <Col className = "editProfileCol"><Form.Label>Application:</Form.Label></Col>
                                    <Col className = "editProfileCol"><Form.Control type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                                </Form.Group>
                                <Form.Group as = {Row} className = "standardTxtInput">
                                    <Col className = "editProfileCol"><Form.Label>Application:</Form.Label></Col>
                                    <Col className = "editProfileCol"><Form.Control type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                                    <Col className = "editProfileCol"><Form.Label>Application:</Form.Label></Col>
                                    <Col className = "editProfileCol"><Form.Control type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                                </Form.Group>
                                <Form.Group as = {Row} className = "standardTxtInput">
                                    <Col className = "editProfileCol"><Form.Label>Application:</Form.Label></Col>
                                    <Col className = "editProfileCol"><Form.Control type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                                    <Col className = "editProfileCol"><Form.Label>Application:</Form.Label></Col>
                                    <Col className = "editProfileCol"><Form.Control type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "25'vw", minWidth: "25vw"}}/></Col>
                                </Form.Group>
                                <Form.Group as = {Row} className = "standardTxtInput">
                                    <Col className = "editProfileCol"><Form.Label>Application:</Form.Label></Col>
                                    <Col className = "editProfileCol"><Form.Control type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                                    <Col className = "editProfileCol"><Form.Label>Application:</Form.Label></Col>
                                    <Col className = "editProfileCol"><Form.Control type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        
                        
        </Container>
    </div> 
  );
}

export default NewApplication;