import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const TeacherRoute = ({ children, ...rest }) => {
    const { user, teacher } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && teacher ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default TeacherRoute;