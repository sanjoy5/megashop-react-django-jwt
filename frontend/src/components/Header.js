import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/UserAction';


const Header = () => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log('Clicked');
        dispatch(logout())
    }

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

                            <Link className='d-flex align-items-center  text-white me-2' to="/cart"><FiShoppingCart className='fs-5 me-1' /> Cart</Link>
                            {
                                userInfo ? (
                                    <NavDropdown title={<span className='text-white '><FiUser className='fs-5' /> {userInfo.name} </span>} id='username'>

                                        <NavDropdown.Item as={Link} to='/profile'>
                                            Profile
                                        </NavDropdown.Item>

                                        <NavDropdown.Item onClick={handleLogout}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (



                                    <Link className='d-flex align-items-center gap-1 text-white ms-md-3' to="/login"><FiUser className='fs-5' /> Login</Link>


                                )
                            }


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header