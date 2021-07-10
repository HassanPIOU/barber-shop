import {ADD_CART, DELETE_CART} from "../types";

export function AddCart(payload){
    return {
        type:ADD_CART,
        payload : payload
    }
}

export function DeleteCart(payload){
    return{
        type:DELETE_CART,
        payload : payload
    }
}