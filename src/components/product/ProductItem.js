import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import ProductDetail from './ProductDetail';
import ProductCart from './ProductCart';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

const WIDTH_WIDGET = (metrics.deviceWidth - metrics.baseMargin * 2 - metrics.smallMargin * 2) / 2;

class ProductItem extends PureComponent {

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
      item,
      hideCart
    } = this.props;

    return (
      <TouchableWithoutFeedback>
        {
          type == 'list' ?
            <View style={style.container}>
              <View style={{ flex: 3.5 }}>
                <ProductDetail
                  item={item}
                  cart={true}
                />
              </View>
              {!hideCart&&<View style={{ flex: 1 }}>
                <ProductCart />
              </View>}
            </View>
            :
            <View style={[style.row2,hideCart&&{height:220}]}>
              <View style={{ flex: 3 }}>
                <ProductDetail
                  item={item}
                  type={'vertical'}
                  cart={true}
                />
              </View>
              {!hideCart&&<View style={{ flex: 1.5 }}>
                <ProductCart type={'vertical'} />
              </View>}
            </View>
        }
      </TouchableWithoutFeedback >
    );
  }
}

export default (ProductItem);

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    backgroundColor: colors.white,
    marginVertical: metrics.smallMargin,
    marginHorizontal: metrics.baseMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },
  row: {
    width: WIDTH_WIDGET,
    height: 220,
    backgroundColor: colors.white,
    margin: metrics.smallMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },
  row2: {
    width: WIDTH_WIDGET,
    height: 320,
    backgroundColor: colors.white,
    margin: metrics.smallMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },
})