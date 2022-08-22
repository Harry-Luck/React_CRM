import React from 'react'
import { Table } from 'react-bootstrap'
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
                        <td>{row.subjects}</td>
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