import { makeStyles } from '@material-ui/styles';

const useCatalogPageStyles = makeStyles(() => ({
    root: {
        fontFamily: "Verdana"
    },
    catalogHeader: {
        height: "80px",
        borderBottom: "2px solid grey",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",   
        '& > button': {
            marginLeft: "5px",
            marginRight: "5px",
            padding: "10px 10px",
            backgroundColor: "black "
        }
    },
    products: {
        height: "90%"
    },
    title: {
        display: "inline-block",
        fontSize: "20px",
        width: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden !important",
        textOverflow: "ellipsis",
        color: "grey"
    },
    content: {
        height: "45px",
        fontSize: "15px",
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
    },
    currentPrice: {
        fontSize: "19px"
    },
    oldPrice: {
        fontSize: "14px",
        alignSelf: "flex-end",
        textDecoration: "line-through",
        marginLeft: "3px"
    },
    discountEnd: {
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        '& > *': {
            marginLeft: 7,
            marginRight: 7
        }
    }
}));

export default useCatalogPageStyles;