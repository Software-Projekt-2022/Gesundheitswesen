import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import {deleteExpert } from '../../../actions/experts';
import useStyles from './styles';


const Expert = ({expert, setCurrentId}) => {

    const dispatch = useDispatch();
    const classes = useStyles();


    return (
        <Card>
        </Card>
      );
}

export default Expert;