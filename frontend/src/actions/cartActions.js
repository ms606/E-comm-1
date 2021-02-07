import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const addToCart = (prodcutId, qty) => async (dispatch) => {

    try {
        const { data } =  await axios.get("/api/products/" + prodcutId);
        console.log(data);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        }) 
    } catch (error) {
        
    }
}

const removeFromCart = (prodcutId) => (dispatch) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: prodcutId});
}

export { addToCart, removeFromCart };
