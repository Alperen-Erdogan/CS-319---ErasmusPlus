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
        <header><h3> <FileEarmarkBreakFill size={42}/><span>Documents</span></h3></header>
        <div className='main-table'>
            <Table striped bordered hover>
                <thead>
                    <tr className='table-title'>
                        <th className='doc-number'>#</th>
                        <th className='doc-table-name'>Documents Name</th>
                        <th className='doc-download'>Download</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td className='doc-number'>1</td>
                        <td className='doc-table-name'>Pre-Approval Form</td>
                        <td className='doc-download'><Button variant="primary">Download</Button></td>
                    </tr>
                    
                </tbody>
            </Table>
        </div>
    </div>
    );
}

export default Documents;
