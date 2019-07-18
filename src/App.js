import React from 'react';
import {connect} from 'react-redux';

import './App.css';
// import store from './store/index';


import update_game from './store/action/gameActions';
import update_person from './store/action/personActions';
import fetch_user from './store/action/userAction';


/*
    without using react-redux

    with using mapDispatchToProps will use

function updatePerson() {
    store.dispatch(update_person)
}

function updateGame() {
    store.dispatch(update_game)
}*/


function App(props) {
    console.log("props in app.js");
    console.log(props);
    return (
    <div className="App">
      <h1>Redux Tutorial</h1>
        {/*without react-redux using subscriber */}
        {/*person Name: { store.getState().person.name}*/}
        {/*using react-redux with Provider mad mapToState method*/}
        person Name: { props.person.name}
        <br/>
        <br/>
        <button onClick={props.updatePerson}>update person</button>
        <br/>
        <br/>
        game Name: { props.game.name}
        <br/>
        <br/>
        <button onClick={props.updateGame}>update game</button>
        <br/>
        <br/>


        <button onClick={props.fetchUser}>Fetch user</button>
        <br/>

        {
            props.user.length === 0 ? <p> No user Found </p> :
                props.user.map((val,i) => (
                    <React.Fragment key={i}>
                    <span>{`${val.id}---- ${val.first_name} ${val.last_name}------ ${val.email}`}</span><br/>
                    </React.Fragment>
                ))
        }


    </div>
  );
}

const mapStateToProps = (state) => {
            return {
                game: state.game,
                person: state.person,
                user: state.user
            }
}

const mapDispatchToProps = (dispatch) => {
            return {
                updateGame: () => { dispatch(update_game) },
                updatePerson: () => { dispatch(update_person) },
                fetchUser: () => { dispatch(fetch_user) },
            }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
