import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

var styles = StyleSheet.create({
  background: {
    backgroundColor: '#bbbbbb',
    height: 5,
    overflow: 'hidden'
  },

  cropView: {
    height: 5,
    backgroundColor: '#ffffff01',
    borderRadius: 4,
    overflow: 'hidden',
  },

  progressValue: {
    backgroundColor: '#3b5998',
    height: 5,
    borderRadius: 4,
    position: 'absolute',
  }


});

export default class ProgressBar extends Component {


  constructor(props) {
    super(props);
    this.state = {
      progress: 0.5,
    };
  }

  render() {

    let fillWidth = this.props.progress * this.props.width;
    return (
      <View style={[styles.background, this.props.backgroundStyle, {width: this.props.width}]}>
        <View style={[styles.cropView, {width:fillWidth}]} clipChildren={true} clipsToBounds={true}>
          <View style={[styles.progressValue, this.props.progressStyle, {width: this.props.width}]}/>
        </View>
      </View>
    );
  }

}