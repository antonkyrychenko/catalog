import { makeStyles } from '@material-ui/styles';

const useProductFormStyles = makeStyles(() => ({
    root: {
        fontFamily: "Verdana",
    },
    inputTitle: {
        fontSize: "18px"
    },
    submitButton: {
        fontSize: "18px",
        width: "100%",
        height: "45px",
        marginTop: "15px"
    },
    imageContainer: {
        margin: "10px auto",
    }
}));

export default useProductFormStyles;