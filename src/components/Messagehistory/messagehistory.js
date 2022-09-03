import React from 'react';
import PropTypes from 'prop-types';
import './messagehistory.css';
export const Messagehistory = ({msg}) =>{
    if(!msg) return null;
    // console.log(msg);
    return msg.map((row, i )=>(
        <div key={i} className='message-history mt-3'>
            <div className='send font-wight-bold text-second'>
                <div className='sender'>
                    {row.messageby}
                </div>
                <div className='date'>
                    {row.date}
                </div>
            </div>
            <div className='message'>
                {row.message}
            </div>
        </div>
    ));
}

Messagehistory.prototype= {
    msg:PropTypes.array.isRequired,
}