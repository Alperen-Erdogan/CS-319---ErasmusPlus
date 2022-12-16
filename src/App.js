import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo2 from './items/bilkent-logo.png'


function App() {
  const name = "Bilkent";
  return (
    <div className='clear'>
      <header className="bilkent-header">
      <img src={logo2} className="Bilkent-Logo" alt='bilkent logo'/>
      </header>
      <Container fluid disableGutters={true}>
      <Row>
        <Col className='coltest1'>
        <Sidebar />
        </Col>

        <Col id='newCol'>
          <Container fluid>
        <header className="full">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deniz asdasdasdasdasdasdasdasdasdasdas{name}
        </p>
      </header>
      </Container>
        </Col>
      </Row>
    </Container>

    </div>
  );
}

export default App;
