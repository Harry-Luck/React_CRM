import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

export const PassReset =({handleOnChange, handleOnSubmit,FrmSwicher, email})=>{
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Password Reset</h1>
                    <hr>
                    </hr>
                    <Form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                             type='email'
                             name='email'
                             value = {email}
                             onChange={handleOnChange}
                             placeholder='Enter Email'
                              required />
                        </Form.Group>
                        <Button type='submit'>Login</Button>
                    </Form>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href='#!' onClick={()=>FrmSwicher('login')}>Password Reset?</a>
                </Col>
            </Row>
        </Container>
    );
};

PassReset.propTypes = {
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    FrmSwicher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired
};