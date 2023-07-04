import React, { useEffect } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Message from './Message';
import { topProducts } from '../actions/ProductActions';


const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productsTop = useSelector(state => state.productsTop)
    const { error, loading, products } = productsTop

    useEffect(() => {
        dispatch(topProducts())
    }, [dispatch])

    return (
        <>
            {
                loading ? <Loading />
                    : error ? <Message variant='danger'>{error}</Message>
                        : <>
                            <Carousel pause='hover' className='bg-dark'>
                                {
                                    products.map(product => (
                                        <Carousel.Item key={product._id}>
                                            <Link to={`/product/${product._id}`}>
                                                <Image src={product.image} alt={product.name} fluid />
                                                <Carousel.Caption className='carousel.caption'>
                                                    <h4>{product.name} (${product.price})</h4>
                                                </Carousel.Caption>
                                            </Link>
                                        </Carousel.Item>
                                    ))
                                }
                            </Carousel>
                        </>
            }

        </>
    );
};

export default ProductCarousel;