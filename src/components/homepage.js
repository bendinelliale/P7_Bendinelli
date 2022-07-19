
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
        <Header />
        <Messages />
    </div>

    )
}
export default Homepage