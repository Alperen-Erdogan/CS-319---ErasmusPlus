import './CoordinatorList.css';
import React from 'react';
import TableData from './components/table-items.json'
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { People, PeopleFill } from 'react-bootstrap-icons';

function CoordinatorList() {
    const pageTitle = "Coordinator List";
    const [contacts, setContacts] = useState(TableData)
    return (
        <div>
            <header><h3> <People size={42}/><span>Coordinators</span></h3></header>
            <div className='main-table'>
                <Table striped bordered hover>
                    <thead>
                        <tr className='table-title'>
                            <th className='table-departmant'>Departmant</th>
                            <th className='table-coordinator'>Coordinator</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact)=> 
                            <tr>
                                <td className='table-departmant'>{contact.Departmant}</td>
                                <td className='table-coordinator'>{contact.Coordinator}</td>
                            </tr>
                        )}
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default CoordinatorList;