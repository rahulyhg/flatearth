import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { SigninForm, Label, Icon, Textarea, FieldsetStyled, ControlsStyled } from './signin.styled';
import { ButtonTheme } from '../../../theme/components.styled';
import * as actions from '../../../actions';

class Signin extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ user, password }) {
    this.props.signinUser({ user, password }, () => {
      this.props.history.push('/flatearth');
    });
  }

  alertMessage() {
    return this.props.errorMessage
      ? <ul className="alert alert-danger">
          <strong>Oops! </strong>
          {this.props.errorMessage}
        </ul>
      : '';
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <SigninForm onSubmit={handleSubmit(this.handleFormSubmit)}>
        <FieldsetStyled>
          <Field id="user" name="user" component={Textarea} type="text" />
          <Label htmlFor="user">Name:</Label>
          <Icon />
        </FieldsetStyled>
        <FieldsetStyled>
          <Field id="password" name="password" component={Textarea} type="password" />
          <Label htmlFor="password">Password:</Label>
          <Icon />
        </FieldsetStyled>
        {this.alertMessage()}
        <ControlsStyled>
          <ButtonTheme action="submit" padding>Sign in</ButtonTheme>
          <ButtonTheme>Sign up</ButtonTheme>
        </ControlsStyled>
      </SigninForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.error
  };
};

export default connect(mapStateToProps, actions)(
  reduxForm({
    form: 'signin',
    fields: ['user', 'password']
  })(Signin)
);