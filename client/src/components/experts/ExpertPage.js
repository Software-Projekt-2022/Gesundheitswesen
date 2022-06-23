import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import {createExpert, getExperts} from "../../actions/experts";
import Form from "../form/Form";
import Experts from "../experts/Experts.js"

const ExpertPage = () => {
    
    const dispatch = useDispatch();

    /**  */
    useEffect(() =>{
        dispatch( getExperts() );
    }, [dispatch]);

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
        <Container maxWidth="lg">
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Experts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form initialState={initialState} inputFields={inputFields} onSubmit={createExpert} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container> 
    )
}

export default ExpertPage;