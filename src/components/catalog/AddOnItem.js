import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import Button from '../common/Button';
import Icon from '../common/Icon';
import AddOnProductItem from '../product/AddOnProductItem';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

class AddOnItem extends PureComponent {

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
        <View style={[
          styles.row,
          styles.spaceBetween,
          { marginHorizontal: metrics.baseMargin }
        ]}>

          <View style={[
            styles.row,
            style.containerTitle
          ]}>
            <Text style={style.title}>
              {title}
            </Text>
            <TouchableOpacity style={style.wrapExpandIcon}>
              <Image style={style.expandIcon} source={require('../../resources/icons/ic_help_white.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        {
          visible &&
          <View>
            <FlatList
              data={products}
              horizontal={true}
              contentContainerStyle={style.list}
              keyExtractor={this._keyExtractor}
              renderItem={({ item }) => (<AddOnProductItem
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

export default (AddOnItem);

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: metrics.baseMargin,
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    marginTop: metrics.smallMargin
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
  },
  wrapExpandIcon: {
    position: 'absolute',
    right: 0,
  },
  expandIcon: {
    width: 15,
    height: 15,
    tintColor: colors.primaryColor,
    resizeMode: 'contain',
  },
})