import React from 'react'
import axios from 'axios';

const host = process.env.REACT_APP_HOST

const url = 'http://localhost:5000'

const categoryUrl = `${url}/category`
const expertUrl = `${url}/expert`
//const url = 'http://gesundheitswesen_ba:5000/category.cyber-city.systems'

export const fetchCategorys = () => axios.get(categoryUrl);
export const createCategory = (category) => axios.post(categoryUrl, category);
export const updateCategory = (id, updatedCategory) => axios.patch(`${categoryUrl}/${id}`, updatedCategory);
export const deleteCategory = (id) => axios.delete(`${categoryUrl}/${id}`);

export const fetchExperts = () => axios.get(expertUrl);
export const fetchExpert = (id) => axios.get(`${expertUrl}/${id}`);
export const createExpert = (category) => axios.post(expertUrl, category);
export const updateExpert = (id, updatedCategory) => axios.patch(`${expertUrl}/${id}`, updatedCategory);
export const deleteExpert = (id) => axios.delete(`${expertUrl}/${id}`);
