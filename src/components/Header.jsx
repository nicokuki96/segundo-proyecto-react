import React,{useState} from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../imagenes/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Header = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div className="header-middle">
            <Container>
                <Row>
                    <Col className="col-header-nav" lg={3}>
                        <a href="/" className="top-header-text"><img src={logo} height={67} alt="Herida de Paris" /></a>
                    </Col>
                    <Col className="col-header-nav" lg={6}>
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Productos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Contacto</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Preguntas frecuentes</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col className="col-header-nav iconos" lg={3}>
                        <div className="div-icon-block">
                            <Button className="icon-block" variant="primary" onClick={handleShow}>
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Buscar</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header
