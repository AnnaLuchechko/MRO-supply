import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Separator from '../common/Separator';
import Button from '../common/Button';
import Icon from '../common/Icon';
import ProductQuantity from './ProductQuantity';
import ProductPromoPrice from './ProductPromoPrice';
import ProductRef from './ProductRef';

import {
  metrics,
  styles,
  colors,
  fonts
} from '../../themes';
import CheckBox from "../common/CheckBox";

class SuggestedProduct extends PureComponent {

  static propTypes = {
    currency: PropTypes.array,
    listPrice: PropTypes.array,
    listRef: PropTypes.array
  };

  static defaultProps = {
    currency: [],
    listPrice: [],
    listRef: []
  };

  state = {
    selectedQantity: null,
    selectedRef: null
  };

  renderSuggestedItem = ()=> (
    <View>
      <Separator/>
      <View style={style.productRow}>
        <View style={style.productCheck}>
          <CheckBox/>
        </View>
        <View style={style.productPhoto}>
          <Icon
            width={50}
            image={require("../../resources/products/1.jpg")}
          />
        </View>
        <View style={style.productId}>
          <Text style={style.productIdText}>WEG 01018EEWD5RD</Text>
        </View>
        <View style={style.productPrice}>
          <Text style={style.productPriceText}>$586.58</Text>
        </View>
        <View style={style.productQuantity}>
          <View style={style.productInputQuantity}>
            <TextInput style={style.productInput} underlineColorAndroid='transparent' defaultValue='2'/>
          </View>
        </View>
      </View>
    </View>
  )


  render() {

    const {currency, listPrice, listRef} = this.props;
    const {selectedQantity, selectedRef} = this.state;
    //console.log('selectedQantityselectedQantity', selectedQantity);

    return (
      <View style={[
        styles.radiusThin,
        style.mainContainer
      ]}>
        <View style={style.container}>
          <Text style={style.ref}>Suggested Items</Text>
          <ProductPromoPrice listPrice={listPrice}/>

          <Separator/>
          <View style={style.productRow}>
            <View style={style.productCheck}>

            </View>
            <View style={style.productPhoto}>
              <Text style={style.productHeaderText}>Photo</Text>
            </View>
            <View style={style.productId}>
              <Text style={style.productHeaderText}>Item ID</Text>
            </View>
            <View style={style.productPrice}>
              <Text style={style.productHeaderText}>Price</Text>
            </View>
            <View style={style.productQuantity}>
              <Text style={style.productHeaderText}>Qty</Text>
            </View>
          </View>
          {this.renderSuggestedItem()}
          {this.renderSuggestedItem()}
          {this.renderSuggestedItem()}
          {this.renderSuggestedItem()}
          <Separator/>
        </View>
        <Button
          text={"Add Selected To Cart"}
          styleButton={style.button}
          styleText={style.buttonText}
        />
        <Text style={style.orText}>
          or
        </Text>
        <TouchableOpacity>
          <Text style={style.wishListText}>
            Add to Wishlist
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default (SuggestedProduct);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: metrics.baseMargin,
    backgroundColor: colors.white
  },
  container: {
    flex: 1,
    // padding: metrics.baseMargin,
  },
  button: {
    backgroundColor: colors.primaryColor,
    borderColor: colors.primaryColor,
    borderRadius: 0,
    borderBottomLeftRadius: metrics.radius,
    borderBottomRightRadius: metrics.radius,
    marginTop: 20,
    marginHorizontal: 20,
  },
  list: {
    flex: 1
  },
  buttonText: {
    color: colors.white
  },
  quantity: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray30,
    textAlign: "center",
    marginVertical: metrics.baseMargin
  },
  firstText: {
    ...fonts.style.t12,
    color: colors.gray35,
  },
  secondText: {
    ...fonts.style.t14,
    color: colors.gray35,
    color: colors.primaryColor,
  },
  ref: {
    ...fonts.style.t16,
    color: colors.gray30,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  image: {
    width: metrics.deviceWidth * 3 / 5,
    marginVertical: metrics.baseMargin
  },

  orText: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray30,
    textAlign: "center",
    marginTop: metrics.baseMargin
  },


  wishListText: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.primaryColor,
    textAlign: "center",
    marginVertical: metrics.baseMargin
  },

  productHeaderText: {
    ...fonts.style.t10,
    ...fonts.style.bold,
    color: colors.black,
    marginVertical: metrics.baseMargin
  },

  productRow: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  productCheck: {
    width: 40,
  },

  productPhoto: {
    width: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  productId: {
    flex: 1,
  },

  productIdText: {
    ...fonts.style.t10,
    ...fonts.style.bold,
    color: colors.primaryColor,
    marginVertical: metrics.baseMargin
  },

  productPrice: {

    width: 50,
  },

  productPriceText: {
    ...fonts.style.t10,
    ...fonts.style.bold,
    color: colors.red86,
    marginVertical: metrics.baseMargin
  },

  productQuantity: {
    width: 50,
  },

  productInputQuantity: {
    width: 50,
    height: 30,
    borderRadius: 3,
    borderColor: colors.gray92,
    borderWidth: 1,
    justifyContent: 'center',
  },

  productInput: {
    ...fonts.style.t10,
    ...fonts.style.bold,
    color: colors.black,
    textAlign: 'center',
    padding: 0,
    margin: 0,
  },


})