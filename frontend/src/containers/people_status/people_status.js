import React, { Component } from 'react';
import PeoplestatusStyled from './people_status.styled';
import { UserlistStyled } from '../people_list/people_list.styled';

class Peoplestatus extends Component {
  render() {
    return (
      <UserlistStyled>
        <PeoplestatusStyled>
          <div className="new-users">
            <h3>Latest status update</h3>
          </div>

          {this.props.children}
        </PeoplestatusStyled>
      </UserlistStyled>
    );
  }
}

export default Peoplestatus;
