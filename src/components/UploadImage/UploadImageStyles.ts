import { makeStyles } from '@material-ui/styles';

const useUploadImageStyles = makeStyles(() => ({
    input: {
        display: "none"
    },
    uploadButton: {
        fontSize: "18px",
        backgroundColor: "#2d2d2d",
        borderBottom: "2px solid green",
    }
}));

export default useUploadImageStyles;