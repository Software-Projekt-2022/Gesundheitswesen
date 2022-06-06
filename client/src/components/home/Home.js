import React, {useEffect, useState} from "react";
import { Grid, CircularProgress, Container } from "@material-ui/core";
import {useDispatch, useSelector} from 'react-redux';

import Category from '../categorys/category/Category';
import useStyles from './styles';
import {getCategory} from "../../actions/categorys";

const Home = ({setCurrentId}) => {
    const [currentId, setCurrendId] = useState(0);
    const categorys = useSelector((state) => state.categorys);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getCategory() );
    }, [currentId, dispatch])

    const classes = useStyles();
    
    return (
      
        !categorys.length ? <CircularProgress /> : (
          <Container maxWidth="lg">
            <Grid className={classes.container} container alignItems="stretch">
              <h1>Willkommen bei ihren Gesundheitsexperten !</h1>
            </Grid>  
        </Container>
        )
      );
}

export default Home;