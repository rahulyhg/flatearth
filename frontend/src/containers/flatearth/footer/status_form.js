// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import * as actions from '../../../actions/ui';
import ButtonTheme from '../../../theme/components/button.styled';

import { FormInput, TextareaStyled, ButtonStatus } from './status_form.styled';

class Footer extends Component {
  constructor() {
    super();
    this.formOnSubmit = this.formOnSubmit.bind(this);
  }
  formOnSubmit({ userStatus }) {
    this.props.statusUpdate(userStatus);
  }
  componentDidMount() {
    console.log(this);
  }
  render() {
    const { handleSubmit, newStatus, statusUpdate } = this.props;
    return (
      <FormInput onSubmit={handleSubmit(this.formOnSubmit)}>
        <TextareaStyled type="text" name="userStatus" value={newStatus} autoFocus />
        <ButtonStatus>update</ButtonStatus>
      </FormInput>
    );
  }
}

const mapStateToProps = ({ locals: { user } }) => ({
  newStatus: user.newStatus
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ statusUpdate: actions.wsSendmessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'statusUpdate',
    fields: ['user_status']
  })(Footer)
);
