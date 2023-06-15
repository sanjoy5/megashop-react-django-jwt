import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Row, Col, Image, Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating'
// import products from '../products'
import { FiArrowLeft } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../components/Loading';
import Message from '../components/Message';
import { singleProduct } from '../actions/ProductActions';

const ProductDetails = () => {
    const [qty, setQty] = useState(1)
    const productDetail = useSelector((state) => state.allProducts)
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const { loading, product, error } = productDetail

    useEffect(() => {
        dispatch(singleProduct(id))
    }, [id, dispatch])


    // const product = products.find(p => p._id === id) 
    // const product = useLoaderData()

    const { description, brand, name, image, category, price, rating, numReviews, countInStock } = product;




    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`)
    }


    return (
        <>

            {
                loading ? <Loading />
                    : error ? <Message variant='danger'>{error}</Message>
                        : <>
                            <Link to="/" className='btn bg-primary1 fs-5 mb-4'><FiArrowLeft className='me-1' />Go Back </Link>
                            <Row>
                                <Col md={6}>
                                    <div className="px-lg-5 border">
                                        <Image src={image} className=' w-100' alt={name} />
                                    </div>
                                </Col>
                                <Col md={6}>

                                    <div className="fs-5"><a className='text-primary' href="/">Home</a> / {category}</div>
                                    <h3>{name}</h3>


                                    <Rating value={rating} text={`${numReviews} reviews`} color={'#FF982E'} />
                                    <p className="fs-5 mt-3"><strong>Price: </strong>  {price}</p>
                                    <p className="fs-5 mt-3"><strong>Status: </strong>  {countInStock > 0 ? "In Stock" : "Out of Stock"} </p>

                                    <div className="d-flex align-items-center gap-4">
                                        {
                                            countInStock > 0 && (
                                                <div className='d-flex align-items-center gap-2'>
                                                    <strong>Qty: </strong>
                                                    {/* <Form.Control
                                                        as='select'
                                                        value={qty}
                                                        onChange={(e) => setQty(e.target.value)}
                                                        style={{ width: '60px' }}
                                                    >

                                                        {
                                                            // [0,1,2,3,4...] 
                                                            [...Array(countInStock).keys()].map(x => (
                                                                <option key={x+1} value={x+1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))
                                                        }

                                                    </Form.Control> */}

                                                    <input type="number" style={{ width: '60px', padding: "7px 4px 7px 7px" }} value={qty} onChange={(e) => setQty(e.target.value)} min={1} max={countInStock} className='fs-5 border' />
                                                </div>
                                            )
                                        }

                                        <Button onClick={addToCartHandler} className='bg-secondary1 py-2 px-4 fs-5 cursor-pointer' type='button' disabled={countInStock === 0}>Add to Cart</Button>
                                    </div>

                                    <p className="fs-5 mt-3"><strong>Description:</strong>  ${description}</p>

                                    <p className="fs-5 mt-3"><strong>Brand: </strong>  {brand}</p>
                                </Col>
                            </Row>
                        </>
            }


        </>
    )
}

export default ProductDetails