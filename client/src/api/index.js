import React from 'react'
import axios from 'axios';

const host = process.env.REACT_APP_HOST

//const url = 'http://localhost:5000/category'
const url = 'http://gesundheitswesen_ba:5000/category'

export const fetchCategorys = () => axios.get(url);
export const createCategory = (category) => axios.post(url, category);
export const updateCategory = (id, updatedCategory) => axios.patch(`${url}/${id}`, updatedCategory);
export const deleteCategory = (id) => axios.delete(`${url}/${id}`);