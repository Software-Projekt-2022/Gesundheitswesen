import { Typography, Paper, CircularProgress, Divider, Grid, Container, Grow, Card, CardMedia, CardContent } from "@material-ui/core";
import Calendar from '../../appointment/Calender';
import { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExpertByID } from "../../../actions/experts";
import useStyles from "./styles";
import ComboBoxTime from "./ComboBoxTime";
import ComboBoxDay from "./ComboBoxDay";



const SpecificExpert = ( {} ) => {
    const {expert, experts, isLoading } = useSelector((state) => state.experts)
    const { id } = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
      dispatch(getExpertByID(id));
    }, [id])


    const dateValues = { startDayHour: 9 ,endDayHour: 20, excludedDays: ["0" , "6"], cellDuration: 45}

    const includedDays = Array.from(Array(7).keys()
    ).filter((it) => (!dateValues.excludedDays.includes(it.toString()))
      ).map(it => (
        it.toString()))


    const loadingPaper = () => {
      return (
        <Paper elevation={32} className={classes.loadingPaper}>
          <CircularProgress size="15em" />
        </Paper>
      )
    }

    return(
      !expert ? loadingPaper() :
      <Container maxWidth={false}>
        <Grow in>
          <Grid>
            <Paper className={classes.paper} elevation={10}>
            <Grid alignItems="center">
                <Grid>
                  <Card elevation={12} className={classes.card}>
                  <Typography variant="h3" className={classes.headline}>Mein name ist: {expert.name}</Typography>
                  <Typography variant="h4" className={classes.headline}>Ich bin ein/e: {expert.title}</Typography>
                    <CardMedia className={classes.media} image={expert.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={expert.title} /> 
                    <CardContent>
                      <Typography variant="h5">Fachgebiet:</Typography>
                      <Typography variant="h6">{expert.category}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Container maxWidth={false} style={{ display: 'flex' }}>
                  <Grid maxWidth sm={6} xs={12} >
                    <Paper className={classes.paper} elevation={12}>
                      <Typography variant="h4" className={classes.headline} style={{ margin: "20px" }}>Machen sie noch heute einen Termin aus</Typography>
                      <Calendar 
                        startDayHour={dateValues.startDayHour}
                        endDayHour={dateValues.endDayHour}
                        excludedDays={dateValues.excludedDays}
                        cellDuration={dateValues.cellDuration}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={12}>
                        <ComboBoxTime 
                        label={"Wähle einen Termin"}
                        startHour={dateValues.startDayHour}
                        endHour={dateValues.endDayHour}
                        timespan={dateValues.cellDuration}
                        />
                        <ComboBoxDay 
                        days={includedDays}
                        />
                    </Paper>
                  </Grid>
                </Container>
              </Grid>
            </Paper>
          </Grid>
        </Grow>
      </Container>
        )

}

export default SpecificExpert