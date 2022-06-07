import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import useStyles from '../../styles';
import {createCategory, getCategory} from "../../actions/categorys";
import Categorys from "./Categorys.js";
import Form from "../form/Form.js";

const CategoryPage = () => {

    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
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
        <Container maxWidth="lg">
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Categorys setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form initialState={initialState} inputFields={inputFields} onSubmit={createCategory} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container> 
    )
}

export default CategoryPage;