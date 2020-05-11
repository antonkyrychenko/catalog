import React, { FC } from "react"
import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core";

import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { push } from "connected-react-router";
import { signUpAction } from "../../store/actions/auth/auth.actions";
import { UserCredentials } from "../../models/user-credentials";
import useSignUpPageStyles from "./SignUpPageStyles";
import { RootState } from "../../store/reducers";

type Props =
    & { className?: any }

const SignUpPage: FC<Props> = (props) => {
    const classes = useSignUpPageStyles();
    const dispatch = useDispatch();

    const errorMessage = useSelector((state: RootState) => state.auth.errors.signUp)

    function navigateToSignIn() {
        dispatch(push("/sign-in"));
    }

    const handleOnSubmit = (values: any, { resetForm, setErrors, setSubmitting }: any) => {
        dispatch(signUpAction.request({
            email: values.email,
            password: values.password
        }));

        setSubmitting(false);
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Incorrect email")
            .required("Please provide an email"),
        password: Yup.string()
            .min(6, "Password min lenght is 6 charters")
            .required("Please provide a password"),
        confirmPassword: Yup.string()
            .when("password", {
                is: confirm => confirm && confirm.length > 0 ? true : false,
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same")
            })
            .required("Please confirm the password"),
    })

    return (
        <div className={classes.root}>
            <Formik
                initialValues={{ email: "", password: "", confirmPassword: "" }}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
            >
                {({ errors, values, handleChange, handleSubmit, isSubmitting }) => (
                    <div style={{ textAlign: "center" }}>
                        <h1>Sign Up</h1>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <TextField
                                className={classes.topAndBottomMargin}
                                id="email"
                                autoFocus
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                                label="Email"
                                helperText={errors.email}
                                error={!!errors.email}
                            />
                            <TextField
                                className={classes.topAndBottomMargin}
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                                label="Password"
                                helperText={errors.password}
                                error={!!errors.password}
                            />
                            <TextField
                                className={classes.topAndBottomMargin}
                                type="password"
                                name="confirmPassword"
                                onChange={handleChange}
                                value={values.confirmPassword}
                                label="Confirm Password"
                                helperText={errors.confirmPassword}
                                error={!!errors.confirmPassword}
                            />
                            <p style={{ fontSize: "17px", color: "#eb6383" }}>{errorMessage}</p>
                            <p>Already have an account ?</p>
                            <p className={classes.signUpLink} onClick={() => navigateToSignIn()}>Sign In</p>
                            <Button className={classes.topAndBottomMargin} type="submit"
                                color="primary" variant="contained" disabled={isSubmitting}>Sign Up</Button>
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default SignUpPage