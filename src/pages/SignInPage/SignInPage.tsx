import React, { FC } from "react"
import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import useSignInPageStyles from "./SignInPageStyles";
import { UserCredentials } from "../../models/user-credentials";
import { signInAction } from "../../store/actions/auth/auth.actions";
import { RootState } from "../../store/reducers";

type Props =
    & { className?: any }

const SignInPage: FC<Props> = (props) => {
    const classes = useSignInPageStyles();
    const dispatch = useDispatch();

    const errorMessage = useSelector((state: RootState) => state.auth.errors.signIn)

    function navigateToSignUp() {
        dispatch(push("/sign-up"));
    }

    const handleOnSubmit = (values: UserCredentials, { resetForm, setErrors, setSubmitting }: any) => {
        dispatch(signInAction.request(values));
        setSubmitting(false);
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Incorrect email")
            .required("Please provide an email"),
        password: Yup.string()
            .min(6, "Password min lenght is 6 charters")
            .required("Please provide a password")
    })

    return (
        <div className={classes.root}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
            >
                {({ errors, values, handleChange, handleSubmit, isSubmitting }) => (
                    <div style={{ textAlign: "center" }}>
                        <h1>Sign In</h1>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <TextField
                                className={classes.topAndBottomMargin}
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
                            <p style={{fontSize: "17px", color: "#eb6383"}}>{errorMessage}</p>
                            <p>Does not have an account ?</p>
                            <p className={classes.signUpLink} onClick={() => navigateToSignUp()}>Sign Up</p>
                            <Button className={classes.topAndBottomMargin} type="submit"
                                color="primary" variant="contained" disabled={isSubmitting}>Sign In</Button>
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default SignInPage