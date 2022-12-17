import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../App.css";
import logo2 from '../items/bilkent-logo.png'
import Sidebar from '../Sidebar';
import SchoolsAndCourses from "../SchoolsAndCourses";

const SchoolPage = () => {
  const pageTitle = "Schools & Courses"
  return(
    <div className='clear'>
      <header className="bilkent-header"> {/*Main Header*/}
<Row className='row-container-box'>
  <Col className='row-container-box'>
    <Row className='row-container-box'>
      <Container className='container-box'><img src={logo2} className="Bilkent-Logo" alt='bilkent logo'/></Container>
      <Container className='container-box'><h1 id='bilkent-header-content'>Bilkent University | Erasmus Plus</h1></Container>
    </Row>
  </Col>
  <Col className='header-col'>
    <Container className='container-box2'><p id='type-id'>User Type</p></Container>
  </Col>
</Row>


</header>

<Container fluid>{/*Main Container*/}
<Row> {/*Main Row*/}

  <Col className='coltest1'> {/*Navbar column*/}
  <Sidebar />
  </Col>

  <Col className='coltest2'> {/*Main Contents Column*/}
    <Container fluid className='main-content-container'>{/*=================Contents Container================*/}

      <header className='page-title'> {/*Page title*/}
        <h1 className='page-title-text'>{pageTitle}</h1>
      </header>

      <Container fluid className='content-container'>
        <Container fluid className='inner-content-container'>{/*Put contents in there*/ }
          
          <SchoolsAndCourses/>

        </Container>
      </Container>
    </Container>{/*=================end of contents========================*/}
  </Col>

</Row>
</Container>{/*end of main container*/}
    </div>
  );
};

export default SchoolPage;