import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes/index';


export default class SortBox extends Component {

  render() {
    let {type} = this.props;
    return (
      <TouchableOpacity style={[style.container, this.props.style]}>
        <View style={style.borderBottom}>
          <Text style={style.text}>
            Sort by: {type}
          </Text>
          <View style={style.wrapImageButton}>
            <Image style={style.imageButton} source={require('../../resources/icons/ic_check_box_outline_blank.png')}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 4,
    paddingVertical: 12,
  },

  borderBottom: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryColor,
    flexDirection: 'row',
  },

  input: {
    flex: 1,
  },

  text: {
    flex: 1,
    ...fonts.style.t10,
    paddingHorizontal: 0,
    paddingVertical: 5,
  },

  wrapImageButton: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageButton: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },

});