import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

const Menu = () => {
    return (
        <div className="menu-header">
            <Container>
                <Nav className="menu-principal" variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Accesorios</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Baño</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Bazar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4">Blanqueria</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-5">Jugueteria</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    )
}
export default Menu
