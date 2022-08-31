import React, { useEffect, useState } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import { AddticketForm } from "../../components/Addticketform/Addticketform";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { shortText } from '../../untils/validation';
const initialfrmdt = {
    subject:" ",
    issuedate:"",
    detail:" "
};
const initialfrmdtError = {
    subject:false,
    issuedate:false,
    detail:false,
};
export const Addtickets = ()=>{
    const [frmdata, setfrmdata] = useState(initialfrmdt);
    const [frmdataError, setfrmdataError] = useState(initialfrmdtError)
    useEffect(()=>{}, [frmdata]);

    const handleOnChange =  (e) =>{
        const {name, value } = e.target;
        setfrmdata({
        ...frmdata, 
        [name]:value,
        });
    };
    const handleOnSubmit = async(e) =>{
        e.preventDefault();

        setfrmdataError(initialfrmdtError);
        const IsSubjectvalid = await shortText(frmdata.subject);

        !IsSubjectvalid && setfrmdataError({ ...frmdataError,
            subject:!IsSubjectvalid })
        console.log("Form submit request received", frmdata);
    }
    return(<Container>
        <Row>
            <Col>
                <PageBreadcrumb page='New Tickets'></PageBreadcrumb>
            </Col>
        </Row>
        <Row>
            <Col>
                <AddticketForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}
                frmdataError = {frmdataError}
                 frmdt = {frmdata} ></AddticketForm>
            </Col>
        </Row>
    </Container>
    )
}