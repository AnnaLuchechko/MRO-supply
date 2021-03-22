import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import {
  TabNavigator,
} from 'react-navigation';

import {
  colors,
  metrics,
} from './themes';

import Logo from './components/common/Logo';
import Icon from './components/common/Icon';
import HeaderRight from "./components/common/HeaderRight";

/* Home */
import HomeScreen from './containers/HomeScreen';

/* Catalog */
import CatalogListScreen from './containers/CatalogListScreen';
import ShowcaseListScreen from './containers/ShowcaseListScreen';
import CatalogDetailScreen from './containers/CatalogDetailScreen';

/* Product */
import ProductDetailScreen from './containers/ProductDetailScreen';

/* Order */
import OrderScreen from './containers/OrderScreen';

/* Shipping */
import ShipInfoScreen from './containers/ShipInfoScreen';


const TabNavigatorAPP = TabNavigator({
  ProductScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'My Products',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./resources/icons/products.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  ChatScreen: {
    screen: ShowcaseListScreen,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./resources/icons/chat.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  AccountScreen: {
    screen: CatalogDetailScreen,
    navigationOptions: {
      tabBarLabel: 'My Account',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./resources/icons/account.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  InviteUserScreen: {
    screen: ProductDetailScreen,
    navigationOptions: {
      tabBarLabel: 'Invite User',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./resources/icons/invite.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  PictureScreen: {
    screen: OrderScreen,
    navigationOptions: {
      tabBarLabel: 'Picture It',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./resources/icons/picture.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
}, {
  swipeEnabled: false,
  lazyLoad: true,
  animationEnabled: false,
  navigationOptions: {
    headerTitle: (<Logo/>),
    headerRight: (<HeaderRight/>),
    headerLeft: (
      <Icon
        width={30}
        color={colors.primaryColor}
        image={require('./resources/icons/menu.png')}
        styleIcon={{marginHorizontal: metrics.baseMargin}}
      />
    ),
  },
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: colors.primaryColor,
    inactiveTintColor: colors.gray54,
    labelStyle: {
      fontSize: 10,
    },
    style: {
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: colors.gray,
      height: 60,
    },
    indicatorStyle: {
      backgroundColor: colors.primaryColor,
    },
  }
});

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default TabNavigatorAPP;
