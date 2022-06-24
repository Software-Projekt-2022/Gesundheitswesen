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
import { getExpertByID } from "../../../actions/experts";
import useStyles from "./styles";



const SpecificExpert = ( {} ) => {
    const { expert } = useSelector((state) => state.experts)
    const { id } = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
      dispatch(getExpertByID(id));
    }, [id])

    useEffect(() => {
      
    })

    const dateValues = { startDayHour: 9.25 ,endDayHour: 20, excludedDays: ["0" , "6"], cellDuration: 45}


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
                            <Typography variant="h4" className={classes.headline} style={{ margin: "20px" }}>Machen sie noch heute einen Termin aus</Typography>
                            <Calendar 
                              startDayHour={dateValues.startDayHour}
                              endDayHour={dateValues.endDayHour}
                              excludedDays={dateValues.excludedDays}
                              cellDuration={dateValues.cellDuration}
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