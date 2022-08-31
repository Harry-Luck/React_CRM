import React from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
export const Searchform =({handleOnChange, str})=>{
    return(
        <div>
            <Form>
                <Form.Group as ={Row}>
                    <Form.Label column ms='2'>
                        Search:{''}
                    </Form.Label>
                    <Col ms='9'>
                        <Form.Control name='searchstr' placeholder='Search...'
                        value={str}
                        onChange={handleOnChange}
                        >
                        </Form.Control>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

PropTypes.Searchform = {
handleOnChange:PropTypes.func.isRequired,
str:PropTypes.string.isRequired,
};