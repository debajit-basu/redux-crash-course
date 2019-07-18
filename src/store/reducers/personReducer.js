import { UPDATE_PERSON } from '../action/personActions';

const personReducer = (state = {} , {type , payload}) => {

    switch(type){
        case UPDATE_PERSON:
            return Object.assign({} , state,{name: payload})
        default:
            return state
    }


}

export default personReducer;
