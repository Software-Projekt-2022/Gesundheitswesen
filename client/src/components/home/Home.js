import React from "react";
import { Grid, CircularProgress, Container } from "@material-ui/core";
import { useSelector } from 'react-redux';

import Category from '../categorys/category/Category';
import useStyles from './styles';

const Home = ({setCurrentId}) => {
    const categorys = useSelector((state) => state.categorys);
    
    const classes = useStyles();
    
    return (
      
        !categorys.length ? <CircularProgress /> : (
          <Container maxWidth="sm">
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {categorys.map((category) => (
                <Grid key={category._id} item xs={12} sm={6} md={6}>
                  <Category category={category} setCurrentId={setCurrentId} />
                </Grid>
              ))}
            </Grid>  
        </Container>
        )
      );
}

export default Home;