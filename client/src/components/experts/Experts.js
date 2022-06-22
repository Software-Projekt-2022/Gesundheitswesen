import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from 'react-redux';

import useStyles from './styles';
import CardComponent from "../card_component/CardComponent";
import moment from "moment";
import { deleteExpert } from "../../api";
import { useHistory } from "react-router-dom";



const Experts = () => {

    const experts = useSelector((state) => state.experts);
    const classes = useStyles();

    const history = useHistory()

    const onButtonBaseClick = (e) => {
        history.push(`/experts/${e}`)
    }

    return (
        !experts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {experts.map((expert) => (

                    <Grid key={expert._id} item xs={6} sm={6} md={6}>
                        <CardComponent 
                        image={expert.selectedFile}
                        overlay={moment(expert.created_at).fromNow()}
                        title={expert.title}
                        description={expert.description}
                        id={expert._id}
                        deleteAction={deleteExpert}
                        name={expert.name}
                        onButtonBaseClick={onButtonBaseClick}
                        ></CardComponent>
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Experts;