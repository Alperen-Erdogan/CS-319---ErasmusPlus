import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo2 from './items/bilkent-logo.png'
import Login from './Login'
import MyProfile from './MyProfile';


function App() {
  const pageTitle = "My Profile";
  return (
    <div className='clear'>

      <header className="bilkent-header"> {/*Main Header*/}
      <img src={logo2} className="Bilkent-Logo" alt='bilkent logo'/>
      </header>

      <Container fluid disableGutters={true}>{/*Main Container*/}
        <Row> {/*Main Row*/}

          <Col className='coltest1'> {/*Navbar column*/}
          <Sidebar />
          </Col>

          <Col className='coltest2'> {/*Main Contents Column*/}
            <Container fluid className='main-content-container'>{/*=================Contents Container================*/}

              <header className='page-title'> {/*Page title*/}
                <h1>{pageTitle}</h1>
              </header>

              <Container fluid className='content-container'>{/*Put contents in there*/}
              <p className='App-header'>
                <img src={logo} className="App-logo" alt="logo" />
                <img src={logo} className="App-logo" alt="logo" />
                <img src={logo} className="App-logo" alt="logo" />

                
                  Test Bilkent
                </p>

              </Container>
            </Container>{/*=================end of contents========================*/}
          </Col>

        </Row>
      </Container>{/*end of main container*/}
    <Login/>
    <MyProfile/>
    </div>
  );
}

export default App;
