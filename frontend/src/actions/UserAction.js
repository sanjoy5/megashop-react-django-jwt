import axios from "axios"
import { user_login_fail, user_login_request, user_login_success, user_logout } from "../reducers/UserLoginReducer"
import { user_regiser_fail, user_register_request, user_register_success } from "../reducers/UserRegisterReducer"
import { user_details_fail, user_details_request, user_details_reset, user_details_success } from "../reducers/UserDetailsReducer"
import { update_profile_fail, update_profile_request, update_profile_success } from "../reducers/UpdateProfileReducer"


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(user_login_request())

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post(
            '/api/users/login/',
            { 'username': email, 'password': password },
            config
        )

        dispatch(user_login_success(data))

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch(user_login_fail(
            error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        ))
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch(user_logout())
    dispatch(user_details_reset())
}



export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch(user_register_request())

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post(
            '/api/users/register/',
            { 'name': name, 'email': email, 'password': password },
            config
        )

        dispatch(user_register_success(data))

        dispatch(user_login_success(data))

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch(user_regiser_fail(
            error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        ))
    }
}



export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch(user_details_request())

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(
            `/api/users/${id}`,
            config
        )

        dispatch(user_details_success(data))


    } catch (error) {
        dispatch(user_details_fail(
            error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        ))
    }
}



export const updateProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch(update_profile_request())

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(
            `/api/users/profile/update/`,
            user,
            config
        )

        dispatch(update_profile_success(data))

        dispatch(user_login_success(data))

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch(update_profile_fail(
            error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        ))
    }
}



