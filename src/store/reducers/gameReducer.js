import { UPDATE_GAME } from '../action/gameActions';

const gameReducer = (state ={} , {type , payload}) => {

    switch(type){
        case UPDATE_GAME:
            return { name: payload}
        default:
            return state
    }
/*
    if(type === 'UPDATE_GAME'){
        return { name: payload}
    }

    return state*/

}

export default gameReducer;
