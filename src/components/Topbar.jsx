import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Topbar = () => {
    return (
        <div className="topbar">
                <Row>
                    <Col className="col-top-nav" lg={4}>
                        <a href="" className="top-nav-text">11 3428 3431 | heridadeparismusica@gmail.com</a>
                    </Col>
                    <Col className="col-top-nav" lg={4}>
                        <a href="" className="top-nav-text">Distribuidora Mayorista</a>
                    </Col>
                    <Col className="col-top-nav" lg={4}>
                    <a href="" className="top-nav-text">Crear cuenta | Iniciar sesión</a>
                    </Col>
                </Row>
        </div>
    )
}
export default Topbar
