import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from 'react-redux';

import useStyles from './styles';
import CardComponent from "../card_component/CardComponent";
import { deleteCategory } from "../../actions/categorys";

const Categorys = () => {
    const categorys = useSelector((state) => state.categorys);
    const classes = useStyles();

    console.log(categorys.selectedFile)

    return (
        !categorys.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {categorys.map((category) => (
              <Grid key={category._id} item xs={12} sm={6} md={6}>
                <CardComponent image={category.selectedFile} title={category.title} description={category.description}
                                id={category._id} deleteAction={deleteCategory} overlay="asd"/>
              </Grid>
            ))}
          </Grid>
        )
      );
    };

export default Categorys;