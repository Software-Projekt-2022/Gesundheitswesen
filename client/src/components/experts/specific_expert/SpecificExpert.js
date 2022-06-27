import { 
  Typography, 
  Paper, 
  CircularProgress, 
  Grid, 
  Container, 
  Grow, 
  Card, 
  CardMedia, 
  CardContent,
 } from "@material-ui/core";
import Calendar from '../../calendar/Calender';
import { useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchExpertByID } from "../../../actions/experts";
import useStyles from "./styles";
import { fetchCalendarByExpertID } from "../../../actions/calender";
import { fetchAppointmentsOfExpert } from "../../../actions/appointment";;



const SpecificExpert = (  ) => {
    const  { expert }  = useSelector((state) => state.ExpertReducer);
    const  appointment = useSelector((state) => state.AppointmentReducer)
    const { id } = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();

    console.log(useSelector((state) => state))

    useEffect(() => {

    },[appointment])

    useEffect(() => {
      dispatch(fetchAppointmentsOfExpert(id))
      dispatch(fetchExpertByID(id))
      dispatch(fetchCalendarByExpertID(id))
    }, [dispatch, id])

    const reacreateAppointments = () =>  {
      const recreateAppointment = (data) => { return {title: "Buchung", startDate: new Date(data.startdate), endDate: new Date(data.enddate)} }
      return appointment.map((ap) => recreateAppointment(ap))
    }

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
            <Paper className={classes.paper} elevation={12}>
            <Grid alignItems="center">
                <Grid>
                  <Card elevation={12} className={classes.card}>
                  <Typography variant="h3" className={classes.headline}>Name: {expert.name}</Typography>
                  <Typography variant="h4" className={classes.headline}>{expert.title}</Typography>
                    <CardMedia className={classes.media} image={expert.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={expert.title} /> 
                    <CardContent>
                      <Typography variant="h5">Fachgebiet:</Typography>
                      <Typography variant="h6">{expert.category}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Container maxWidth={false}>
                  <Grid>
                    <Paper className={classes.paper} elevation={12} >
                      
                      <Grid>
                          <Grid>
                            <Calendar 
                              id={id}
                              appointmentData={reacreateAppointments()}
                            />
                          </Grid>
                        </Grid>
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