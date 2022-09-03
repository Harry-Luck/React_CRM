import React, { useEffect, useState } from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb'
import tickets from '../../assets/data/dummy_ticket.json'
import { Messagehistory } from '../../components/Messagehistory/messagehistory';
import { UpdateTicket } from '../../components/Updateticket/updateticket';
import { useParams } from 'react-router-dom';
// const ticket = tickets[0];
export const Ticket =()=>{
    const { tId } = useParams();
    const [message, setmessage] = useState('')
    const [ticket, setticket] = useState('')
    useEffect(()=>{
        for(let i =0; i<tickets.length; i++){
            if(tickets[i].id == tId){
                setticket(tickets[i])
                continue
            }
        }  
    }, [message, tId]);

    const handleOnChange =(e)=>{
        setmessage(e.target.value)
    }
    const handleOnSubmit =()=>{
        alert("Form is submited")
    }
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
                        ID: {ticket.id}
                    </div>
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
                <Col className='mt-4'>
                    <Messagehistory msg ={ticket.history}></Messagehistory>
                </Col>
            </Row>
            <Row>
                <Col className='mt-4'>
                  <UpdateTicket msg={message} handleOnChange ={handleOnChange} handleOnSubmit={handleOnSubmit}> </UpdateTicket>
                </Col>
            </Row>
        </Container>
    )
}