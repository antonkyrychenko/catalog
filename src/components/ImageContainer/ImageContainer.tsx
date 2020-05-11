import React, { FC, useState } from "react";
import useImageContainerStyles from "./ImageContainerStyles";
import clsx from 'clsx';

type Props =
    & { src: string, height: string, width: string, className?: any };

const ImageContainer: FC<Props> = (props) => {
    const { src, height, width, className } = props

    const classes = useImageContainerStyles();

    return (
        <div
            className={clsx(classes.root, className)}
            style={{ height: height, width: width }}
        >
            <img
                className={classes.image}
                src={src}
                alt="Image not found" />
        </div>
    )
}

export default ImageContainer;