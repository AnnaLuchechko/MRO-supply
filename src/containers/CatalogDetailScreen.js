import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  findNodeHandle
} from 'react-native';

import ProductItem from '../components/product/ProductItem';
import HeaderTitle from '../components/header/HeaderTitle';
import HeaderRight from "../components/common/HeaderRight";

import Icon from "../components/common/Icon";
import Paging from "../components/common/Paging";
import Switch from "../components/common/Switch";
import Button from "../components/common/Button";
import Logo from "../components/common/Logo";
import {Products} from '../dummyData/index';

import {
  colors,
  metrics,
  styles,
  fonts,
} from '../themes';
import FilterForm from "../components/catalog/FilterForm";

export default class CatalogDetailScreen extends Component {

  state = {
    layout: 'grid'
  }

  _keyExtractor = (item) => item.id;

  changeLayout = (layout) => {
    this.setState({layout});
  }

  toggleFilter() {
    this.refs.modal.toggle();
  }

  componentDidMount() {
    this.refs.modal.setViewRef(findNodeHandle(this.refs.rootView));
  }

  render() {

    const {layout} = this.state;

    return (
      <View style={{flex: 1}} ref="rootView">
        <ScrollView style={style.container}>
          <HeaderTitle
            title={"Catalog > AC Motors "}
            data={[
              {id: 1, title: "Catalog >"},
              {id: 2, title: "AC Motors"},
            ]}
          />
          <View style={[
            styles.row,
            styles.spaceBetween,
            style.subHeader,
          ]}>
            <Switch
              type={layout}
              onChange={this.changeLayout}
            />
            <Button
              onPress={this.toggleFilter.bind(this)}
              text={"Filter"}
              iconLeft={require("../resources/icons/filter.png")}
              tintIconLeft={colors.primaryColor}
              styleButton={style.filterButton}
              styleText={style.buttonText}
            />
          </View>
          <Text style={style.title}>AC Motors {layout} </Text>
          <FlatList
            contentContainerStyle={layout === 'grid' ? style.grid : null}
            data={Products}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => (<ProductItem
              item={item}
              type={layout}
            />)}
            extraData={layout}
          />
          <Paging maxSize={1250} pageSize={50}/>

          <Button text="Show More Items" styleButton={style.button}/>

          <View style={styles.center}>
            <Image
              resizeMode={'contain'}
              style={style.image}
              source={require("../resources/images/mony.png")}
            />
          </View>
        </ScrollView>
        <FilterForm ref="modal" style={style.modal}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  subHeader: {
    marginHorizontal: metrics.baseMargin,
  },
  title: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray30,
    marginVertical: metrics.smallMargin,
    marginHorizontal: metrics.baseMargin
  },
  grid: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: colors.transparent,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    marginHorizontal: metrics.baseMargin,
    height: 50,
  },

  filterButton: {
    backgroundColor: colors.transparent,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    paddingHorizontal: metrics.baseMargin,
  },

  buttonText: {
    ...fonts.style.t18,
    color: colors.black,
  },
  image: {
    width: metrics.deviceWidth * 2 / 3,
    marginVertical: metrics.baseMargin
  },
  modal: {
    position: 'absolute',
  }
});