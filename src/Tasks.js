import './Tasks.css';
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


function Tasks() {
    const pageTitle = "Tasks";
  return (
    <div>   
        <Container fluid className = 'taskCont'>
            <Row>
                <Col>
                    <Container fluid className = 'taskInnerCont'>
                        <Row>
                            <Form.Text style={{padding: "1.2vh", fontSize: "25px"}}>
                                <Clipboard2Fill size={30} className = 'taskIcon'/>
                                New Tasks
                            </Form.Text>
                        </Row>
                        <Row style = {{marginBottom: "5vh", backgroundColor: "#FFFFFF", maxWidth: "76vw", minWidth: "76vw", marginLeft: "1vw"}}>
                        
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Container fluid className = 'taskInnerCont'>
                        <Row>
                            <Form.Text style={{padding: "1.2vh", fontSize: "25px"}}>
                                <Clipboard2Fill size={30} className = 'taskIcon'/>
                                Tasks
                            </Form.Text>
                        </Row>
                        <Row style = {{marginBottom: "5vh", backgroundColor: "#FFFFFF", maxWidth: "76vw", minWidth: "76vw", marginLeft: "1vw"}}>
                            
                        </Row>
                    </Container>
                </Col>
            </Row>          
        </Container>
    </div> 
  );
}

export default Tasks;