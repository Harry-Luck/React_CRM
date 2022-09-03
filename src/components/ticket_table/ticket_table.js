import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const TicketTable = ({tickets}) =>{
    return(
       <Table className='striped bordered hover'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subjects</th>
                    <th>Status</th>
                    <th>Opened date</th>
                </tr>
            </thead>
            <tbody>
               {tickets.length ?(
                tickets.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <Link to={`/ticket/${row.id}`}>
                        <td>{row.subjects}</td></Link>
                        <td>{row.status}</td>
                        <td>{row.addedAt}</td>
                    </tr>
                ))
               ):(
                <tr>
                    <td>
                        No tickets show
                    </td>
                    </tr>
               )}       
            </tbody>
       </Table>
    )
}