import { FETCH_USER } from '../action/userAction';

const userReducer = (state = {} , {type , payload}) => {

    switch(type){
        case FETCH_USER:
            return payload
        default:
            return state
    }


}

export default userReducer;
