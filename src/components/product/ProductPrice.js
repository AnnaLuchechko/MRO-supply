import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity
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

class ProductPrice extends PureComponent {

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

  _keyExtractor = (item) => item.id;

  render() {

    const {currency, listPrice, listRef} = this.props;
    const {selectedQantity, selectedRef} = this.state;
    //console.log('selectedQantityselectedQantity', selectedQantity);

    return (
      <View style={[
        styles.radius,
        style.mainContainer
      ]}>
        <View style={style.container}>
          <View style={{flex: 1}}>
            <FlatList
              contentContainerStyle={style.list}
              data={listRef}
              keyExtractor={this._keyExtractor}
              horizontal={true}
              renderItem={({item}) => (<ProductRef
                item={item}
                selected={selectedRef === item}
                onPress={() => this.setState({selectedRef: item})}
              />)}
              extraData={selectedRef}
            />
          </View>
          <Text style={style.ref}>Baldor GCF2X02BB FX2-02-B7-140TC</Text>
          <ProductPromoPrice listPrice={listPrice}/>

          <Separator/>
          <View style={style.productImages}>


            <TouchableOpacity style={style.productPrevImage}>
              <Icon
                width={20}
                image={require("../../resources/icons/arrowLeft.png")}
              />
            </TouchableOpacity>

            <Image style={style.productImage} source={require("../../resources/products/3.jpg")}/>

            <TouchableOpacity style={style.productNextImage}>
              <Icon
                width={20}
                image={require("../../resources/icons/arrowRight.png")}
              />
            </TouchableOpacity>

            <View style={style.starIcon}>
              <Icon

                color={colors.gray68}
                width={20}
                image={require("../../resources/icons/ic_stars_white_36pt.png")}
              />
            </View>
          </View>
          <Separator/>
          <View style={[styles.row, {alignItems: "center"}]}>
            <Icon
              width={30}
              image={require("../../resources/icons/shipping.png")}
            />
            <Text style={style.firstText}>
              Free Shipping Orders Over $20
            </Text>
          </View>
          <View style={[styles.row, {alignItems: "center"}]}>
            <Icon
              width={30}
              image={require("../../resources/icons/stock.png")}
            />
            <Text style={style.firstText}>
              In Stock: Ready to Ship-
            </Text>
            <Text style={style.secondText}>
              See Availability
            </Text>
          </View>
          <View style={[styles.row, {alignItems: "center", marginTop: -metrics.baseMargin}]}>
            <Icon
              width={30}
              image={require("../../resources/icons/payment.png")}
            />
            <Text style={style.firstText}>
              Payment:
            </Text>
            <Image
              resizeMode={'contain'}
              style={style.image}
              source={require("../../resources/images/monyColor.png")}
            />
          </View>
          <Separator/>
          <Text style={style.quantity}>
            Select Quantity
          </Text>
          <View style={{flex: 1}}>
            <FlatList
              contentContainerStyle={style.list}
              data={currency}
              keyExtractor={this._keyExtractor}
              horizontal={true}
              renderItem={({item}) => (<ProductQuantity
                item={item}
                selected={selectedQantity === item}
                onPress={() => this.setState({selectedQantity: item})}
              />)}
              extraData={selectedQantity}
            />
          </View>
        </View>
        <Button
          text={"ADD TO CART"}
          styleButton={style.button}
          styleText={style.buttonText}
        />
      </View>
    );
  }
}

export default (ProductPrice);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: metrics.baseMargin,
    backgroundColor: colors.white
  },
  container: {
    flex: 1,
    padding: metrics.baseMargin,
  },
  button: {
    backgroundColor: colors.primaryColor,
    borderColor: colors.primaryColor,
    borderRadius: 0,
    borderBottomLeftRadius: metrics.radius,
    borderBottomRightRadius: metrics.radius,
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
    ...fonts.style.bold,
    color: colors.gray30,
  },
  image: {
    width: metrics.deviceWidth * 3 / 5,
    marginVertical: metrics.baseMargin
  },

  starIcon: {
    position: 'absolute',
    top: 10,
    right: 0,
    width: 20,
    height: 20,
  },

  productImages: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },

  productNextImage: {
    width: 20,
    height: 20,
  },

  productImage: {
    flex: 1,
    resizeMode: 'contain',
  },

  productPrevImage: {
    width: 20,
  },

})