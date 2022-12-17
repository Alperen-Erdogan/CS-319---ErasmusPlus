import './Archive.css';
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
import {ArchiveFill, FileEarmarkBreakFill} from 'react-bootstrap-icons/dist';
import { Table } from 'react-bootstrap';


function Archive() {
    const pageTitle = "Archive";
  return (
    <div>   
        <Container fluid className = 'archCont'>
            <Row>
                <Form.Text style={{padding: "1.2vh"}}>
                    <ArchiveFill size={30} className = 'archIcon'/>
                    Archive
                </Form.Text>
            </Row>
            <Row style = {{marginBottom: "5vh", backgroundColor: "#FFFFFF", maxWidth: "76vw", minWidth: "76vw", marginLeft: "1vw"}}>
                <Table striped hover>
                    <tbody>
                        <tr>
                            <th>Application Name 1</th>
                            <th>
                                <Button variant = "success" style={{borderRadius: "15px"}}>
                                    Download
                                </Button>
                            </th>
                        </tr>  
                        <tr>
                            <th>Application Name 2</th>
                            <th>
                                <Button variant = "success" style={{borderRadius: "15px"}}>
                                    Download
                                </Button>
                            </th>
                        </tr>  
                            {/*table element with button template 
                                
                                <tr>
                                    <th>1</th>
                                    <th>Pre-Approval Form</th>
                                    <th>
                                        <Button variant = "success">
                                            Download
                                        </Button>
                                    </th>
                                </tr>  

                            */}


                                          
                    </tbody>
                </Table>
            </Row>      
        </Container>
    </div> 
  );
}

export default Archive;
