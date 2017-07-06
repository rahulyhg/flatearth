// @flow

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import * as actions from '../../../actions';

import FormSignUp from './signup.styled';
import {
  Label,
  Icon,
  Textarea,
  FieldsetStyled,
  Input
} from '../../../theme/components/ReduxFormFieldset.styled';
import { ButtonTheme } from '../../../theme/components.styled';

const FieldInput = (type, fieldName, autoFocus) => ({ input, meta }) => [
  <Input name={type} type={type} key={`${fieldName}_signup`} autoFocus={autoFocus} {...input} />,
  <Icon key={`${fieldName}_signupIcon`} />,
  meta.touched &&
    meta.error &&
    <div className="error" key={`${fieldName}_Alert`}>
      {meta.error}
    </div>
];

/* Redux form requires static components it's temporaly hack*/
const AUTOFOCUS = true;
const Name = FieldInput('user', 'name', AUTOFOCUS);
const Email = FieldInput('email', 'email');
const Password = FieldInput('password', 'password');
const PasswordConfirm = FieldInput('password', 'passwordConfirm');

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

    return (
      <FormSignUp onSubmit={handleSubmit(this.handleFormSubmit)}>
        <FieldsetStyled>
          <Label htmlFor="user">Name: </Label>
          <Field name="user" component={Name} />
        </FieldsetStyled>

        <FieldsetStyled>
          <Label htmlFor="email">Email:</Label>
          <Textarea name="email" component={Email} />
        </FieldsetStyled>
        <FieldsetStyled>
          <Label htmlFor="password">Password:</Label>
          <Textarea name="password" component={Password} />
        </FieldsetStyled>
        <FieldsetStyled>
          <Label htmlFor="passwordConfirm">Confirm Password:</Label>
          <Textarea name="passwordConfirm" component={PasswordConfirm} />
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

Signup.propTypes = {
  history: PropTypes.obj,
  errorMessage: PropTypes.string,
  signupUser: PropTypes.func,
  handleSubmit: PropTypes.func
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
