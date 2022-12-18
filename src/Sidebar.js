import React from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { PersonCircle, FileEarmarkText, Clipboard2Fill,Clipboard2, HospitalFill, PeopleFill, ArchiveFill, FileFill, FileEarmarkBinaryFill, FileEarmarkBreakFill, BoxArrowLeft, Bank2 } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

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
        <SidebarMenu.Nav className='nav-menu , selected'>
          <SidebarMenu.Nav.Link className='nav-link-style' href="/MyProfilePage" >
            <SidebarMenu.Nav.Icon>
              <PersonCircle size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              My Profile
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

        <SidebarMenu.Nav className='nav-menu'>
          <SidebarMenu.Nav.Link className='nav-link-style' href="/ApplicationsPage" >
            <SidebarMenu.Nav.Icon>
              <Clipboard2Fill size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              Applications
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

        <SidebarMenu.Nav className='nav-menu'>
          <SidebarMenu.Nav.Link className='nav-link-style' href="/DocumentsPage">
            <SidebarMenu.Nav.Icon>
              <FileEarmarkBreakFill size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              Documents
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

        <SidebarMenu.Nav className='nav-menu'>
          <SidebarMenu.Nav.Link className='nav-link-style' href="/SchoolPage" >
            <SidebarMenu.Nav.Icon>
              <Bank2 size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              Schools & Courses
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

        <SidebarMenu.Nav className='nav-menu'>
          <SidebarMenu.Nav.Link className='nav-link-style' href="/CoordinatorListPage" >
            <SidebarMenu.Nav.Icon>
              <PeopleFill size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              Coordinators
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

        <SidebarMenu.Nav className='nav-menu'>
          <SidebarMenu.Nav.Link className='nav-link-style' href="/ArchivePage" >
            <SidebarMenu.Nav.Icon>
              <ArchiveFill size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              Archive
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

        <SidebarMenu.Nav className='logout-nav'>
          <SidebarMenu.Nav.Link className='nav-link-style' href="/Login" >
            <SidebarMenu.Nav.Icon>
              <BoxArrowLeft size={36} />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title id='nav-title-style'>
              Logout
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>

      </SidebarMenu.Body>
    </SidebarMenu>
  )
}

export default Sidebar


