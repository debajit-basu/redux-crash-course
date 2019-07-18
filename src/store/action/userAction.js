export const FETCH_USER = 'FETCH_USER';

const fetch_user = (dispatch) => {
    //fetch call here
    fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(res => dispatch({type: FETCH_USER , payload: res.data}))
}

// const fetch_user = {type: FETCH_USER , payload: 'New user registered'}

export default fetch_user;
