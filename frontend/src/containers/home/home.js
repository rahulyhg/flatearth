// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

import * as actions from '../../actions/ui';
import { FlatEarthMain } from './home.styled';
import ButtonNavigator from '../flatearth/buttonNavigator/buttonNavigator';
// TODO import CompassSVG from '../../assets/compass.svg';

class Home extends Component {
  state: {
    latitude: ?number,
    longitude: ?number
  };
  findUserPosition: Function;
  constructor() {
    super();
    this.findUserPosition = this.findUserPosition.bind(this);
    this.state = {
      latitude: undefined,
      longitude: undefined
    };
  }

  findUserPosition({ latitude, longitude }) {
    if (this.props.authenticated) {
      this.setState({ latitude, longitude });
    } else {
      this.props.history.push('/signin');
    }
  }
  render() {
    const { latitude, longitude } = this.state;
    return (
      <FlatEarthMain>
        <h1>WIP (Work-in-Progress)</h1>
        <p>Hi and wellcome on Flat earth portal</p>
        <hr />
        <p>I have an a Idea how to find truth about Flat Earth</p>
        <p>
          And luckily <strong>Agile Engine asked</strong> to make a project on my choice about something
          interesting for me{' '}
        <hr />
        </p>
        <br />
        <strong>
          For demo only ;-)
          <p>Hope you enjoy my TEST-TASK SPA</p>
        </strong>
        <ButtonNavigator callback={this.findUserPosition}>Find my position</ButtonNavigator>
        latitude: {latitude}
        <hr />
        longitude: {longitude}
      </FlatEarthMain>
    );
  }
}

Home.propTypes = {
  authenticated: PropTypes.bool,
  history: PropTypes.object
};

const mapStateToProps = ({ locals: { auth } }) => ({
  authenticated: auth.authenticated
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ updatePosition: actions.positionUpdateSend }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
