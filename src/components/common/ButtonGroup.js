import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import FlatButton from '../common/FlatButton';
import Icon from '../common/Icon';
import ProductItem from '../product/ProductItem';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

class ButtonGroup extends PureComponent {

  render() {

    const {
      type,
    } = this.props;


    return (
      <View style={style.container}>
        <View style={[
          styles.row,
          styles.spaceBetween,
          { marginHorizontal: type === "center" ? metrics.smallMargin : metrics.baseMargin }
        ]}>
          <View style={[
            type === "center" ? styles.center : null,
            styles.row,
            style.containerTitle
          ]}>
            <FlatButton
              text={"Customer Also Purchased"}
              styleButton={style.buttonLeft}
              styleText={style.textButtonSeeActive}
              onPress={() => { }}
            />
            <FlatButton
              text={"Recently Viewed"}
              styleButton={style.buttonRight}
              styleText={style.textButtonSee}
              onPress={() => { }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default (ButtonGroup);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLeft: {
    ...styles.borderLeft,
    paddingHorizontal: 30,
    height: 40,
    backgroundColor: colors.gray92,
  },
  buttonRight: {
    ...styles.borderRight,
    paddingHorizontal: 30,
    height: 40,
    backgroundColor: colors.white,
  },
  title: {
    ...fonts.style.t14,
    color: colors.gray30
  },
  textButtonSee: {
    ...fonts.style.t10,
    color: colors.black
  },
  textButtonSeeActive: {
    ...fonts.style.t10,
    ...fonts.style.bold,
    color: colors.black
  },
  textButtonShow: {
    ...fonts.style.t16,
    color: colors.white
  }
})