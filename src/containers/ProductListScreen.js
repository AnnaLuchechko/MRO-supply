import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import ProductItem from '../components/product/ProductItem';
import Icon from "../components/common/Icon";
import Logo from "../components/common/Logo";
import { Products } from '../dummyData/index';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';

export default class ProductListScreen extends Component {

  _keyExtractor = (item) => item.id;

  static navigationOptions = props => {
    const { navigation } = props;
    const { state, setParams } = navigation;
    const { params } = state;
    return {
      headerTitle: (<Logo />),
      headerRight: (
        <View style={[styles.row]}>
          <Icon
            width={25}
            color={colors.gray}
            image={require('../resources/icons/search.png')}
          />
          <Icon
            width={25}
            color={colors.primaryColor}
            image={require('../resources/icons/store.png')}
            styleIcon={{ marginHorizontal: metrics.baseMargin }}
          />
        </View>
      ),
      headerLeft: (
        <Icon
          width={25}
          color={colors.primaryColor}
          image={require('../resources/icons/menu.png')}
          styleIcon={{ marginHorizontal: metrics.baseMargin }}
        />
      ),
    };
  };

  render() {
    return (
      <View style={style.container}> 
        <FlatList
          data={Products}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (<ProductItem item={item} />)}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
});