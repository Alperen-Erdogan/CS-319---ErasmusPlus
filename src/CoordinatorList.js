import React, { useMemo } from 'react';
import './table.css';
import TableData from './components/table-items.json'
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { People } from 'react-bootstrap-icons';

import axios from "axios"

import useEffect from "react"

function CoordinatorList() {

    useMemo(() => {
        axios.post("http://localhost:5000/StudentCoordinator")
             .then((result) => setContacts(result.data))
             .catch(e => console.log(e))   
    }, [])

    const pageTitle = "Coordinator List";
    const [contacts, setContacts] = useState([])
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
                                <td className='table-departmant'>{contact.facultyName}</td>
                                <td className='table-coordinator'>{contact.coordinatorName}</td>
                            </tr>
                        )}
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default CoordinatorList;