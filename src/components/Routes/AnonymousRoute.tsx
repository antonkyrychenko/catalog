import React, { FC, useContext } from "react";
import { RouteProps, Redirect, Route, RouteComponentProps } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";

const AnonymousRoute: FC<RouteProps> = props => {
    const { component: RouteComponent, ...rest } = props;
    const currentUser = useContext(AuthContext);

    const routeRender = (renderProps: RouteComponentProps<any>) => {
        const { component: Component } = props;

        if (!Component) {
            return null;
        }

        if (!currentUser) {
            return <Component {...renderProps} />
        }

        return <Redirect to="/" />
    };

    return <Route {...rest} render={routeRender} />
}

export default AnonymousRoute;
