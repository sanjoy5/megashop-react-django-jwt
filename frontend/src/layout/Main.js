import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <main className='py-4'>
                <Container>
                    <Outlet></Outlet>
                </Container>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Main