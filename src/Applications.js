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
import './test.css';
import Popup from './components/Popup';
import { useState } from 'react';
import NewApplication from './NewApplication';


function Applications() {
  const [buttonPopup, setButtonPopup] = useState(false);
      
    const pageTitle = "Applications";
  return (
    <div>   
      <Container fluid className = 'applCont'>
        <div>
          <main>
            <Row>
              
              <Col>
                <span className='myapplication-span' style={{fontSize: "25px"}}><Clipboard2Fill size={42} className = 'applIcon'/>  My Applications</span>
              </Col>
              
              <Col className='newapp-col'>
                <span className='button-span'><button onClick={() => setButtonPopup(true)}>New Application</button> </span>
              </Col>
            
            </Row>
          </main>
          
          <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
            <NewApplication/>
          </Popup>                
        
        </div>
      </Container>
    </div> 
  );
}

export default Applications;