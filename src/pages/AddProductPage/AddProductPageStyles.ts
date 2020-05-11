import { makeStyles } from '@material-ui/styles';

const useAddProductStyles = makeStyles(() => ({
    root: {
        fontFamily: "Verdana",
    },
    drawerPaper: {
        width: "400px",
        padding: "10px 20px"
    },
    inputTitle: {
        fontSize: "18px"
    },
    uploadButton: {
        fontSize: "18px",
        backgroundColor: "#2d2d2d",
        borderBottom: "2px solid green",
    },
    inputSection: {

    },
    saveButton: {
        maxWidth: "100px",
        margin: "10px 10px",
        fontSize: "18px",
        backgroundColor: "#2d2d2d",
        borderBottom: "2px solid green",
    },
    inputFile: {
        display: "none"
    }
}));

export default useAddProductStyles;