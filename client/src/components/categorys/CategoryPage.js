import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";


import {createCategory, getCategory} from "../../actions/categorys";
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
        dispatch( getCategory() );
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="md">
            <Grid style={{margin: "20px", padding: "20px"}} spacing={3}>
                <Grow in>
                    <Categorys/>
                </Grow>
                    <Form initialState={initialState} inputFields={inputFields} onSubmit={createCategory} />
            </Grid>
        </Container> 
    )
}

export default CategoryPage;