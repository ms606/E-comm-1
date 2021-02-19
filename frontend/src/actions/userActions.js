import Axios from "axios";
import Cookie from 'js-cookie';
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstans";


const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {email, password } });
    try {
        const { data } = await Axios.post("/api/users/signin", {email, password})
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    }
    catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.mesage});
    }
}

export { signin }