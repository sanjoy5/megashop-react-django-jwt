import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../actions/ProductActions';
import Loading from '../components/Loading';
import Message from '../components/Message';


const Home = () => {

    const allproducts = useSelector((state) => state.allProducts)
    const dispatch = useDispatch()
    const { loading, products, error } = allproducts

    useEffect(() => {
        dispatch(allProducts())
    }, [])


    return (
        <div>
            <h2>Latest Products</h2>

            {
                loading ? <Loading />
                    : error ? <Message variant='danger'>{error}</Message>
                        : <Row>
                            {
                                products.map(product => (
                                    <Col sm={12} md={6} lg={4} key={product._id}>
                                        <Product product={product} />
                                    </Col>
                                ))
                            }
                        </Row>
            }


        </div>
    )
}

export default Home