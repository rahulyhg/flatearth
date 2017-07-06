// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

import * as actions from '../../../actions/ui';

import { FormInput, TextareaStyled, ButtonStatus } from './status_form.styled';

class Footer extends Component {
  formOnSubmit: Function;
  constructor() {
    super();
    this.formOnSubmit = this.formOnSubmit.bind(this);
  }
  formOnSubmit({ userStatus }) {
    this.props.statusUpdateSend({ statusUpdate: userStatus, user: this.props.userInfo });
    this.props.reset();
  }

  render() {
    const { handleSubmit, newStatus } = this.props;
    return (
      <FormInput onSubmit={handleSubmit(this.formOnSubmit)}>
        <TextareaStyled type="text" name="userStatus" value={newStatus} autoFocus />
        <ButtonStatus>update</ButtonStatus>
      </FormInput>
    );
  }
}

Footer.propTypes = {
  statusUpdateSend: PropTypes.func,
  reset: PropTypes.func,
  handleSubmit: PropTypes.func,
  newStatus: PropTypes.string,
  userInfo: PropTypes.object
};

const mapStateToProps = ({ locals: { user } }) => ({
  userInfo: user.userInfo,
  newStatus: user.newStatus
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      statusUpdateSend: actions.statusUpdateSend,
      storeNewStatus: actions.updateUser
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'statusUpdate',
    fields: ['user_status']
  })(Footer)
);
