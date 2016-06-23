/* @flow */
'use strict';

import React, {
  Component,
} from 'react';

import CameraTopBar from "./dash-widgets/camera-top"
import CameraBottomBar from "./dash-widgets/camera-bottom"
import PictureBottomBar from "./dash-widgets/picture-bottom"
import PictureTopBar from "./dash-widgets/picture-top"
import Camera from "./dash-widgets/camera"
import Picture from "./dash-widgets/picture"

import {
  View,
  Text
} from 'react-native';

export default class Dashboard extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return(<View>
      <Camera {...this.props} style ={{flex:1}}/>
      </View>);
  }
}       
