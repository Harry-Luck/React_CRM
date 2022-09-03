import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { PropTypes } from 'prop-types'
export const UpdateTicket =({msg, handleOnChange, handleOnSubmit})=>{
    return(
       <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please reply your message here or update ticket</Form.Text>
            <Form.Control as = 'textarea' row ='5'
            value= {msg}
            onChange={handleOnChange}
            name ='detail'></Form.Control>
            <Button variant='info' type='submit'>Reply</Button>
       </Form>
    )
}

UpdateTicket.propTypes = {
    msg:PropTypes.string.isRequired,
}