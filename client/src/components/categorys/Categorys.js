import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from 'react-redux';

import CardComponent from "../card_component/CardComponent";
import { deleteCategory } from "../../actions/categorys";
import moment from "moment";
import { Stack } from "@mui/material";

const Categorys = () => {
    const categorys = useSelector((state) => state.categorys);


    
    return (
        !categorys.length ? <CircularProgress /> : (
          <Stack  container alignItems="stretch" spacing={3}>
            {categorys.map((category) => (
              <Grid key={category._id} >
                <CardComponent 
                image={category.selectedFile} 
                title={category.title} 
                description={category.description}
                id={category._id} 
                deleteAction={deleteCategory}  
                overlay={moment(category.created_at).fromNow()}/>
              </Grid>
            ))}
          </Stack>
        )
      );
    };

export default Categorys;