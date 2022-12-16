import './MyProfile.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import EditProfile from './EditProfile';

function MyProfile() {
  return (
    <div>
        <header className="My_Profile">
            My Profile
        </header>    
        <Container fluid>
            <Row className = "profileRow">
                <Col className='ProfileOverviewCol'> 
                    <Container fluid className = 'innerContainer'>
                        <Row className = 'ProfileOVFirstRow'>  
                            <Col><img alt='Profile'/></Col>
                            <Col>
                                <Row><Form.Text> Student name here </Form.Text></Row>    
                                <Row><Form.Text> Student state here </Form.Text></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Button className = 'ProfileOverviewBtn'>
                                <img alt='ProfileIcon'/>
                                Overview
                            </Button>
                        </Row>
                        <Row>
                            <Button className = 'ProfileOverviewBtn'>
                                <img alt='ProfileOverviewIcon'/>
                                Update Profile 
                            </Button>
                        </Row>
                    </Container>
                </Col>
                <Col className = 'ProfileEditCol'>
                    <Container fluid className = 'innerContainer'>
                        <Row>
                        <Form.Text className="ProfileInfo">
                            <img alt= 'profile overview icon'/>
                            Profile Information
                        </Form.Text>
                        </Row>
                        <Row>
                            <EditProfile/>
                        </Row>
                    </Container>    
                </Col>
            </Row>      
        </Container>
    </div> 
  );
}

export default MyProfile;
