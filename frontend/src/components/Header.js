import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <Navbar className='border-0 bg-primary1' variant='dark' expand="lg">
                <Container>
                    <Link to="/" className='fs-4 fw-bold text-white'>MegaShop</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-none d-md-flex mx-auto w-50">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                style={{ height: "42px" }}
                            />
                            <Button className='bg-secondary1'>Search</Button>
                        </Form>
                        <Form className="d-flex mx-auto w-100 mt-2 d-md-none">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"

                            />
                            <Button className='bg-secondary1'>Search</Button>
                        </Form>

                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='d-flex align-items-center gap- text-white' to="/cart"><FiShoppingCart className='fs-5 me-1' /> Cart</Link>
                            <Link className='d-flex align-items-center gap-1 text-white ms-3' to="/login"><FiUser className='fs-5' /> Login</Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header