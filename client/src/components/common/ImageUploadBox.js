import FileBase from 'react-file-base64';

import React from "react";

const ImageUploadBox = ( {onUpload} ) => {
    return (
        <div style={{ width: '97%', margin: '10px 0'} }>
            <FileBase 
                type="file" 
                multiple={false}          
                onDone={({ base64 }) => onUpload(base64)} 
            />
        </div>
    )
}

export default ImageUploadBox;