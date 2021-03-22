import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import ProductCart from '../product/ProductCart';
import Icon from '../common/Icon'



import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes/index';
import TouchableItem from "react-navigation/lib-rn/views/TouchableItem";
import Separator from "../common/Separator";
import ProgressBar from "../common/ProgressBar";
import ZipCodeBox from "../common/ZipCodeBox";


const WIDTH_WIDGET = (metrics.deviceWidth - metrics.baseMargin * 2 - metrics.smallMargin * 2) / 2;

class OrderTotal extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    item: PropTypes.object,
  };

  static defaultProps = {
    type: "list",
  };

  render() {


    return (
      <View>
        <View style={style.container}>
          <Text style={style.titleLabel}>Order Total</Text>
          <Separator/>
          <Text style={style.shipInfoLabel}>$1.83 away from FREE shipping</Text>
          <View style={style.wrapProgress}>
            <ProgressBar
              width={metrics.deviceWidth - metrics.baseMargin * 4}
              backgroundStyle={{backgroundColor: '#cccccc', borderRadius: 2}}
              progressStyle={{backgroundColor: '#1dcc1d', borderRadius: 2}}
              progress={0.5}/>
            </View>
          <Separator/>
          <View style={[style.wrapRow, {marginTop: 15}]}>
            <Text style={style.rowLabel}>Subtotal(2 items)</Text>
            <Text style={style.priceLabel}>$6,123.5</Text>
          </View>
          <View style={style.wrapRow}>
            <Text style={style.rowLabel}>Standart Shipping</Text>
            <TouchableOpacity style={style.wrapHelpIcon}>
              <Image style={style.helpIcon} source={require('../../resources/icons/ic_help_white.png')}/>
            </TouchableOpacity>
            <Text style={style.shippingTypeLabel}>FREE</Text>
          </View>
          <ZipCodeBox style={style.zipCode}/>
          <Separator/>
          <View style={style.wrapRow}>
            <Text style={style.couponLabel}>COUPON CODE</Text>
            <TouchableOpacity style={style.wrapHelpIcon}>
              <Image style={style.helpIcon} source={require('../../resources/icons/ic_help_white.png')}/>
            </TouchableOpacity>
            <View style={{flex: 1}}/>
            <TouchableOpacity style={style.wrapHelpIcon}>
              <Image style={style.expandIcon} source={require('../../resources/icons/ic_help_white.png')}/>
            </TouchableOpacity>
          </View>
          <Separator marginVertical={10}/>
        </View>
      </View>
    );
  }
}

export default (OrderTotal);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },
  titleLabel: {
    textAlign: 'center',
    ...fonts.style.t14,
    ...fonts.style.bold,
    color: colors.black,
    marginBottom: 10,
  },
  shipInfoLabel: {
    ...fonts.style.t10,
    ...fonts.style.bold,
    color: colors.black,
    marginVertical: 10,
  },

  wrapRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  rowLabel: {
    flex: 1,
    ...fonts.style.t10,
    color: colors.black,
  },

  priceLabel: {
    ...fonts.style.t10,
    color: colors.secondaryColor
  },

  shippingTypeLabel: {
    ...fonts.style.t10,
    ...fonts.style.bold,
    color: colors.black,
  },

  wrapHelpIcon: {
    padding: 5,
  },

  helpIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: colors.gray70,
  },

  expandIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: colors.primaryColor,
  },


  wrapProgress: {
    marginBottom: 15,
  },

  zipCode: {
    marginVertical: 15,
  },

  couponLabel: {
    ...fonts.style.t10,
    ...fonts.style.bold,
    color: colors.gray70,
  },

  currency: {
    ...fonts.style.t14,
    color: colors.gray84
  },
  image: {
    width: 130,
    height: 130
  },
  wrapDeleteIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: colors.gray70,
  },
  deleteLabel: {
    ...fonts.style.t9,
    color: colors.gray70,
  },


})