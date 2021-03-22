import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

const WIDTH_WIDGET = (metrics.deviceWidth - metrics.baseMargin * 2 - metrics.smallMargin * 2) / 3;

import { categoryImages} from '../../dummyData/index';

class CatalogItem extends PureComponent {

  static propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func.isRequired,
  };

  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableOpacity
        style={style.container}
        onPress={onPress}
      >
        <View style={[
          styles.center,
          style.containerImage
        ]}>
          <Image
            resizeMode={'contain'}
            style={style.image}
            source={categoryImages[Math.floor(Math.random()*categoryImages.length)]}
          />
        </View>
        <Text style={style.title}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default (CatalogItem);

const style = StyleSheet.create({
  container: {
    width: WIDTH_WIDGET,
    marginHorizontal: metrics.smallMargin / 2,
    marginVertical: metrics.smallMargin,
  },
  containerImage: {
    backgroundColor: colors.white,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    marginBottom: metrics.smallMargin
  },
  image: {
    width: WIDTH_WIDGET - metrics.baseMargin,
    height: WIDTH_WIDGET - metrics.baseMargin
  },
  title: {
    ...fonts.style.t9,
    ...fonts.style.f500,
    color: colors.black
  },
  subTitle: {
    ...fonts.style.t10,
    color: colors.black
  }
})
