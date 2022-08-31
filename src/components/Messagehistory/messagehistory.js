import React from 'react'
import PropTypes from 'prop-types'
export const Messagehistory = ({msg}) =>{
    if(!msg) return null;
    console.log(msg);
    return msg.map((row, i )=>(
        <div key={i} className='message-history'>
            <div className='send'>
                <div className='sender'>
                    {msg.messageby}
                </div>
                <div className='date'>
                    {msg.message}
                </div>
            </div>
            <div className='message'>
                {msg.date}
            </div>
        </div>
    ));
}

Messagehistory.prototype= {
    msg:PropTypes.array.isRequired,
}