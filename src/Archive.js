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
                            <td className='doc-table-name'>2022-2023 Erasmus Application - CS - Mehmet Yılmaz</td>
                            <td className='doc-download'><Button variant="primary">Download</Button></td>
                        </tr>
                        <tr>
                            <td className='doc-number'>2</td>
                            <td className='doc-table-name'>2022-2023 Erasmus Application - CS - Ata Doğan</td>
                            <td className='doc-download'><Button variant="primary">Download</Button></td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        </div>
  );
}

export default Archive;
