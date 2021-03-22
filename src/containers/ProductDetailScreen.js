import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView
} from 'react-native';


import BlockItem from '../components/catalog/BlockItem';
import MostRecentItem from '../components/catalog/MostRecentItem';
import ProductPromoPrice from '../components/product/ProductPromoPrice';
import ProductItem from '../components/product/ProductItem';
import ProductFeature from '../components/product/ProductFeature';
import ProductPrice from '../components/product/ProductPrice';
import SuggestedProduct from "../components/product/SuggestedProduct";
import HeaderTitle from '../components/header/HeaderTitle';
import Separator from '../components/common/Separator';
import HeaderRight from "../components/common/HeaderRight";
import Icon from "../components/common/Icon";
import Button from "../components/common/Button";
import Logo from "../components/common/Logo";

import {
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

export default class ProductDetailScreen extends Component {

  _keyExtractor = (item) => item.id;

  render() {

    return (
      <ScrollView style={style.container}>
        <HeaderTitle
          preTitle={"Speed Reducers > Motor Multiplier > "}
          title={"GCD2X02BB"}
          data={[
            { id: 1, title: "Speed Reducers >" },
            { id: 2, title: "Motor Multiplier >" },
            { id: 3, title: "GCD2X02BB" },
          ]}
        />
        <Separator />
        <ProductPrice
          currency={ProductCurrency}
          listPrice={listPrice}
          listRef={listRef}
        />
        <Separator />
        <BlockItem
          title={"Alternatives"}
          products={Products}
          type={"center"}
        />
        <Separator />
        <ProductFeature />
        <Separator />
        <SuggestedProduct/>
        <Separator />
        <MostRecentItem
          products={Products}
          type={"center"}
        />
        <View style={styles.center}>
          <Image
            resizeMode={'contain'}
            style={style.image}
            source={require("../resources/images/mony.png")}
          />
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  title: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray30,
    marginVertical: metrics.smallMargin,
    marginHorizontal: metrics.baseMargin
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