import React, { FC, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import useProductFormStyles from "./ProductFormStyles";
import UploadImage from "../UploadImage/UploadImage";
import ImageContainer from "../ImageContainer/ImageContainer";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import { Formik } from "formik";
import * as Yup from "yup";
import * as imageExtensions from '../../services/image.extensions';

type Props =
    & {
        onSubmit: any,
        formTitle: string,
        title: string,
        description: string,
        price: number | string,
        discount: number | string,
        discountEndDate: Date,
        image: string
    };

const ProductForm: FC<Props> = (props) => {
    const { onSubmit, formTitle } = props;
    const classes = useProductFormStyles();

    const [image, setImage] = useState(props.image);
    const [imageError, setImageError] = useState("");

    const [discountEndDate, setDiscountEndDate] = useState(props.discountEndDate);

    const imageContainer = () => {
        return image && <ImageContainer className={classes.imageContainer} src={image} height="300px" width="250px" />
    }

    function discounDateEnd(discount: number | string, discountEndDate: any) {
        if (discount) {
            return (
                <div>
                    <h3>Discound End Date</h3>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            fullWidth
                            variant="inline"
                            margin="normal"
                            disablePast
                            id="date-picker-dialog"
                            format="MM/dd/yyyy"
                            value={discountEndDate}
                            onChange={(date) => date && setDiscountEndDate(new Date(date.toISOString()))}
                        />
                    </MuiPickersUtilsProvider>
                </div>
            );
        }
    }

    const handleOnSubmit = (values: any, { resetForm, setErrors, setSubmitting }: any) => {
        console.log("sub")
        if (!image) {
            setImageError("Please provide an image");
            setSubmitting(false);
            return;
        }

        const product = {
            title: values.title,
            description: values.description,
            price: values.price,
            discount: values.discount,
            discountEndDate: discountEndDate,
            image: image
        };

        console.log(product);
        onSubmit(product);
        setSubmitting(false);
    }

    const initialFormValues = {
        title: props.title,
        description: props.description,
        price: props.price,
        discount: props.discount,
        discountEndDate: props.discountEndDate,
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .min(20, "Title min lenght is 20 charters")
            .max(50, "Title max lenght is 50 charters")
            .required("Please provide an title"),
        description: Yup.string()
            .max(200, "Description max lenght is 200 charters")
            .notRequired(),
        price: Yup.number()
            .min(1, "Incorrect price")
            .max(99999999.99, "The price cannot be more than 99999999.99")
            .required("Please provide a price"),
        discount: Yup.number()
            .notRequired()
            .min(10, "The discount should be in the range of 10-90")
            .max(90, "The discount should be in the range of 10-90")
    })

    function handleImageUpload(event: any, values: any, formHandleChange: any) {
        if (event.target.files) {
            const blob = event.target.files[0]!;
            imageExtensions.imageToDataUrl(blob, (dataUrl: string) => setImage(dataUrl));
        }
    }

    return (
        <div>
            <Formik
                initialValues={initialFormValues}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
            >
                {({ errors, values, handleChange, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <h1>{formTitle}</h1>
                        <UploadImage onChange={handleImageUpload} />

                        {imageContainer()}
                        <p style={{ fontSize: "17px", color: "#eb6383" }}>{imageError}</p>
                        <h3>Title</h3>
                        <TextField
                            fullWidth
                            multiline
                            name="title"
                            variant="outlined"
                            onChange={handleChange}
                            value={values.title}
                            error={!!errors.title}
                            helperText={errors.title} />
                        <h3>Description</h3>
                        <TextField
                            fullWidth
                            multiline
                            name="description"
                            variant="outlined"
                            onChange={handleChange}
                            value={values.description}
                            error={!!errors.description}
                            helperText={errors.description} />
                        <h3>Price</h3>
                        <TextField
                            fullWidth
                            name="price"
                            type="number"
                            variant="outlined"
                            onChange={handleChange}
                            value={values.price}
                            error={!!errors.price}
                            helperText={errors.price} />
                        <h3>Discount</h3>
                        <TextField
                            fullWidth
                            name="discount"
                            type="number"
                            variant="outlined"
                            onChange={handleChange}
                            value={values.discount}
                            error={!!errors.discount}
                            helperText={errors.discount} />
                        {discounDateEnd(values.discount, values.discountEndDate)}
                        <Button className={classes.submitButton} type="submit" color="primary" variant="contained">Submit</Button>
                    </form>

                )}
            </Formik>

        </div >
    )
}

export default ProductForm;