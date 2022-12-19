import './table.css';
import React from 'react';
import TableData from './components/schools.json'
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Bank2 } from 'react-bootstrap-icons';

import axios from "axios"
import { useMemo } from 'react';
import useEffect from "react"


function SchoolsAndCourses() {

    useMemo(() => {
        axios.post("http://localhost:5000/SchoolCourses")
             .then((result) => setContacts(result.data))
             .catch(e => console.log(e))   
    }, [])

    const pageTitle = "Coordinator List";
    const [contacts, setContacts] = useState([])
    return (
        <div>
            <header><h3> <Bank2 size={42}/><span>Schools & Courses</span></h3></header>
            <div className='main-table2'>
                <Table striped bordered hover>
                    <thead>
                        <tr className='table-title'>
                            <th className='table-departmant'>Erasmus/Bileteral</th>
                            <th className='table-coordinator'>Host University's Name</th>
                            <th className='table-coordinator'>Host University's Department/Program</th>
                            <th className='table-coordinator'>Host University's Course Code</th>
                            <th className='table-coordinator'>Host University's Course name</th>
                            <th className='table-coordinator'>Host University's Course Credit</th>
                            <th className='table-coordinator'>Exempted Bilkent Course Code</th>
                            <th className='table-coordinator'>Exempted Bilkent Course Name</th>
                            <th className='table-coordinator'>Exempted Bilkent Course Credit</th>
                            <th className='table-coordinator'>Exempted Bilkent Course Designation</th>
                            <th className='table-coordinator'>Exemption</th>
                            <th className='table-coordinator'>Date of FYK</th>
                            <th className='table-coordinator'>Date of Entry</th>
                            <th className='table-coordinator'>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact)=> 
                            <tr>
                                <td className='table-departmant'>{contact.Erasmus}</td>
                                <td className='table-coordinator'>{contact.HostUniName}</td>
                                <td className='table-coordinator'>{contact.HostUniDep}</td>
                                <td className='table-coordinator'>{contact.CourseCode}</td>
                                <td className='table-coordinator'>{contact.CourseName}</td>
                                <td className='table-coordinator'>{contact.CourseCredit}</td>
                                <td className='table-coordinator'>{contact.BilkentCourseCode}</td>
                                <td className='table-coordinator'>{contact.BilkentCourseName}</td>
                                <td className='table-coordinator'>{contact.BilkentCourseCredit}</td>
                                <td className='table-coordinator'>{contact.BilkentCourseDesignation}</td>
                                <td className='table-coordinator'>{contact.Exemption}</td>
                                <td className='table-coordinator'>{contact.FYKDate}</td>
                                <td className='table-coordinator'>{contact.EntryDate}</td>
                                <td className='table-coordinator'>{contact.Description}</td>
                            </tr>
                        )}
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default SchoolsAndCourses;