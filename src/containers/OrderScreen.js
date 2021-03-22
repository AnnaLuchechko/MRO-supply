import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView
} from 'react-native';


import AddOnItem from '../components/catalog/AddOnItem';
import Cart from '../components/order/Cart';
import OrderTotal from '../components/order/OrderTotal';
import Separator from '../components/common/Separator';

import {
  CartItems,
  Products,
  ProductCurrency,
  listPrice,
  listRef
} from '../dummyData/index';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';
import Button from "../components/common/Button";

export default class OrderScreen extends Component {

  _keyExtractor = (item) => item.id;

  render() {

    return (
      <View style={style.wrapContainer}>
        <ScrollView style={style.container}>
          <View style={style.orderHeader}>
            <Text style={style.title}>Cart</Text>
            <Text style={style.titleCount}>2 items</Text>
          </View>
          <Cart products={CartItems}/>
          <OrderTotal/>
          <Separator/>
          <AddOnItem
            title="Add-On Products"
            products={Products}
          />
          <View style={styles.center}>
            <Image
              resizeMode={'contain'}
              style={style.image}
              source={require("../resources/images/mony.png")}
            />
          </View>
        </ScrollView>
        <View style={style.wrapCheckoutButton}>
          <Button style={style.checkoutButton}
                  text={'PROCESS TO CHECKOUT'}
                  styleText={{ ...fonts.style.bold,color: colors.white }}/>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({

  wrapContainer: {
    flex: 1,
    backgroundColor: colors.background
  },

  container: {
    flex: 1,
    backgroundColor: colors.background
  },

  wrapCheckoutButton: {
    padding: metrics.baseMargin,
  },

  checkoutButton: {

  },

  orderHeader: {
    flexDirection: 'row',
    marginVertical: metrics.baseMargin,
    paddingHorizontal: metrics.baseMargin,
  },

  title: {
    ...fonts.style.t14,
    ...fonts.style.bold,
    color: colors.gray30,
  },

  titleCount: {
    ...fonts.style.t10,
    color: colors.gray70,
    marginLeft: 2,
  },

  image: {
    width: metrics.deviceWidth * 2 / 3,
    marginVertical: metrics.baseMargin
  },
  button: {
    backgroundColor: colors.transparent,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    paddingHorizontal: metrics.baseMargin,
  },
  buttonText: {
    ...fonts.style.t18,
    color: colors.black,
  }
});