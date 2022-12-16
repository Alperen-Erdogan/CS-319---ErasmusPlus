import React from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { PersonCircle, FileEarmarkText, Clipboard2Fill,Clipboard2, HospitalFill, PeopleFill, ArchiveFill, FileFill, FileEarmarkBinaryFill, FileEarmarkBreakFill } from 'react-bootstrap-icons';
import { Bank, Bank2 } from 'react-bootstrap-icons/dist';


const Sidebar = () => {
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
  
  return (
    
    
    <SidebarMenu className="SideBar-design">
      <SidebarMenu.Header>
        <SidebarMenu.Brand>
          <h3 id='user-name'>User Name</h3>
        </SidebarMenu.Brand>
      </SidebarMenu.Header>

      <SidebarMenu.Body>
        
        <SidebarMenu.Nav className='nav-menu' id='selected'>
          <SidebarMenu.Nav.Link className='nav-link-style' >
            <SidebarMenu.Nav.Icon>
              <PersonCircle size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              My Profile
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

        <SidebarMenu.Nav className='nav-menu'>
          <SidebarMenu.Nav.Link className='nav-link-style' >
            <SidebarMenu.Nav.Icon>
              <Clipboard2Fill size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              Applications
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

        <SidebarMenu.Nav className='nav-menu'>
          <SidebarMenu.Nav.Link className='nav-link-style' >
            <SidebarMenu.Nav.Icon>
              <FileEarmarkBreakFill size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              Documents
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

        <SidebarMenu.Nav className='nav-menu'>
          <SidebarMenu.Nav.Link className='nav-link-style' >
            <SidebarMenu.Nav.Icon>
              <Bank2 size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              Schools & Courses
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

        <SidebarMenu.Nav className='nav-menu'>
          <SidebarMenu.Nav.Link className='nav-link-style' >
            <SidebarMenu.Nav.Icon>
              <PeopleFill size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              Coordinators
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

        <SidebarMenu.Nav className='nav-menu'>
          <SidebarMenu.Nav.Link className='nav-link-style' >
            <SidebarMenu.Nav.Icon>
              <ArchiveFill size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              Archive
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

      </SidebarMenu.Body>
    </SidebarMenu>
  )
}

export default Sidebar


