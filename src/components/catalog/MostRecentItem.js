import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import Button from '../common/Button';
import ButtonGroup from '../common/ButtonGroup';
import ProductItem from '../product/ProductItem';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

class MostRecentItem extends PureComponent {

  state = {
    visible: true
  }

  static propTypes = {
    products: PropTypes.any,
    buttonVisible: PropTypes.bool,
    buttonText: PropTypes.string,
    cart: PropTypes.bool,
  };

  static defaultProps = {
    products: [],
    buttonVisible: false,
    buttonText: "",
    type: "left",
    cart: false
  };

  changeState(value) {
    this.setState({ visible: value });
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

    const { visible } = this.state;

    return (
      <View style={style.container}>
        <ButtonGroup/>
        {
          visible &&
          <View>
            <FlatList
              data={products}
              horizontal={true}
              contentContainerStyle={style.list}
              keyExtractor={this._keyExtractor}
              renderItem={({ item }) => (<ProductItem
                type={"vertical"}
                item={item}
                cart={cart}
              />)}
            />
            {
              buttonVisible &&
              <Button
                text={buttonText}
                styleButton={[
                  styles.button,
                  { marginHorizontal: metrics.baseMargin }
                ]}
                styleText={style.textButtonShow}
                onPress={() => { }}
              />
            }
          </View>
        }
      </View>
    );
  }
}

export default (MostRecentItem);

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
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
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: colors.white,
  },
  textButtonShow: {
    ...fonts.style.t16,
    color: colors.white
  }
})