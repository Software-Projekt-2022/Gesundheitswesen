import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import useStyles from "./styles";
import {Paper} from "@material-ui/core";
import SimpleInput from "../common/SimpleInput";
import ImageUploadBox from "../common/ImageUploadBox";
import ConfirmOrClearBox from "../common/ConfrimOrClearBox";

const GenericForm = ( {initialState, onSubmit, inputFields} ) => {
    const [data, setData] = useState({...initialState});
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if(data) setData(data)
    }, [data])

    const clear = () => {
        setData({...initialState});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(onSubmit(data));
        clear();
    };

    const onUpload = (e) => {
        setData({...data, selectedFile: e})
    }

    const handleChangedData = (e) => {
        const { name, value } = e.target;
        setData({...data, [name]: value});
    }

    return (
        <Paper className={classes.paper}>
            <form id={"genericForm"} autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <div>
                    {inputFields.map((ele) =>
                        <SimpleInput 
                            name={ele.name} 
                            label={ele.label} 
                            onChange={(e) => handleChangedData(e)} 
                            value={data[ele.name]}/>)}
                </div>
                <ImageUploadBox onUpload={(e) => onUpload(e)}></ImageUploadBox>
                <ConfirmOrClearBox onClear={clear} onConfirm={handleSubmit} ></ConfirmOrClearBox>
            </form>
        </Paper>
    );
};

export default GenericForm;