import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createCategory, updateCategory } from '../../api';

const Form = ({ currentId, setCurrentId }) => {
  const [categoryData, setCategoryData] = useState({ title: '', description: '', selectedFile: '' });
  const category = useSelector((state) => (currentId ? state.category.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (category) setCategoryData(category);
  }, [category]);

  const clear = () => {
    setCurrentId(0);
    setCategoryData({ title: '', description: '', selectedFile: ''  });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createCategory(categoryData));
      clear();
    } else {
      dispatch(updateCategory(currentId, categoryData));
      clear();
    }
  };

    return (
        <Paper className="classes.paper">
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">Create a Category</Typography>
            <TextField name="Bezeichnung" variant="outlined" label="Bezeichnung" fullWidth value={categoryData.title} onChange={(e) => setCategoryData( { ... categoryData, title: e.target.value} )}></TextField>
            <TextField name="Beschreibung" variant="outlined" label="Beschreibung" fullWidth value={categoryData.description} onChange={(e) => setCategoryData( { ... categoryData, description: e.target.value} )}></TextField>
            <div className={classes.fileInput}> <FileBase> type="file" multiple={false} onDone={({base64}) => setCategoryData( { ... categoryData, selectedFile: base64 }) } </FileBase> </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}



export default Form;