import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from './styles.js';
import CardComponent from "../card_component/CardComponent";
import {deleteCategory} from "../../actions/categorys";
import {deleteExpert} from "../../actions/experts";


const Experts = () => {

    const experts = useSelector((state) => state.experts);
    const classes = useStyles();

    return (
        !experts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {experts.map((expert) => (
                    <Grid key={expert._id} item xs={12} sm={6} md={6}>
                        <CardComponent image={expert.selectedFile} title={expert.title} description={expert.description}
                                       id={expert._id} deleteAction={deleteExpert} timeStamp={expert.created_at}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Experts;