import './MyProfile.css';
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
import pfp from './items/default-profile-photo.jpg';
import Tasks from "./Tasks.js"
import {Clipboard2Fill} from 'react-bootstrap-icons/dist';


function MyProfile() {
    const pageTitle = "My Profile";
  return (
    <div>   
        <Container fluid>
            <Row className = "profileRow">
                <Col className='ProfileOverviewCol' style={{maxWidth: "35%", minWidth: "35%"}}> 
                    <Container fluid className='profileOVCont'>
                        <Row className = 'ProfileOVFirstRow'>  
                            <Col className='pfpCol'><Image  src={pfp} className = "pfp" style={{borderRadius: "50%"}}/></Col>
                            <Col>
                                <Row id='user-name-myprofile' style={{marginTop: "8vh"}}><Form.Text style={{fontSize: "25px", color: "black"}}>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</Form.Text></Row>    
                                <Row style={{marginTop: "1vh"}}><Form.Text style={{fontSize: "20px", color: "grey"}}>{localStorage.getItem("userType")}</Form.Text></Row>
                            </Col>
                        </Row>

                    </Container>
                </Col>
                <Col className = 'ProfileEditCol' style={{width: "55%"}}>
                    <EditProfile/>
                </Col>
            </Row>      
        </Container>
    </div> 
  );
}

export default MyProfile;
