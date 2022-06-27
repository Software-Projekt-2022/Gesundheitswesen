import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import {createExpert, fetchAllExperts } from "../../actions/experts";
import Form from "../form/Form";
import Experts from "../experts/Experts.js"

const ExpertPage = () => {
    

    const [currentId] = useState(0);
    const dispatch = useDispatch();

    /**  */
    useEffect(() =>{
        dispatch( fetchAllExperts() );
    }, [currentId, dispatch]);

    const initialState = {name: '', title: '', description: '', category: '' }

    /**
     * All fields for the Expert Form 
     */
    const inputFields = [
        {name: "name", label: "Name"},
        {name: "title", label: "Title"},
        {name: "description", label: "Beschreibung"},
        {name: "category", label: "Kategorie"}
    ]

    return (
        <Container maxWidth="xl">
            <Grid style={{margin: "20px", padding: "20px", bgcolor: 'background.paper'}} spacing={3}>
            <Grow in>
                <Experts/>
            </Grow >
                <Form initialState={initialState} inputFields={inputFields} onSubmit={createExpert} />
            </Grid>
        </Container> 
    )
}

export default ExpertPage;