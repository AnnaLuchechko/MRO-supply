import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View
} from 'react-native';

import Count from "../common/Count";
import Button from '../common/Button';
import {
  colors,
  metrics,
  styles,
} from '../../themes';
import fonts from "../../themes/fonts";

class AddOnProductCart extends PureComponent {

  static propTypes = {
    type: PropTypes.string
  };

  static defaultProps = {
    type: "horizontal"
  };

  render() {

    const { type, label, marginCount } = this.props;

    return (
      <View style={[
        style.container,
        type === "horizontal" ? { alignItems: "center" } : { justifyContent: "center" },
        type === "horizontal" ? styles.row : null
      ]}
      >
        <View style={[
          style.containerCount,
          { marginHorizontal: marginCount},
          { marginRight: type === "horizontal" ? metrics.baseMargin : null }
        ]}>
          <Count />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            text={label ? label : "ADD TO CART"}
            styleButton={style.button}
            styleText={{ ...fonts.style.bold,color: colors.white }}
          />
        </View>
      </View>
    );
  }
}
export default (AddOnProductCart);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCount: {
    flex: 1,
    height: 40,
    marginVertical: metrics.smallMargin,
  },
  button: {
    backgroundColor: colors.primaryColor,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }
})