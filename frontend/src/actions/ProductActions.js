import { getProducts, isError, isLoading, productDetails } from "../reducers/ProductReducers"
import axios from 'axios';

export const allProducts = () => async (dispatch) => {
    try {
        dispatch(isLoading())

        const { data } = await axios.get('/api/products/')
        dispatch(getProducts(data))

    } catch (error) {
        dispatch(isError(
            error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        ))
    }
}

export const singleProduct = (id) => async (dispatch) => {
    try {
        dispatch(isLoading())

        const { data } = await axios.get(`/api/products/${id}`)
        dispatch(productDetails(data))

    } catch (error) {
        dispatch(isError(
            error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        ))
    }
}