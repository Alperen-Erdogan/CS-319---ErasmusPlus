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
import {Clipboard2} from 'react-bootstrap-icons/dist';
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
    <header><h3> <Clipboard2 size={42}/><span>My Applications</span></h3></header>
    <div className='main-table'>
        <Table striped bordered hover>
            <thead>
                <tr className='table-title'>
                    <th className='doc-number'>#</th>
                    <th className='app-table-name'>Application Name</th>
                    <th className='app-status'>Status</th>
                    <th className='app-download'>
                      <span className='button-span'><Button className='new-button' onClick={() => setButtonPopup(true)}>New</Button> </span>
                      <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
                        <NewApplication/>
                      </Popup>
                    </th>
                </tr>
            </thead>
            <tbody> 
                <tr>
                    <td className='doc-number'>1</td>
                    <td className='app-table-name'>2022-2023 Erasmus Application</td>
                    <td className='app-status' id='status-pending'>Pending...</td>
                    <td className='app-download'><Button className='open-button'>Open</Button></td>
                </tr>
                
            </tbody>
        </Table>
    </div>
    </div>
  );
}

export default Applications;