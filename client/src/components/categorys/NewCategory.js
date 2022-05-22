import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import useStyles from '../../styles';
import { getCategory } from "../../actions/categorys";
import Categorys from "../categorys/Categorys.js";
import Form from "../form/Form.js";

const NewCategory = () => {

    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

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
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container> 
    )
}

export default NewCategory;