import React from 'react'
import { Dashbord } from '../pages/Dashbord/dashbord'
import { Footer } from './patrials/Footer'
import { Header } from './patrials/Header'

export const Defaultlayout = ({children})=>{
    return(<div className='default-layout'>
        <div className='header'>
            <Header></Header>
        </div>
        
        <div className='main'>
            <Dashbord></Dashbord>
        </div>
        
        <div className='footer'>
            <Footer></Footer>
        </div>
    </div>)
}