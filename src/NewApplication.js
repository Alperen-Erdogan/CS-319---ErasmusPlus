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
import {ArrowLeft, Bank2, Clipboard2Fill, FileEarmarkBreakFill} from 'react-bootstrap-icons/dist';
import { Table } from 'react-bootstrap';

import { useEffect, useState } from 'react';

import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/MyApplicationStudent"
})



function NewApplication() {
    
    let handleSubmit = async(obj) => {
        try{
            let res = await api.post("/newApplication", {obj} )
        }catch(e){
            console.log("error")
        }
    }

    const create = () => {
        let application = {"firstName" : firstName, "lastName" : lastName, "department" : department, "cgpa": cgpa, "hostUniversity" : hostUniversity, "hostDepartment" : hostDepartment}
        handleSubmit(application)
    }
    
    const pageTitle = "New Application";

    const [currentSemesterDate, setSemesterDate] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [department, setDepartment] = useState("")
    const [cgpa, setCgpa] = useState(0.0)
    const [hostUniversity, setHostUniversity] = useState("")
    const [hostDepartment, setHostDepartment] = useState("")

  return (
    <div>   
        <Container fluid className = 'NewApplCont'>
            <Row>
                <Form.Text style={{padding: "1.2vh", fontSize: "25px"}}>
                    <Clipboard2Fill size={30} className = 'applIcon'/>
                    New Application
                </Form.Text>
            </Row>
            <Row style = {{marginLeft: "1.5vw", fontSize: "18px"}}>
                <Form>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>Application:</Form.Label></Col>
                        <Col><Form.Control type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "58.5vw", minWidth: "58.5vw"}}/></Col>
                    </Form.Group>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>First Name:</Form.Label></Col>
                        <Col><Form.Control onChange={e => setFirstName(e.target.value)} type = "email" placeholder = "First Name" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>Department:</Form.Label></Col>
                        <Col><Form.Control onChange={e => setDepartment(e.target.value)} type = "email" placeholder = "Department" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                    </Form.Group>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>Last Name:</Form.Label></Col>
                        <Col><Form.Control onChange={e => setLastName(e.target.value)} type = "email" placeholder = "Last Name" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>CGPA:</Form.Label></Col>
                        <Col><Form.Control onChange={e => setCgpa(e.target.value)}type = "email" placeholder = "CGPA" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                    </Form.Group>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>Host University:</Form.Label></Col>
                        <Col><Form.Control onChange={e => setHostUniversity(e.target.value)} type = "email" placeholder = "Host University" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>Host Department:</Form.Label></Col>
                        <Col><Form.Control onChange={e => setHostDepartment(e.target.value)}type = "email" placeholder = "Host Department" style = {{maxWidth: "25'vw", minWidth: "25vw"}}/></Col>
                    </Form.Group>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Form.Text style = {{paddingLeft: "20vw", paddingRight: "20vw", color: "black"}}>Please upload the documents you downloaded and filled from the Documents section. </Form.Text>
                    </Form.Group>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Col><Form.Label>Documents:</Form.Label></Col>
                        <Col><Form.Control type="file" multiple style = {{minWidth: "58.5vw", maxWidth: "58.5vw"}}/></Col>
                    </Form.Group>
                </Form>
            </Row>
            <Row style={{marginTop: "1%"}}>
                <Col style={{paddingLeft: "3.4vw"}}></Col>
                <Col style={{paddingLeft: "51vw"}}><Button onClick={() => create()} style={{paddingLeft: "1vw", paddingRight: "1vw", paddingBottom: "0.8vh", backgroundColor: "green"}}>Create</Button></Col>
            </Row>               
        </Container>
    </div> 
  );
}

export default NewApplication;