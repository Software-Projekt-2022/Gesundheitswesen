import React, { useEffect, useState } from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { useDispatch } from "react-redux";

import { getCategory } from "./actions/categorys";
import logo from './images/cyber-city-logo.png'
import Categorys from "./components/categorys/Categorys.js";
import Form from "./components/form/Form.js"
import useStyles from './styles'

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch( getCategory() );
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant ="h2" align="center">Gesundheitswesen</Typography>
                <img className={classes.image} src={logo} alt="LOGO" height="60" width={60}></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Categorys />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}


export default App;