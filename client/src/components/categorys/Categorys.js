import React from "react";
import { useSelector } from 'react-redux'

import Category from './category/Category'

const Categorys = () => {

    const categorys = useSelector((state) => state.categorys);


    return (
        <>
            <h1>Categorys</h1>
            <Category />
            <Category />
        </>
    );
}

export default Categorys;