import React from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb'
import tickets from '../../assets/data/dummy_ticket.json'
import { Messagehistory } from '../../components/Messagehistory/messagehistory';

const ticket = tickets[0];
export const Ticket =()=>{
    return(
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page='ticket'></PageBreadcrumb>
                </Col>
            </Row>
            <Row>
                <Col className='text-weight-bolder text-secondary'>
                    <div className='subject'>
                        Subject: {ticket.subjects}
                    </div>
                    <div className='date'>
                        IssueDate: {ticket.addedAt}
                    </div>
                    <div className='status'>
                        Status: {ticket.status}
                    </div>
                </Col>
                <Col className='text-right'>
                    <Button variant='outline-info'>Close Ticket</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Messagehistory msg ={ticket.history}></Messagehistory>
                </Col>
            </Row>
        </Container>
    )
}