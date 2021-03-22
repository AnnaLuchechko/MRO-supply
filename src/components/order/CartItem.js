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

const WIDTH_WIDGET = (metrics.deviceWidth - metrics.baseMargin * 2 - metrics.smallMargin * 2) / 2;

class CartItem extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    item: PropTypes.object,
  };

  static defaultProps = {
    type: "list",
  };

  render() {

    const {
      type,
      item
    } = this.props;

    return (
      <View>
        <View style={style.container}>
          <View style={{flex: 1}}>
            <Text style={style.nameLabel}>EM3615T <Text style={style.infoLabel}>5HP, 1750RPM, 3PH</Text></Text>
            <Text style={style.refsLabel}>#12345678</Text>
          </View>
          <View style={{flex: 3.5, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                resizeMode={'contain'}
                style={style.image}
                source={item.image}
              />
              <TouchableOpacity style={style.wrapDeleteIcon}>
                <Image
                  style={style.deleteIcon}
                  source={require("../../resources/icons/ic_delete_white_36dp_1x.png")}/>
                <Text style={style.deleteLabel}>remove</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <View style={[
                styles.row,
                {alignItems: "center"}
              ]}>
                <Text style={style.price}>
                  $ {item.price}
                </Text>
                <Text style={style.currency}>
                  / {item.currency}
                </Text>
              </View>
              <ProductCart type={'vertical'} label={"UPDATE"} buttonStyle={{ ...fonts.style.bold,color: colors.white }}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default (CartItem);

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    backgroundColor: colors.white,
    marginVertical: metrics.smallMargin,
    marginHorizontal: metrics.smallMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },
  row: {
    height: 220,
    backgroundColor: colors.white,
    margin: metrics.smallMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },
  row2: {
    height: 320,
    backgroundColor: colors.white,
    margin: metrics.smallMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },
  nameLabel: {
    ...fonts.style.t14,
    ...fonts.style.bold,
    color: colors.black,
  },
  infoLabel: {
    ...fonts.style.t14,
    color: colors.gray30,
  },

  refsLabel: {
    ...fonts.style.t10,
    marginTop: 5,
    color: colors.gray30,
  },
  price: {
    ...fonts.style.t14,
    color: colors.secondaryColor
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