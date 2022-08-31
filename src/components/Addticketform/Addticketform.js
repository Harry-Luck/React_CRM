import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types'

import "./Addticketform.css";   

export const AddticketForm =({handleOnChange, handleOnSubmit,frmdataError, frmdt }) =>{
    return(
       <div className='Jubotron mt-3 bg-light add-new-ticket'>
            <Row>
                <Col>
                    <Form autoComplete='off' onSubmit={handleOnSubmit} className='mt-5 mb-5'>
                        <h1 className='text-info'>Add New Ticket</h1>
                        <hr></hr>
                        <Form.Group as = {Row}>
                            <Form.Label column sm={3}>Subjects</Form.Label>
                            <Col sm ={9}>
                                <Form.Control
                                name ='subject'
                                // minLength='3'
                                maxLength='100'
                                value={frmdt.subject}
                                placeholder='Enter email'
                                onChange={handleOnChange}
                                required/>
                                <Form.Text className='text-danger'>{frmdataError.subject && "Subject is required"}</Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as = {Row}>
                            <Form.Label column sm ={3}>Issue Founded</Form.Label>
                            <Col sm ={9}>
                                <Form.Control
                                type = 'date'
                                name='issuedate'
                                value = {frmdt.issuedate}
                                onChange={handleOnChange}
                                required
                                />
                            </Col>
                            
                        </Form.Group>
                        <Form.Group as = {Row}>
                            <Form.Label column sm ={3}>Text</Form.Label>
                            <Col>
                                <Form.Control as='textarea' 
                                name='detail'
                                rows = '5'
                                value={frmdt.detail}
                                onChange={handleOnChange}
                                required/>
                            </Col>
                        </Form.Group>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Col>
            </Row>
       </div>
    )
}

AddticketForm.prototype = {
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    frmdt:PropTypes.object.isRequired,
    frmdataError:PropTypes.object.isRequired
}