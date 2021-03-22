import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes/index';
import Icon from "./Icon";


export default class FilterItem extends Component {


  constructor(props) {
    super(props);
    let {data} = this.props;
    this.state = {
      active: data ? data.active : false,
    }
  }

  inActiveItem() {
    this.setState({active: !this.state.active})
  }


  render() {
    let {data} = this.props;
    // alert(JSON.stringify(data))
    return (
      <TouchableOpacity style={[style.container, this.state.active && style.containerActive, this.props.style]}
                        onPress={this.inActiveItem.bind(this)}>
        <View style={[style.dot, this.state.active && style.dotActive]}/>
        <Text style={[style.label, this.state.active && style.labelActive]}>{data.item.label}</Text>
        {
          this.state.active &&
          <Icon
            onPress={this.inActiveItem.bind(this)}
            width={25}
            image={require("../../resources/icons/ic_check_box_outline_blank.png")}
            color={colors.primaryColor}
          />
        }
      </TouchableOpacity>
    );
  }

}

const style = StyleSheet.create({
  container: {
    flex: 0.5,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 5,
    marginRight: 10,
  },

  containerActive: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.primaryColor,
  },

  dot: {
    width: 4,
    height: 4,
    backgroundColor: colors.gray52,
    borderRadius: 2,
  },

  dotActive: {
    backgroundColor: colors.primaryColor,
  },

  label: {
    flex: 1,
    ...fonts.style.t10,
    paddingHorizontal: 10,
    color: colors.gray52,
  },

  labelActive: {
    flex: 1,
    ...fonts.style.t10,
    paddingHorizontal: 10,
    color: colors.primaryColor,
  },

  deleteButton: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray84,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

});