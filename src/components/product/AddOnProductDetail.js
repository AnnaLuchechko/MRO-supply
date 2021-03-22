import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View
} from 'react-native';

import ProductImage from './ProductImage';
import AddOnProductInfo from './AddOnProductInfo';
import {
  metrics,
  styles,
  colors
} from '../../themes';

class ProductDetail extends PureComponent {

  static propTypes = {
    item: PropTypes.object,
    type: PropTypes.string,
    cart: PropTypes.bool
  };

  static defaultProps = {
    type: "horizontal",
    cart: false
  };

  render() {

    const {
      item,
      type,
      cart
     } = this.props;

    return (
      <View style={[
        style.container,
        type === "horizontal" ? styles.row : null
      ]}
      >
        <View style={style.containerImage}>
          <ProductImage
            addon={"-60%"}
            refs={item.refs}
            image={item.image}
          />
        </View>
        <View style={style.containerInfo}>
          <AddOnProductInfo
            name={item.name}
            info={item.info}
            catalog={item.catalog}
            feature={item.feature}
            description={item.description}
            price={item.price}
            currency={item.currency}
            type={type}
            cart={cart}
            viewDetail={true}
          />
        </View>
      </View>
    );
  }
}
export default (ProductDetail);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    flex: 1,
    // marginRight: metrics.baseMargin,
  },
  containerInfo: {
    flex: 1
  }
})