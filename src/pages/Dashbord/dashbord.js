import React from 'react'
import {Row, Col, Button, Container} from 'react-bootstrap'
import { TicketTable } from '../../components/ticket_table/ticket_table'
import tickets from '../../assets/data/dummy_ticket.json'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb'
import { Link } from 'react-router-dom'
export const Dashbord = () => {
    return(<Container>
        <Row>
            <Col>
                <PageBreadcrumb page='dashbord'></PageBreadcrumb>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <Link to ='/addtickets'>
                    <Button varient='info' style={{fontSize:'2rem', padding:"10px, 30 px"}}>Add ticket</Button>
                </Link>    
            </Col>
        </Row>
        <Row>
            <Col className='text-center mb-2'>
                <p>Total tickets: 50</p>
                <p>Pending tickets: 5</p>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col className='recent-tickets'>
                <TicketTable tickets={tickets}></TicketTable>
            </Col>
        </Row>
        </Container>)
}