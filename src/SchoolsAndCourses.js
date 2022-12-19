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
                            <th className='table-main-tab'>Erasmus/Bileteral</th>
                            <th className='table-main-tab'>Host University's Name</th>
                            <th className='table-main-tab'>Host University's Department/Program</th>
                            <th className='table-main-tab'>Host University's Course Code</th>
                            <th className='table-main-tab'>Host University's Course name</th>
                            <th className='table-main-tab'>Host University's Course Credit</th>
                            <th className='table-main-tab'>Exempted Bilkent Course Code</th>
                            <th className='table-main-tab'>Exempted Bilkent Course Name</th>
                            <th className='table-main-tab'>Exempted Bilkent Course Credit</th>
                            <th className='table-main-tab'>Exempted Bilkent Course Designation</th>
                            <th className='table-main-tab'>Exemption</th>
                            <th className='table-main-tab'>Date of FYK</th>
                            <th className='table-main-tab'>Date of Entry</th>
                            <th className='table-main-tab'>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact)=> 
                            <tr>
                                <td className='table-main-tab'>{contact.Erasmus}</td>
                                <td className='table-main-tab'>{contact.HostUniName}</td>
                                <td>{contact.HostUniDep}</td>
                                <td>{contact.CourseCode}</td>
                                <td>{contact.CourseName}</td>
                                <td>{contact.CourseCredit}</td>
                                <td>{contact.BilkentCourseCode}</td>
                                <td>{contact.BilkentCourseName}</td>
                                <td>{contact.BilkentCourseCredit}</td>
                                <td>{contact.BilkentCourseDesignation}</td>
                                <td>{contact.Exemption}</td>
                                <td>{contact.FYKDate}</td>
                                <td>{contact.EntryDate}</td>
                                <td>{contact.Description}</td>
                            </tr>
                        )}
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default SchoolsAndCourses;