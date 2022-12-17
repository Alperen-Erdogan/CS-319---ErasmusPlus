import './MyProfile.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import EditProfile from './EditProfile';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Tab from 'react-bootstrap/Tab';


function MyProfile() {
    const pageTitle = "My Profile";
  return (
    <div>   
        <Container fluid>
            <Row className = "profileRow">
                <Col className='ProfileOverviewCol'> 
                    <Container fluid className='profileOVCont'>
                        <Row className = 'ProfileOVFirstRow'>  
                            <Col><img alt='Profile'/></Col>
                            <Col>
                                <Row><Form.Text> Student name here </Form.Text></Row>    
                                <Row><Form.Text> Student state here </Form.Text></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={4}>
                                        <Nav bsStyle="pills" stacked>
                                            <NavItem eventKey="first">Tab 1</NavItem>
                                            <NavItem eventKey="second">Tab 2</NavItem>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Row>
                    </Container>
                </Col>
                <Col className = 'ProfileEditCol'>
                    <EditProfile/>
                </Col>
            </Row>      
        </Container>
    </div> 
  );
}

export default MyProfile;
