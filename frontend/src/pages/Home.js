import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const Home = () => {

    console.log(products);

    return (
        <div>
            <h2>Latest Products</h2>
            <Row>
                {
                    products.map(product => (
                        <Col sm={12} md={6} lg={4} key={product._id}>
                            <Product product={product} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Home