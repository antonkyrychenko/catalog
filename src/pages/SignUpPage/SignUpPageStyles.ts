import { makeStyles } from '@material-ui/styles';

const useSignUpPageStyles = makeStyles(() => ({
    root: {
        fontFamily: "Verdana",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "350px"
    },
    signUpLink: {
        marginTop: "0px",
        color: "#00bcd4",
        cursor: "pointer",
        '&:hover': {
            color: "#aeefec",
        }
    },
    topAndBottomMargin: {
        marginTop: "20px",
        marginBottom: "20px"
    }
}));

export default useSignUpPageStyles;