import React from 'react'
import {Navigate} from 'react-router-dom' 
import { Defaultlayout } from '../../layout/Defaultlayout';

const isAuth = true;
export const PrivateRoute = ({children})=>{
    return(
     (isAuth?(<Defaultlayout>{children}</Defaultlayout>):(<Navigate to='/'/>))
    );
}