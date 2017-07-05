import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { SigninForm, ControlsStyled } from './signin.styled';
import {
  Label,
  Icon,
  Textarea,
  FieldsetStyled
} from '../../../theme/components/ReduxFormFieldset.styled';
import { ButtonTheme } from '../../../theme/components.styled';
import * as actions from '../../../actions';

class Signin extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.signupClick = this.signupClick.bind(this);
  }

  signupClick() {
    this.props.history.push('/signup');
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
          <Textarea name="user" component="input" type="text" />
          <Label htmlFor="user">Name:</Label>
          <Icon />
        </FieldsetStyled>
        <FieldsetStyled>
          <Textarea name="password" component="input" type="password" />
          <Label htmlFor="password">Password:</Label>
          <Icon />
        </FieldsetStyled>
        {this.alertMessage()}
        <ControlsStyled>
          <ButtonTheme action="submit" padding>
            Sign in
          </ButtonTheme>
          <ButtonTheme onClick={this.signupClick}>Sign up</ButtonTheme>
        </ControlsStyled>
      </SigninForm>
    );
  }
}

const mapStateToProps = ({ locals: { auth } }) => {
  return {
    errorMessage: auth.error
  };
};

export default connect(mapStateToProps, actions)(
  reduxForm({
    form: 'signin',
    fields: ['user', 'password']
  })(Signin)
);
