import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';


import useStyles from './styles';
import { createCategory, updateCategory } from '../../actions/categorys';

const Form = ({ currentId, setCurrentId }) => {
  const [categoryData, setCategoryData] = useState({ title: '',  selectedFile: '' });
  const category = useSelector((state) => (currentId ? state.posts.find((title) => title._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (category) setCategoryData(category);
  }, [category]);

  const clear = () => {
    setCurrentId(0);
    setCategoryData({ title: '', description: '', selectedFile: '' });
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
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${category.title}"` : 'Erstelle eine neue Kategorie'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={categoryData.title} onChange={(e) => setCategoryData({ ...categoryData, title: e.target.value })} />
        <TextField name="description" variant="outlined" label="Beschreibung" fullWidth multiline rows={4} value={categoryData.description} onChange={(e) => setCategoryData({ ...categoryData, description: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setCategoryData({ ...categoryData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Erstellen</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Löschen</Button>
      </form>
    </Paper>
  );
};

export default Form;
