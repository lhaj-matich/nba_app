import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { firebase } from './firebase';
import './index.css';

import Routes from './routes'

const App = (props) => {
    return(
        <Router>
            <Routes {...props}/>
        </Router>
    )
}

firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<App user={user}/>, document.getElementById('root'));
})


