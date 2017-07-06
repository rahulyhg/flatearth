import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  function mapStateToProps({ locals: { auth } }) {
    return { authenticated: auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
