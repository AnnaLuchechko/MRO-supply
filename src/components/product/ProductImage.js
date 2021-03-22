import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

class ProductImage extends PureComponent {

  static propTypes = {
    stock: PropTypes.bool,
    refs: PropTypes.string,
    image: PropTypes.any,
  };

  static defaultProps = {
    stock: false,
    refs: "-",
    image: require("../../resources/images/empty.png")
  };

  render() {

    const {
      stock,
      addon,
      refs,
      image
    } = this.props

    return (
      <View style={style.container}>
        <View style={[
          styles.row,
          styles.spaceBetween
        ]}>
          {
            stock ?
              <View style={[
                style.containerStock,
                styles.center
              ]}>
                <Text style={fonts.style.t10}>
                  In Stock
                </Text>
              </View>
              :(!addon)&&
              <View style={[
                style.containerNoStock,
                styles.center
              ]}>
                <Text style={fonts.style.t10}>
                  Check Availability
                </Text>
              </View>
          }

          {
            addon &&
              <View style={[
                style.containerAddOn,
                styles.center
              ]}>
                <Text style={[fonts.style.t10, {color:colors.white}]}>
                  -60%
                </Text>
              </View>

          }
          <Text style={style.textRef}>
            {refs}
          </Text>
        </View>
        <View style={styles.center}>
          <Image
            resizeMode={'contain'}
            style={style.image}
            source={image}
          />
        </View>
      </View>
    );
  }
}
export default (ProductImage);

const style = StyleSheet.create({
  container: {
    flex: 1,
    // marginRight: metrics.baseMargin,
  },
  containerStock: {
    paddingHorizontal: metrics.smallMargin,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: metrics.radius
  },
  containerAddOn: {
    paddingHorizontal: metrics.smallMargin,
    backgroundColor: colors.red86,
    borderRadius: metrics.radius,
    paddingVertical: 2,
  },
  containerNoStock: {
    paddingHorizontal: metrics.smallMargin,
    borderColor: colors.bleu93,
    borderWidth: 1,
    borderRadius: metrics.radius
  },
  image: {
    width: 130,
    height: 130
  },
  textRef: {
    ...fonts.style.t9,
    color: colors.gray70,
    position: 'absolute',
    right: 0,
  }
})