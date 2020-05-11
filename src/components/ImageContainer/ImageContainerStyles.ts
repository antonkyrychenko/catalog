import { makeStyles } from '@material-ui/styles';

const useImageContainerStyles = makeStyles(() => ({
    root: {
        backgroundColor: "white"
    },
    image: {
        height: "100%",
        width: "100%",
        objectFit: "contain"
    }
}));

export default useImageContainerStyles;