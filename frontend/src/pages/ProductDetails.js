import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating'
import products from '../products'
import { FiArrowLeft } from 'react-icons/fi'

const ProductDetails = () => {
    const { id } = useParams()
    const product = products.find(p => p._id === id)
    const { description, brand, name, image, category, price, rating, numReviews, countInStock } = product;
    return (
        <div>
            <Link to="/" className='btn bg-primary1 fs-5 mb-4'><FiArrowLeft className='me-1' />Go Back </Link>
            <Row>
                <Col md={6}>
                    <div className="">
                        <Image src={image} className='border img-fluid' alt={name} />
                    </div>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={rating} text={`${numReviews} reviews`} color={'#FF982E'} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <strong>Brand: </strong>  {brand}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Description:</strong>  ${description}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Category:</Col>
                                    <Col><strong>{category}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col><strong> {countInStock > 0 ? "In Stock" : "Out of Stock"} </strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='bg-secondary1 w-100' type='button' disabled={countInStock === 0}>Add to Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>


                    </Card>

                </Col>
            </Row>

        </div>
    )
}

export default ProductDetails