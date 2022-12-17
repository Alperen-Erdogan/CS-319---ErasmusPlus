import './SchoolsAndCourses.css';
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
import {Bank2, FileEarmarkBreakFill} from 'react-bootstrap-icons/dist';
import { Table } from 'react-bootstrap';


function SchoolsAndCourses() {
    const pageTitle = "Schools&Courses";
  return (
    <div>   
        <Container fluid className = 'sncCont'>
            <Row>
                <Form.Text style={{padding: "1.2vh"}}>
                    <Bank2 size={30} className = 'sncIcon'/>
                    Schools & Courses
                </Form.Text>
            </Row>
            <Row style = {{marginBottom: "5vh", backgroundColor: "#FFFFFF", maxWidth: "76vw", minWidth: "76vw", marginLeft: "1vw"}}>
                <Table striped hover>
                    <thead  style = {{backgroundColor: "darkGray"}}>
                        <tr>
                        <th>Erasmus/Bilateral</th>
                        <th>Host University</th>
                        <th>Department</th>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Erasmus</th>
                            <th>Upsala University</th>
                            <th>Unknown</th>
                            <th>1DT044</th>
                            <th>Operation System 1</th>
                        </tr>
                        <tr>
                            <th>Erasmus</th>
                            <th>Upsala University</th>
                            <th>Unknown</th>
                            <th>1123D4</th>
                            <th>Algorithms 1</th>
                        </tr>
                            {/*table row template 
                                
                                <tr>
                                    <th>Erasmus</th>
                                    <th>Upsala University</th>
                                    <th>Unknown</th>
                                    <th>1123D4</th>
                                    <th>Algorithms 1</th>
                                </tr>

                            */}
                                
                    </tbody>
                </Table>
            </Row>      
        </Container>
    </div> 
  );
}

export default SchoolsAndCourses;