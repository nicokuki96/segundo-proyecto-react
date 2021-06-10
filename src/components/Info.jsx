import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Info = () => {
    return (
        <div className="infoBlock mt-5 mb-5">
            <Container>
                <Row>
                    <Col lg={4} className="bloque-info">
                        <p>Envíos a todo el país</p> 
                        <span>MONTO MÍNIMO DE COMPRA $5000</span>
                    </Col>
                    <Col lg={4} className="bloque-info medio">
                        <p>Métodos de pago</p> 
                        <span>TRANSFERENCIA, DEPÓSITO, EFECTIVO, MERCADO PAGO</span>
                    </Col>
                    <Col lg={4} className="bloque-info">
                        <p>Envíos en el día</p> 
                        <span>EN CABA Y ALREDEDORES</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Info
