import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";


import {createCategory, fetchAllCategories } from "../../actions/categorys";
import Categorys from "./Categorys.js";
import Form from "../form/Form.js";

const CategoryPage = () => {

    const [currentId] = useState(0);
    const dispatch = useDispatch();

    const initialState = {title: '', description: '' }

    const inputFields = [
        {name: "title", label: "Title"},
        {name: "description", label: "Beschreibung"}
    ]


    useEffect(() =>{
        dispatch( fetchAllCategories() );
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="md" >
            <Grid style={{margin: "20px", padding: "20px"}} justifyContent="flex" >
                <Grow in>
                    <Categorys/>
                </Grow>
                <Grid spacing={3} style={{margin: "20px", padding: "20px"}} >
                    <Form initialState={initialState} inputFields={inputFields} onSubmit={createCategory} />
                </Grid>
            </Grid>
        </Container> 
    )
}

export default CategoryPage;