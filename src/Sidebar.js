import React from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import logo from './items/bilkent-logo.png'

const Sidebar = () => {
  
  return (
    
<SidebarMenu className="SideBar-design">
    <SidebarMenu.Header>
      <SidebarMenu.Brand>
      <img src={logo} className="Bilkent-Logo"/>
      </SidebarMenu.Brand>
  </SidebarMenu.Header>
  <SidebarMenu.Body>
    <SidebarMenu.Nav>
      <SidebarMenu.Nav.Link>
        <SidebarMenu.Nav.Icon>
        <img src={logo} className="mini-logo"/>
        </SidebarMenu.Nav.Icon>
        <SidebarMenu.Nav.Title>
          1.link
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Nav.Link>
    </SidebarMenu.Nav>
  </SidebarMenu.Body>
      </SidebarMenu>
  )
}

export default Sidebar


