import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import CatalogProductList from '../components/catalog/CatalogProductList';
import PopularCatalogItem from '../components/catalog/PopularCatalogItem';
import Separator from '../components/common/Separator';
import Logo from '../components/common/Logo';
import Icon from '../components/common/Icon';
import HeaderRight from "../components/common/HeaderRight";
import { Products, Catalogs, CatalogsSpeedReducer, CatalogsAutomation, CatalogsBrushings } from '../dummyData/index';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';
import TouchableItem from "react-navigation/lib-rn/views/TouchableItem";

import BaseView from './BaseScreen'

import {connect} from 'react-redux';
import {ActionCreators} from '@actions';
import {bindActionCreators} from 'redux';
import * as ActionTypes from '@actions/ActionTypes'

class CatalogListScreen extends BaseView {

  renderContent() {
    return (
      <TouchableWithoutFeedback style={style.container}>
        <View style={style.container}>
          {
            this.props.categories.map((item)=>(
              <View>
                <CatalogProductList items={item}/>
                <Separator marginVertical={15}/>
              </View>
            ))
          }

          <PopularCatalogItem
            title={"Popular Items"}
            products={Products}
            buttonVisible={true}
            buttonText={"Show More Items"}
          />
          <View style={styles.center}>
            <Image
              resizeMode={'contain'}
              style={style.image}
              source={require("../resources/images/mony.png")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  componentDidMount(){
    this.props.getCategories()
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.type == ActionTypes.GET_CATEGORIES_SUCCESS) {

    }

    if (nextProps.type == ActionTypes.GET_CATEGORIES_FAILURE) {
      alert(nextProps.message)
    }
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: metrics.baseMargin,
  },
  list: {
    paddingHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin
  },
  image: {
    width: metrics.deviceWidth * 2 / 3,
    marginVertical: metrics.baseMargin
  }
});

CatalogListScreen.defaultProps = {
  categories:[]
}

function mapStateToProps(state) {
  return {
    isShowProgress: state.mroReducers.isRequesting,
    type: state.mroReducers.type,
    message: state.mroReducers.message,
    categories: state.mroReducers.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogListScreen);
