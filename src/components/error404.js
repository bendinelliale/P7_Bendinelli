
import '../css/styles.css';
import React, { Component } from "react";
import { Navigate} from 'react-router-dom';
import Header from './header';

function Homepage(){
    if(!sessionStorage.getItem('token') ){
        
        return <Navigate to={"/login"} />;
    }
    return(


    <header>
        <Header />
        <div id="Error404">
        <h1>Error 404</h1>
        <p>Page not found!</p>
        </div>
    </header> 
    
    )
}
export default Homepage