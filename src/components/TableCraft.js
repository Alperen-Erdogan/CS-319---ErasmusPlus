import React from 'react'
import TableData from './table-items.json'
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import "../test.css"

function TableCraft() {

    const [contacts, setContacts] = useState(TableData)
    return (
        <div>
            <header><h1>Coordinators</h1></header>
            <Table striped bordered hover className="test-table">
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
    )
}

export default TableCraft