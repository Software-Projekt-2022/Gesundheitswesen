import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from 'react-redux';

import CardComponent from "../card_component/CardComponent";
import moment from "moment";
import { deleteExpert } from "../../actions/experts";
import { useHistory } from "react-router-dom";
import { Stack } from "@mui/material";


const Experts = () => {

    const experts = useSelector((state) => state.ExpertReducer);

    const history = useHistory()
    /** activate when the card under the picture is clicked */
    const onButtonBaseClick = (e) => history.push(`/experts/${e}`)

    

    return (
        !experts.length ? <CircularProgress /> : (
            <Stack container alignItems="stretch" spacing={1}>
                {experts.map((expert) => (
                    <Grid key={expert._id} >
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
            </Stack>
        )
    );
};

export default Experts;