import React, { useState } from 'react'
import { LoginForm } from '../../components/login/login'
import { PassReset } from '../../components/pass_reset/pass_reset'
import "./entry.css"
const Entry = ()=>{

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [frmload, setfrmload] = useState('login')

    const handleOnChange = (e) =>{
        const {name, value} = e.target
        switch(name){
            case "email":
                setemail(value)
                break
            case "password":
                setpassword(value)
                break
            default:
                break
        }
        console.log(name, value)
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            alert("Fill up the form")
        }
    };
    const FrmSwicher = (frmtype) =>{
        setfrmload(frmtype)
    }

    return(
        <div className='entry-page bg-info'>
           <div className='jumbotron form-box'>{
                frmload ==='login' && (
                <LoginForm handleOnChange ={handleOnChange}
                handleOnSubmit = {handleOnSubmit}
                FrmSwicher ={FrmSwicher}
                email = {email}
                pass = {password}></LoginForm>)
           }
             {frmload ==='rst' &&   (<PassReset handleOnChange={handleOnChange}
                handleOnSubmit ={handleOnSubmit}
                email = {email}
                FrmSwicher = {FrmSwicher}
                ></PassReset>)}
           </div>
        </div>
    )
}

export default Entry