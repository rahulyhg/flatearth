// @flow

// TODO
import React from 'react';

import initMap from './google-map/googleApi';

class MapProvider {
  constructor(mapProvider: ?{}) {
    this.api = mapProvider;
  }

  computeDistanceBetween() {
    this.api;
  }

  distanceToMiddleEarth(location) {
    
  }

  static connect(mapProvider) {
    let map;
    mapProvider(mapInit => {
      map = mapInit;
    });
    return new MapProvider(map);
  }
}

export default MapProvider.connect(initMap);
