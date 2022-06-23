import {Button} from "@material-ui/core";
import useStyles from "../header/styles";
import React from "react";

/**
 * 
 * @param { * } onConfirm callBackFunction
 * @param { * } onClear callBackFunction
 */
const ConfirmOrClearBox = ( {onConfirm, onClear} ) => {
    const classes = useStyles();
    return (
    <div>
        <Button onSubmit={onConfirm} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Erstellen</Button>
        <Button variant="contained" color="secondary" size="small" onClick={onClear} fullWidth>Löschen</Button>
    </div>
    )
}

export default  ConfirmOrClearBox;