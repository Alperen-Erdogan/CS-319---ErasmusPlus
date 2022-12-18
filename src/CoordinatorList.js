import './CoordinatorList.css';
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
import {Bank2, FileEarmarkBreakFill, PeopleFill} from 'react-bootstrap-icons/dist';
import { Table } from 'react-bootstrap';

import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const api = axios.create()


function CoordinatorList() {

    const [dataTable, setDataTable] = useState([])
    const [facultyName, setFacultyName] = useState([]) // They might not be array

    useEffect(() => {
        api.post("http://localhost:5000/StudentCoordinator/",{})
        .then(res => console.log(res.data.dataTable))
        .then(res => console.log("alkjsdsakl"))
        .catch(e => console.log(e))
    }, []) // Execute one time only

    const pageTitle = "Coordinator List";


    const column = [
        {heading: "Faculty Name", value: "facultyName"},
        {heading: "Coordinator Name", value: "coordinatorName"}
    ]

    return (
    <div>   
        <Container fluid className = 'coorCont'>
            <Row>
                <Form.Text style={{padding: "1.2vh"}}>
                    <PeopleFill size={30} className = 'coorIcon'/>
                    Coordinators
                </Form.Text>
            </Row>
            <Row style = {{marginBottom: "5vh", backgroundColor: "#FFFFFF", maxWidth: "76vw", minWidth: "76vw", marginLeft: "1vw"}}>
                <Table striped bordered hover>
                    <thead  style = {{backgroundColor: "darkGray"}}>
                        
                    </thead>
                </Table>
            </Row>      
        </Container>
    </div> )



    /*
  return (
    <div>   
        <Container fluid className = 'coorCont'>
            <Row>
                <Form.Text style={{padding: "1.2vh"}}>
                    <PeopleFill size={30} className = 'coorIcon'/>
                    Coordinators
                </Form.Text>
            </Row>
            <Row style = {{marginBottom: "5vh", backgroundColor: "#FFFFFF", maxWidth: "76vw", minWidth: "76vw", marginLeft: "1vw"}}>
                <Table striped bordered hover>
                    <thead  style = {{backgroundColor: "darkGray"}}>
                        <tr>
                            <th>Faculty of Applied Sciences</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>faculty 1</th>
                            <th>name 1</th>
                        </tr>
                        <tr>
                            <th>faculty 2</th>
                            <th>name 2</th>   
                        </tr>

                            {/*table row template 
                                
                                <tr>
                                    <th>faculty</th>
                                    <th>name</th>
                                    
                                </tr>

                            }


                                                
                    </tbody>
                </Table>
            </Row>      
        </Container>
    </div> 
    
  );
  */
}

export default CoordinatorList;