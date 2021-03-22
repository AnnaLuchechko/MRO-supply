import React, {PureComponent} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';

import CatalogView from './CatalogListScreen';
import ShowcaseView from './ShowcaseListScreen';
import Logo from '../components/common/Logo';
import Icon from '../components/common/Icon';
import HeaderRight from "../components/common/HeaderRight";
import TabBar from "../components/common/TabBar";

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';


class CatalogsTab extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Catalogs',
    tabBarIcon: null,
  };

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{marginRight:metrics.deviceWidth/2, height:2, backgroundColor:colors.primaryColor}}/>
        <CatalogView/>
      </View>
    );
  }
}

class ShowCaseTab extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Showcase',
    tabBarIcon: null,
  };

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{marginLeft:metrics.deviceWidth/2, height:2, backgroundColor:colors.primaryColor}}/>
        <ShowcaseView/>
      </View>
    );
  }
}

const HomeTab = TabNavigator({
  Catalog: {
    screen: CatalogsTab,
  },
  Showcase: {
    screen: ShowCaseTab,
  },
}, {
  swipeEnabled: false,
  lazyLoad: false,
  animationEnabled: false,
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: colors.primaryColor,
    inactiveTintColor: colors.gray54,
    labelStyle: {
      fontSize: 12,
      paddingBottom: Platform.OS === 'ios' ? 15 : 0,
    },
    style: {
      backgroundColor: 'white',
      height: 50,
      paddingTop: Platform.OS === 'ios' ? 0 : 2,
    },
    indicatorStyle: {
      backgroundColor: colors.primaryColor,
      height: 2,
    },
  },
});


class Home extends PureComponent {
  static navigationOptions = {
    headerTitle: (<Logo/>),
    headerRight: (<HeaderRight/>),
    headerLeft: (
      <Icon
        width={30}
        color={colors.primaryColor}
        image={require('../resources/icons/menu.png')}
        styleIcon={{marginHorizontal: metrics.baseMargin}}
      />
    ),
  };

  render() {
      return (
        <ScrollView scrollEnabled={!this.props.isShowProgress} contentContainerStyle={[this.props.isShowProgress && {flex:1}]}>
          <HomeTab/>
        </ScrollView>
      );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    height: 2,
    backgroundColor: colors.primaryColor,
  },
  tab: {
    backgroundColor: colors.transparent,
  },
  tabbar: {
    backgroundColor: colors.transparent,
    height: 50,
  },
  label: {
    ...fonts.style.t12,
    color: colors.gray30,
  },
  selectedLabel: {
    ...fonts.style.t12,
    color: colors.primaryColor,
  },
  selectedContainerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryColor,
  },
});

function mapStateToProps(state) {
  return {
    isShowProgress: state.mroReducers.isRequesting,
    type: state.mroReducers.type,
    message: state.mroReducers.message,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
