
import '../css/styles.css';
import React, { Component } from "react";
import { Navigate} from 'react-router-dom';
import Header from './header';
import Messages from './messages';

function Homepage(){
    if(!sessionStorage.getItem('token') ){
        
        return <Navigate to={"/login"} />;
    }
    return(


    <div>
        <div className="page_container">
        <Header />
        <Messages />
        </div>
    </div>

    )
}
export default Homepage