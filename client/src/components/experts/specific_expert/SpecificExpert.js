import { Typography, Paper, CircularProgress, Divider, Grid } from "@material-ui/core";
import Calendar from 'react-calendar';
import { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExpertByID } from "../../../actions/experts";
import useStyles from "./styles";



const SpecificExpert = ( {} ) => {
    const {expert, experts, isLoading } = useSelector((state) => state.experts)
    const { id } = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();

    const loadingPaper = () => {
      return (
        <Paper elevation={32} className={classes.loadingPaper}>
          <CircularProgress size="15em" />
        </Paper>
      )
    }

    useEffect(() => {
        dispatch(getExpertByID(id));
    }, [id])

    console.log(expert)

    return(
      !expert ? loadingPaper() :
      <Grid>
        <Paper style={ {height: '100%', margin: '20px', padding: '20px', borderRadius: '15px'} } elevation={10}>
          <Typography variant="h3" className={classes.headline}>{expert.title}</Typography>
          <Typography variant="h4" className={classes.headline}>{expert.name}</Typography>
          <div className={classes.card_left}>
            <div className={classes.section}>
            <div className={classes.imageSection}>
                <img className={classes.media} src={expert.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={expert.title} />
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
    )

}

export default SpecificExpert