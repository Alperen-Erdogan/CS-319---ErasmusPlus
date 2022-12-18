import './CoordinatorList.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import TableData from './components/table-items.json'
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { People, PeopleFill } from 'react-bootstrap-icons';

function CoordinatorList() {

    const [dataTable, setDataTable] = useState([])
    const [facultyName, setFacultyName] = useState([]) // They might not be array

    useEffect(() => {
        api.post("http://localhost:5000/StudentCoordinator/",{})
        .then(res => console.log(res.data.dataTable))
        .then(res => console.log("alkjsdsakl"))
        .catch(e => console.log(e))
    }, []) // Execute one time only

    const pageTitle = "Coordinator List";
    const [contacts, setContacts] = useState(TableData)
    return (
        <div>
            <header><h3> <People size={42}/><span>Coordinators</span></h3></header>
            <div className='main-table'>
                <Table striped bordered hover>
                    <thead  style = {{backgroundColor: "darkGray"}}>
                        <tr>
                            <th>Faculty of Applied Sciences</th>
                            <th></th>
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