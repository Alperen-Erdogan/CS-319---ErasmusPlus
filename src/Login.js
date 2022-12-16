import './Login.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Login() {
  return(
    <div>
        <Container className = 'loginCont'>
            <Form>
                <Form.Group as = {Row} controlId="formBasicEmail">
                    <Col className = "loginCol"><Form.Label>Email</Form.Label></Col>
                    <Col className = "loginCol"><Form.Control className = "standardTxtInput" type="email" placeholder="Enter email" /></Col>
                </Form.Group>

                <Form.Group as = {Row} controlId="formBasicPassword">
                    <Col className = "loginCol"><Form.Label>Password</Form.Label></Col>
                    <Col className = "loginCol"><Form.Control className = "standardTxtInput" type="password" placeholder="Password" /></Col>
                </Form.Group>
                <Button variant="primary" className = "customBtn">
                    Login
                </Button>
            </Form>        
        </Container>
    </div>);
}
export default Login;