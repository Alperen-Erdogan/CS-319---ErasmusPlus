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


function Applications() {
    const pageTitle = "Applications";
  return (
    <div>   
      <Container fluid className = 'applCont'>
        <Row>
          <Form.Text style={{padding: "1.2vh", fontSize: "25px"}}>
              <Clipboard2Fill size={30} className = 'applIcon'/>
              My Applications
              <Button style = {{paddingLeft: "1.5vw", paddingRight: "1.5vw", paddingBottom: "0.5vh", paddingTop: "0.5vh", marginLeft: "55vw", fontSize: "25px"}}>
                New Application</Button>
          </Form.Text>
        </Row>
        <Row style = {{marginBottom: "5vh", backgroundColor: "#FFFFFF", maxWidth: "38vw", minWidth: "38vw", marginLeft: "1vw"}}>
                        
        </Row>
    
      </Container>
    </div> 
  );
}

export default Applications;