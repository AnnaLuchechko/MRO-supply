import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Easing,
  Animated,
} from 'react-native';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes/index';
import Button from "./Button";
import FilterItem from "./FilterItem";


export default class FilterBox extends Component {


  constructor(props) {
    super(props);
    let {type, title, items, height} = this.props;
    this.state = {
      height: height ? height : 240,
      expanded: false,
      focusedAnim: new Animated.Value(0),
      useNativeDriver: false,
      type: type,
      title: title,
      items: items,
    }
  }

  toggle() {
    let {expanded, useNativeDriver} = this.state;
    this.setState({expanded: !expanded});
    Animated.timing(this.state.focusedAnim, {
      toValue: expanded ? 0 : 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver,
    }).start();
  }

  reset() {
    // this.state.items.map((item)=>{item.active = false});
    // this.setState({items:this.state.items});
  }

  render() {

    return (
      <View style={[style.container, this.props.style]}>
        <TouchableOpacity style={style.header} onPress={this.toggle.bind(this)}>
          <Text style={style.text}>
            FILTER BY {this.state.type}
          </Text>
          {
            this.state.expanded && <Button text="Reset All"
                                           onPress={this.reset.bind(this)}
                                           styleButton={style.resetButton}
                                           styleText={style.resetButtonText}/>
          }
          <View style={style.wrapImageButton}>
            <Image style={style.imageButton} source={require('../../resources/icons/ic_check_box_outline_blank.png')}/>
          </View>
        </TouchableOpacity>
        <Animated.View
          style={[
            {
              width: '100%',
              height: this.state.focusedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, this.state.height],
              }),
            },
          ]}
        >
          <View style={style.wrapFilterInfo} ref="childContent">
            <Text style={style.titleLabel}>{this.state.title}</Text>
            <FlatList style={{margin: 5, height: 160}}
                      data={this.state.items}
                      // contentContainerStyle={style.grid}
                      numColumns={2}
                      keyExtractor={(item, index) => item.id}
                      renderItem={(item) => <FilterItem data={item}/>}/>
            <Button text="Apply" styleButton={style.button} onPress={this.toggle.bind(this)}/>
          </View>
        </Animated.View>
      </View>
    );
  }

}

const style = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden'
  },

  grid: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  header: {
    width: '100%',
    height: 50,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    flex: 1,
  },

  text: {
    flex: 1,
    ...fonts.style.t10,
    paddingHorizontal: 0,
    paddingVertical: 5,
  },

  wrapImageButton: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageButton: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },

  button: {
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    height: 50,
  },

  wrapFilterInfo: {},

  titleLabel: {
    ...fonts.style.t10,
    color: colors.black,
  },

  resetButtonText: {
    ...fonts.style.t10,
    color: colors.primaryColor,
  },

  resetButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 4,
    height: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },

});