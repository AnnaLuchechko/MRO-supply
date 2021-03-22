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
import Icon from '../common/Icon';
import CartItem from './/CartItem';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes/index';

class Cart extends PureComponent {

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
      products,
      buttonVisible,
      buttonText,
      type,
      cart
    } = this.props;

    const {visible} = this.state;

    return (
      <View style={style.container}>
        {
          visible &&
          <View>
              <View>
              {
                products.map((item) => (<CartItem
                    type={"vertical"}
                    item={item}
                    cart={cart}
                  />)
                )
              }

            </View>

            {
              buttonVisible &&
              <Button
                text={buttonText}
                styleButton={[
                  styles.button,
                  {marginHorizontal: metrics.baseMargin}
                ]}
                styleText={style.textButtonShow}
                onPress={() => {
                }}
              />
            }
          </View>
        }
      </View>
    );
  }
}

export default (Cart);

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.smallMargin,
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