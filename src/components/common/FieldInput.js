import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes/index';

import Hoshi from './Hoshi'

export default class FieldInput extends Component {

  render() {

    let {label, type, required, holder} = this.props;

    return (
      <View style={[style.container, this.props.style]}>



        {type === "combo" &&
        <View>
          <View style={style.wrapLabel}>
            <Text style={style.label}>{label}</Text>
            {required&&<Text style={style.required}>*</Text>}
          </View>
          <TouchableOpacity style={style.wrapInput}>
            <Text style={style.text}>
              Saved Address 1
            </Text>
            <View style={style.wrapImageButton}>
              <Image style={style.imageButton} source={require('../../resources/icons/ic_check_box_outline_blank.png')}/>
            </View>
          </TouchableOpacity>
        </View>}
        {type === "text" && <View style={style.wrapInput}>
          {/*<TextInput placeholder={holder}*/}
                     {/*placeholderTextColor={colors.gray70}*/}
                     {/*underlineColorAndroid='transparent'*/}
                     {/*style={style.textInput}/>*/}
          <Hoshi
            required={required}
            style={{flex: 1}}
            labelStyle={style.textEffect}
            inputStyle={style.textInput}
            label={label}
            height={20}
          />
        </View>}

      </View>
    );
  }

}

const style = StyleSheet.create({
  container: {},

  wrapLabel: {
    flexDirection: 'row',
  },

  label: {
    ...fonts.style.t10,
    color: colors.gray52,
    marginTop: 2,
  },

  required: {
    ...fonts.style.t10,
    color: 'red',
    marginLeft: 3,
  },

  wrapInput: {
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

  textEffect: {
    flex: 1,
    ...fonts.style.t10,
    paddingHorizontal: 0,
    paddingVertical: 0,
    color: colors.gray52,
  },

  textInput: {
    flex: 1,
    ...fonts.style.t10,
    margin: 0,
    padding: 0,
    position: 'absolute',
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