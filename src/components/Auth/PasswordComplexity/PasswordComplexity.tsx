import React, { FC, useState, useEffect } from "react";
import usePasswordComplexityStyles from "./PasswordComplexityStyles";

type Props =
    & { score: number };

const PasswordComplexity: FC<Props> = (props) => {
    const { score } = props;
    const classes = usePasswordComplexityStyles();

    const [backgroundColor, setBackgroundColor] = useState("none");
    const [width, setWidth] = useState("initial");


    useEffect(() => {
        switch (score) {
            case 1:
                setBackgroundColor("red");
                setWidth("20%")
                break;
            case 2:
                setBackgroundColor("orange");
                setWidth("40%")
                break;
            case 3:
                setBackgroundColor("yellow");
                setWidth("60%")
                strColor = 'yellow';
                strWidth = '60%';
                break;
            case 4:
                setBackgroundColor("#5cff47");
                setWidth("80%")
                strColor = '#5cff47';
                strWidth = '80%';
                break;
            case 5:
                setBackgroundColor("green");
                setWidth("100%")
                break;
            default:
        }
    });

    var strColor;
    var strWidth;

    switch (score) {
        case 1:
            strColor = 'red';
            strWidth = '20%';
            break;
        case 2:
            strColor = 'orange';
            strWidth = '40%';
            break;
        case 3:
            strColor = 'yellow';
            strWidth = '60%';
            break;
        case 4:
            strColor = '#5cff47';
            strWidth = '80%';
            break;
        case 5:
            strColor = 'green';
            strWidth = '100%';
            break;
        default:
    }

    return (
        <div>
            <p className="pwStrWeak">weak</p>
            <p className="pwStrStrong">strong</p>
            <div className={classes.password} style={{ backgroundColor: backgroundColor, width: width }} />
        </div>
    )
}

export default PasswordComplexity;