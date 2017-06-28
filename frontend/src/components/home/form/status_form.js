// @flow
import React, { Component } from 'react';
import ButtonTheme from '../../../theme/components/button.styled';
import { FormInput, TextareaStyled as Textarea } from './status_form.styled';

class Footer extends Component {
  formOnSubmit(event: SyntheticEvent) {
    event.preventDefault();
    console.log(event);
  }
  render() {
    return (
      <FormInput onSubmit={this.formOnSubmit.bind(this)}>
        <label htmlFor="user_status" />
        <Textarea type="text" id="user_status" />
        <ButtonTheme onClick={() => {}}>Send</ButtonTheme>
      </FormInput>
    );
  }
}

export default Footer;
