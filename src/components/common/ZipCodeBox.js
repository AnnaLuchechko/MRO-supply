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


export default class ZipCodeBox extends Component {

  render() {
    return (
      <View style={[style.container, this.props.style]}>
        <TextInput placeholder="Your ZIP Code"
                   placeholderTextColor={colors.gray70}
                   underlineColorAndroid='transparent'
                   style={style.zipCodeInput}/>
        <TouchableOpacity  style={style.calcButton}>
          <Text style={style.calcLabel}>CACULATE</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const style = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    backgroundColor: colors.gray97,
    borderRadius: 4,
  },

  zipCodeInput: {
    flex: 1,
    ...fonts.style.t10,
    paddingHorizontal: 10,
  },

  calcButton: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray84,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

  calcLabel: {
    ...fonts.style.t10,
    ...fonts.style.bold,
    color: colors.gray52,
  },

});