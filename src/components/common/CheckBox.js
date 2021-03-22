import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';

import Icon from "./Icon";
import {
  styles,
  colors,
  fonts,
  metrics,
} from '../../themes';

export default class CheckBox extends Component {

  static propTypes = {
    checked: PropTypes.bool,
    onPress: PropTypes.func,
  };


  static defaultProps = {
    onPress: () => { },
  };


  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  click() {
    this.setState({checked: !this.state.checked})
    //alert(this.state.checked);
  }


  render() {
    const {
      onPress
    } = this.props;

    return (
      <View
        style={[
          styles.row,
          style.container,
        ]}
      >
        {this.state.checked&&<Icon
          onPress={this.click.bind(this)}
          width={30}
          image={require("../../resources/icons/ic_check_box.png")}
          color={colors.green}
        />}
        {!this.state.checked&&<Icon
          onPress={this.click.bind(this)}
          width={30}
          image={require("../../resources/icons/ic_check_box_outline_blank.png")}
          color={colors.primaryColor}
        />}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 40
  },
  text: {
    ...fonts.style.t15,
    marginHorizontal: metrics.smallMargin
  }
});
