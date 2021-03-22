import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';
import TouchableItem from "react-navigation/lib-rn/views/TouchableItem";

class AddOnProductInfo extends PureComponent {

  static propTypes = {
    name: PropTypes.string,
    info: PropTypes.string,
    info: PropTypes.string,
    price: PropTypes.string,
    currency: PropTypes.string,
    type: PropTypes.string
  };

  static defaultProps = {
    name: "",
    info: "",
    catalog: "",
    feature: "",
    description: "",
    price: "",
    currency: "",
    type: "horizontal",
    cart: false,
  };

  render() {

    const {
      name,
      info,
      catalog,
      feature,
      description,
      price,
      currency,
      type,
      cart,
      viewDetail
    } = this.props;

    return (
      <View style={[
        style.container,
        styles.spaceBetween,
        {
          paddingTop: type === "vertical" ? metrics.baseMargin : 0
        }
      ]}>
        <View>
          <View style={styles.row}>
            <Text style={style.name}>
              {name}&nbsp;
            </Text>
            {
              type === "horizontal" || cart === true ?
                <Text style={style.info}>
                  {info}
                </Text>
                :
                <Text style={style.catalog}>
                  {catalog}
                </Text>
            }
          </View>
          {
            (type === "horizontal" || cart === true) &&
            <Text style={style.feature}>
              {feature}
            </Text>
          }
          {
            cart === false &&
            <Text style={style.description}>
              {description}
            </Text>
          }
        </View>
        {
          type === "horizontal" || viewDetail &&
          <TouchableOpacity style={{alignSelf: 'flex-start'}}>
            <Text style={[style.detail, viewDetail && {marginVertical: 10}]}>
              View Details
            </Text>
          </TouchableOpacity>
        }
        {
          type === "horizontal" &&
          <View style={[
            styles.row,
            { alignItems: "center" }
          ]}>
            <Image
              resizeMode={'contain'}
              style={{
                width: 10,
                height: 10
              }}
              source={require("../../resources/icons/save.png")}
            />
            <Text style={style.compare}>
              Compare
            </Text>
            <Image
              resizeMode={'contain'}
              style={{
                width: 10,
                height: 10
              }}
              source={require("../../resources/icons/compare.png")}
            />
            <Text style={style.save}>
              Save
            </Text>
          </View>
        }
        <View style={[
          styles.row,
          { alignItems: "center" }
        ]}>
          <Text style={style.price}>
            $ {price}
          </Text>
          <Text style={style.currency}>
            / {currency}
          </Text>
        </View>
      </View>
    );
  }
}
export default (AddOnProductInfo);

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: metrics.baseMargin,
    backgroundColor: 'white',
  },
  name: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.black,
    flexWrap: "wrap",
  },
  info: {
    ...fonts.style.t11,
    color: colors.gray64,
    flexWrap: "wrap"
  },
  catalog: {
    ...fonts.style.t11,
    color: colors.gray64,
    marginLeft: metrics.smallMargin,
    flexWrap: "wrap"
  },
  feature: {
    ...fonts.style.t11,
    color: colors.gray64,
    flexWrap: "wrap"
  },
  description: {
    ...fonts.style.t9,
    color: colors.gray64,
    marginVertical: metrics.smallMargin,
  },
  detail: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.bleu77
  },
  compare: {
    ...fonts.style.t12,
    color: colors.gray86,
    marginHorizontal: metrics.smallMargin
  },
  save: {
    ...fonts.style.t12,
    color: colors.gray86,
    marginHorizontal: metrics.smallMargin
  },
  price: {
    ...fonts.style.t14,
    color: colors.secondaryColor
  },
  currency: {
    ...fonts.style.t14,
    color: colors.gray84
  }
})