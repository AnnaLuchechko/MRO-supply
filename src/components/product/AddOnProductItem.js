import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import AddOnProductDetail from './AddOnProductDetail';
import AddonProductCart from './AddOnProductCart';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

const WIDTH_WIDGET = (metrics.deviceWidth - metrics.baseMargin * 2 - metrics.smallMargin * 2) / 2;

class AddOnProductItem extends PureComponent {

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
        {
          type == 'list' ?
            <View style={style.container}>
              <View style={{ flex: 3.5 }}>
                <ProductDetail
                  item={item}
                  cart={true}
                />
              </View>
              <View style={{ flex: 1 }}>
                <ProductCart />
              </View>
            </View>
            :
            <View style={style.row2}>
              <View style={{ flex: 3 }}>
                <AddOnProductDetail
                  item={item}
                  type={'vertical'}
                  cart={true}
                />
              </View>
              <View style={{ flex: 1.5, margin: -metrics.baseMargin }}>
                <AddonProductCart type={'vertical'} marginCount={metrics.baseMargin} />
              </View>
            </View>
        }
      </View >
    );
  }
}

export default (AddOnProductItem);

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
    backgroundColor: colors.white,
    margin: metrics.smallMargin,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.gray96,
    padding: metrics.baseMargin
  },
})