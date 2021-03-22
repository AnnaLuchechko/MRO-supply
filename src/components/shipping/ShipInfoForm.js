import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import Button from '../common/Button';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes/index';
import FieldInput from "../common/FieldInput";
import Separator from "../common/Separator";

class ShipInfoForm extends PureComponent {

  state = {
    visible: true
  }

  static propTypes = {
    title: PropTypes.string,
    products: PropTypes.any,
    buttonVisible: PropTypes.bool,
    buttonText: PropTypes.string,
    cart: PropTypes.bool,
  };

  static defaultProps = {
    title: "",
    products: [],
    buttonVisible: false,
    buttonText: "",
    type: "left",
    cart: false
  };

  changeState(value) {
    this.setState({visible: value});
  }

  _keyExtractor = (item) => item.id;

  render() {

    const {
      title,
    } = this.props;

    return (
      <View style={style.container}>
        <FieldInput label={"Address"}
                    required={false}
                    type={"combo"}/>
        <Separator/>
        <FieldInput label={"First Name"}
                    required={true}
                    type={"text"}/>
        <Separator/>
        <FieldInput label={"Last Name"}
                    required={true}
                    type={"text"}/>
        <Separator/>
        <FieldInput label={"Company Name"}
                    required={false}
                    type={"text"}/>
        <Separator/>
        <FieldInput label={"Address 1"}
                    required={true}
                    type={"text"}/>
        <Separator/>
        <FieldInput label={"Address 2"}
                    required={false}
                    type={"text"}/>
        <Separator/>
        <FieldInput label={"City"}
                    required={true}
                    type={"text"}/>
        <Separator/>
        <FieldInput label={"State"}
                    required={true}
                    type={"combo"}/>
        <Separator/>
        <FieldInput label={"Postal Code"}
                    required={true}
                    type={"text"}/>
        <Separator/>
        <FieldInput label={"Country"}
                    required={true}
                    type={"combo"}/>
        <Separator/>
        <FieldInput label={"Email"}
                    required={true}
                    type={"text"}/>
        <Separator/>
        <FieldInput label={"Phone Number"}
                    required={true}
                    type={"text"}/>
        <Separator/>
        <FieldInput label={"Fax Name"}
                    required={false}
                    type={"text"}/>
        <Separator/>
      </View>
    );
  }
}

export default (ShipInfoForm);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    marginVertical: metrics.smallMargin
  },
  list: {
    paddingHorizontal: metrics.smallMargin,
    marginVertical: metrics.baseMargin
  },
  button: {
    ...styles.border,
    width: 80,
    height: 40,
    marginHorizontal: metrics.doubleBaseMargin,
    backgroundColor: colors.white,
  },
  title: {
    ...fonts.style.t14,
    color: colors.gray30
  },
  textButtonSee: {
    ...fonts.style.t12,
    color: colors.black
  },
  textButtonShow: {
    ...fonts.style.t16,
    color: colors.white
  }
})