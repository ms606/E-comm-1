import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function SigninScreen(props){
    const dispatch = useDispatch();
    
    const submitHandler = () => {

    }

    
    useEffect(() => {
        return () => {
            //
        };
    }, []);

    return  <div>
        <form onSubmit={submitHandler}>

        </form>
    </div>
}

export default SigninScreen;