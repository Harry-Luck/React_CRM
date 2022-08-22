import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

export const LoginForm =({handleOnChange, handleOnSubmit,FrmSwicher, email, pass})=>{
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Client Login</h1>
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
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type='password'
                            name='password'
                            value = {pass}
                            onChange={handleOnChange}
                            placeholder='Enter password'
                            required />
                        </Form.Group>
                        <Button type='submit' onClick={()=>FrmSwicher('rst')}>Login</Button>
                    </Form>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href='#!' onClick={()=>FrmSwicher('rst')}>Forget Password?</a>
                </Col>
            </Row>
        </Container>
    );
};

LoginForm.propTypes = {
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    FrmSwicher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired
};