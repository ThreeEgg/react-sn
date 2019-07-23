import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./stylesheets/main.scss"
import {HashRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import "./modules/rem"
import "swiper/dist/css/swiper.min.css"
import "video-react/dist/video-react.css";

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>
, document.getElementById('root'));

