import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const { signed } = useSelector(state => state.auth);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/profile" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Component {...props} />
        </>
      )}
    />
  );
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
