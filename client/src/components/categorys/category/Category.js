import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import {deleteCategory } from '../../../actions/categorys';
import useStyles from './styles';


const Category = ({category, setCurrentId}) => {

    const dispatch = useDispatch();
    const classes = useStyles();


    return (
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={category.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={category.title} />
          <div className={classes.overlay}>
            <Typography variant="h6">{category.title}</Typography>
            <Typography variant="body2">{moment(category.createdAt).fromNow()}</Typography>
          </div>
          <div className={classes.overlay2}>
            <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(category._id)}><MoreHorizIcon fontSize="default" /></Button>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">{category.title}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{category.description}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => dispatch(deleteCategory(category._id))}><DeleteIcon fontSize="small" /> Delete</Button>
          </CardActions>
        </Card>
      );
}

export default Category;