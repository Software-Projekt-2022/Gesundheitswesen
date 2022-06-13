import FileBase from 'react-file-base64';

import React from "react";
import useStyles from "./styles";

const ImageUploadBox = ( {onUpload} ) => {
    const classes = useStyles();
    return (
        <div className={classes.fileInput}>
            <FileBase type="file" multiple={false}
                      onDone={({ base64 }) => onUpload(base64)} /></div>
    )
}

export default ImageUploadBox;