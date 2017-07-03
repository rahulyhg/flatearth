// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../../actions/ui';
import ButtonTheme from '../../../theme/components/button.styled';
import { FormInput, TextareaStyled as Textarea } from './status_form.styled';

class Footer extends Component {
  formOnSubmit(event: SyntheticEvent) {
    event.preventDefault();
    console.log(event);
  }
  render() {
    const { newStatus, statusUpdate } = this.props;
    return (
      <FormInput onSubmit={this.formOnSubmit.bind(this)}>
        <label htmlFor="user_status" />
        <Textarea type="text" id="user_status" value={newStatus} />
        <ButtonTheme onClick={statusUpdate}>Send</ButtonTheme>
      </FormInput>
    );
  }
}

const mapStateToProps = ({ locals: { user } }) => ({
  newStatus: user.newStatus
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ statusUpdate: actions.wsSendmessage }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
