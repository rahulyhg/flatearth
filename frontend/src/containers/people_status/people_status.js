// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import PeoplestatusStyled from './people_status.styled';
import { UserlistStyled } from '../people_list/people_list.styled';
import UserInfo from '../people_list/user_info';

const randomMan = {
  profileImg: 'https://randomuser.me/api/portraits/women/51.jpg',
  name: 'Wind',
  country: 'Ukraine',
  statusMessage: 'Hello from the Midgard Earth'
};
class Peoplestatus extends Component {
  render() {
    return (
      <UserlistStyled>
        <PeoplestatusStyled>
          <div className="new-users">
            <h3>Latest status update</h3>
          </div>
          <UserInfo userInfo={randomMan} />
          {this.props.children}
          {this.props.messages &&
            this.props.messages.map(x => {
              return <h1>{x.name}</h1>;
            })}
        </PeoplestatusStyled>
      </UserlistStyled>
    );
  }
}

const mapStateToProps = ({ usersStatus }, ownProps) => {
  
  return {
    messages: usersStatus.messages
  };
};

export default connect(mapStateToProps)(Peoplestatus);
