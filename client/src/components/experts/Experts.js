import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from './styles';

import Expert from './expert/Expert.js'

const Experts = ({setCurrentId}) => {

    const experts = useSelector((state) => state.experts)
    const classes = useStyles();

    return (
        <h3>Hallo</h3>
        
    )
}

export default Experts;