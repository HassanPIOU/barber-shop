import {
 INCREASE_QUANTITY,
 DECREASE_QUANTITY,
ADD_CART ,
    DELETE_CART
} from  '../types';

const initialState = {
    numberCart:0,
    Carts:[],
}

export default (state = initialState, { type, payload }) =>{
    switch(type){
        case ADD_CART:
            if(state.numberCart==0){
                let cart = {
                    id:payload.id,
                    quantity:1,
                    name:payload.name,
                    price:payload.price
                }
                state.Carts.push(cart);
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:payload.id,
                        quantity:1,
                        name:payload.name,
                        price:payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[payload].quantity++;

            return{
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.Carts[payload].quantity;
            if(quantity>1){
                state.numberCart--;
                state.Carts[payload].quantity--;
            }

            return{
                ...state
            }
        case DELETE_CART:
            let quantity_ = state.Carts[payload].quantity;
            return{
                ...state,
                numberCart:state.numberCart - quantity_,
                Carts:state.Carts.filter(item=>{
                    return item.id!=state.Carts[payload].id
                })

            }
        default:
            return state;
    }
}