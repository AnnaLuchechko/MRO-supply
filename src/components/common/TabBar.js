import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes/index';


export default class TabBar extends Component {

  state = {
    selectedIndex: 0,
    focusedAnim: new Animated.Value(0),
    showAnim: new Animated.Value(1),
    useNativeDriver: false,
  }

  select(index) {
    let {useNativeDriver} = this.state;
    Animated.timing(this.state.focusedAnim, {
      toValue: index,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver,
    }).start();
    Animated.timing(this.state.showAnim, {
      fromValue: 0,
      toValue: 1,
      duration: 50,
      easing: Easing.ease,
      useNativeDriver,
    }).start();
    let self = this;
    setTimeout(()=>{
        self.props.onTabChange(index);
      },
      120,
    );
  }

  render() {
    let {tabs} = this.props;
    return (
      <View style={[style.container, this.props.style]}>
        <View style={[style.tab]}>
          {tabs.map((item, index)=>(
            <TouchableOpacity  style={style.tabItem} key={index} onPress={this.select.bind(this, index)}>
              <Text style={style.tabLabel}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Animated.View
          style={[
            {
              width: (1/tabs.length) * metrics.deviceWidth,
              height: 2,
              backgroundColor: colors.primaryColor,
              marginLeft: this.state.focusedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, (1/tabs.length) * metrics.deviceWidth],
              }),
            },
          ]}
        />
        <Animated.View
          style={[
            {
              width: '100%',
              height: '100%',
              backgroundColor: colors.red,
              opacity: this.state.showAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ]}
        >
          {this.props.children}
        </Animated.View>
      </View>
    );
  }

}

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.gray97,
    borderRadius: 4,
  },

  tab: {
    height: 30,
    flexDirection: 'row',
    backgroundColor: colors.gray97,
    borderRadius: 4,
  },

  tabItem: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray84,
    flex: 1,
  },

  tabLabel: {
    ...fonts.style.t10,
    ...fonts.style.bold,
    color: colors.gray52,
  },

});