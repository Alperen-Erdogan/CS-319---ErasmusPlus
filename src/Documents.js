import './Documents.css';
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
import {FileEarmarkBreakFill} from 'react-bootstrap-icons/dist';
import { Table } from 'react-bootstrap';


function Documents() {
    const pageTitle = "Documents";
  return (
    <div>   
        <Container fluid className = 'documentCont'>
            <Row>
                <Form.Text style={{padding: "1.2vh"}}>
                    <FileEarmarkBreakFill size={30} className = 'documentIcon'/>
                    Documents
                </Form.Text>
            </Row>
            <Row style = {{marginBottom: "5vh", backgroundColor: "#FFFFFF", maxWidth: "76vw", minWidth: "76vw", marginLeft: "1vw"}}>
                <Table striped hover>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Document Name</th>
                        <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th>Pre-Approval Form</th>
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

export default Documents;
