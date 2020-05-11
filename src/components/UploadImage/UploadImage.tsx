import React, { FC, useState, ChangeEvent } from "react";
import { Button } from "@material-ui/core";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import useUploadImageStyles from "./UploadImageStyles";

type Props =
    & { onChange?: any };

const UploadImage: FC<Props> = (props) => {
    const { onChange } = props;

    const classes = useUploadImageStyles();

    return (
        <div>
            <input
                name="imageUpload"
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                multiple
                type="file"
                onChange={onChange}
            />
            <label htmlFor="icon-button-file">
                <Button className={classes.uploadButton} component="span"><CameraAltIcon style={{ marginRight: 10 }} />Upload Image</Button>
            </label>
        </div>
    )
}

export default UploadImage;