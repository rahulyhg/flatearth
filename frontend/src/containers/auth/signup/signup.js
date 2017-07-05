// @flow

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import { FormSignUp } from './signup.styled';
import {
  Label,
  Icon,
  Textarea,
  FieldsetStyled,
  Input
} from '../../../theme/components/ReduxFormFieldset.styled';
import { ButtonTheme } from '../../../theme/components.styled';

const FieldInput = (type, fieldName, autoFocus) => ({ input, meta }) => [
  <Input name={type} {...input} type={type} key={fieldName} autoFocus={autoFocus} />,
  <Icon />,
  meta.touched &&
    meta.error &&
    <div className="error" key={fieldName + 'Alert'}>
      {meta.error}
    </div>
];

class Signup extends Component {
  handleFormSubmit: Function;
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps, () => {
      this.props.history.push('/signin');
    });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! </strong>
          {this.props.errorMessage}
        </div>
      );
    }
    return null;
  }

  render() {
    const { handleSubmit } = this.props;
    const AUTOFOCUS = true;
    return (
      <FormSignUp onSubmit={handleSubmit(this.handleFormSubmit)}>
        <FieldsetStyled>
          <Label htmlFor="user">Name: </Label>
          <Field name="user" component={FieldInput('user', 'Name', AUTOFOCUS)} />
        </FieldsetStyled>

        <FieldsetStyled>
          <Label htmlFor="email">Email:</Label>
          <Textarea name="email" component={FieldInput('email', 'email')} />
        </FieldsetStyled>
        <FieldsetStyled>
          <Label htmlFor="password">Password:</Label>
          <Textarea name="password" component={FieldInput('password', 'password')} />
        </FieldsetStyled>
        <FieldsetStyled>
          <Label htmlFor="passwordConfirm">Confirm Password:</Label>
          <Textarea name="passwordConfirm" component={FieldInput('password', 'passwordConfirm')} />
        </FieldsetStyled>
        {this.renderAlert()}
        <ButtonTheme>Sign up!</ButtonTheme>
      </FormSignUp>
    );
  }
}

const validate = ({ password, email, passwordConfirm, user }) => {
  const errors = {};
  if (!email) {
    errors.email = 'Please enter an email';
  }
  if (!password) {
    errors.password = 'Please enter an password';
  }
  if (!passwordConfirm) {
    errors.passwordConfirm = 'Please enter an password confirm';
  }
  if (!user) {
    errors.user = 'Please enter an user name';
  }
  if (password !== passwordConfirm) {
    errors.password = 'Password must match';
  }
  return errors;
};

const mapStateToProps = ({ locals: { auth } }) => ({
  errorMessage: auth.error
});

export default connect(mapStateToProps, actions)(
  reduxForm({
    form: 'signup',
    fields: ['user', 'email', 'password', 'passwordConfirm'],
    validate
  })(Signup)
);
