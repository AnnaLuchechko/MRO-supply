import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import Button from '../common/Button';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes';

import CatalogItem from './CatalogItem';

class CatalogProductList extends PureComponent {

  static propTypes = {
    datas: PropTypes.any,
    onPress: PropTypes.func.isRequired,
    type: PropTypes.string,
  };

  static defaultProps = {
    title: "",
    datas: [],
    type: 'section',
    onPress: () => {

    }
  };

  _keyExtractor = (item) => item.id;

  render() {
    const {datas, onPress, title, type, items} = this.props;
    return (
      <TouchableWithoutFeedback key={items.id}>
        <View>
          <View style={[
            styles.wrap,
            styles.spaceBetween,
            {marginHorizontal: metrics.baseMargin}
          ]}>
            <Text style={style.title}>
              {items.name}
            </Text>
            <Button
              text={"See All"}
              styleButton={style.button}
              styleText={style.textButtonSee}
              onPress={() => {
              }}
            />
          </View>
          {type == "section" && this.renderListWithSection(items.children)}

          {type == "normal" && (
            <FlatList
              scrollEnabled={false}
              data={datas}
              contentContainerStyle={style.list}
              numColumns={3}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => (<CatalogItem
                item={item}
                onPress={() => {
                }}
              />)}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderListWithSection(datas) {
    var items = []
    datas.forEach((item, index) => {
      items.push(
        <View key={index}>
          <Text style={style.header}>{item.name}</Text>
          <FlatList
            scrollEnabled={false}
            data={item.children}
            contentContainerStyle={style.sectionList}
            numColumns={3}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => (<CatalogItem item={item} onPress={() => {
            }}/>)}
          />
        </View>
      )
    })
    return items;
  }
}

export default (CatalogProductList);

const style = StyleSheet.create({
  button: {
    ...styles.border,
    width: 60,
    height: 30,
    backgroundColor: colors.white,
  },
  textButtonSee: {
    ...fonts.style.t10,
    color: colors.black
  },
  list: {
    paddingHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin
  },
  sectionList: {
    paddingHorizontal: metrics.baseMargin,
    marginTop: metrics.tinyMargin,
    marginBottom: metrics.baseMargin
  },
  header: {
    marginTop: metrics.smallMargin,
    marginLeft: metrics.baseMargin,
    ...fonts.style.t10,
    color: colors.bleu77
  }
})
