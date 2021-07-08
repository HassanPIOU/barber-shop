import { combineReducers } from 'redux';

import authReducer from './authReducer';
import registerReducer from "./registerReducer";
import shopReducer from "./shopReducer";
import nearbyReducer from "./nearbyReducer";
import barberReducer from "./barberReducer";
import servicesReducer from "./servicesReducer";


export default combineReducers({
  auth: authReducer,
    register : registerReducer,
    shop : shopReducer,
    nearby : nearbyReducer,
    barber : barberReducer,
    services : servicesReducer,
});
