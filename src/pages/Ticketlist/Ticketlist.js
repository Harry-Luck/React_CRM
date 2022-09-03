import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb'
import { Searchform } from '../../components/search-form/searchform'
import { TicketTable } from '../../components/ticket_table/ticket_table'
import tickets from '../../assets/data/dummy_ticket.json'
import { Link } from 'react-router-dom'
export const Ticketlist = () =>{
    const [str, setstr] =useState("")
    const [disticket, setdisticket] = useState(tickets)
    useEffect(()=>{ }, [str, disticket])

    const handleOnChange =(e) =>{
        const {value} =e.target;
        setstr(value);
        searchticket(value)
    }
    const searchticket = (sttr)=>{
        const displaytickets = tickets.filter((row)=>
        row.subjects.toLowerCase().includes(sttr.toLowerCase())
        );

        setdisticket(displaytickets)
    }
    return(
        <Container>
           <Row>
                <Col>
                    <PageBreadcrumb page='PageList'></PageBreadcrumb>
                </Col>
           </Row>
           <Row>
                <Col>
                    <Link to='/addtickets'>
                        <Button varient='info'>TicketList</Button>
                    </Link>
                </Col>
                <Col className='text-right'>
                    <Searchform handleOnChange = {handleOnChange} str ={str} />
                </Col>
           </Row>
           <Row>
                <Col>
                    <TicketTable tickets={disticket} />
                </Col>
           </Row>
        </Container>
    )
}