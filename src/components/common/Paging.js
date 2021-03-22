import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes/index';


export default class Paging extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      maxSize: 0,
      pageSize: 0,
    }
  }


  render() {

    let pages = [];
    let {maxSize, pageSize} = this.props;
    let pageCount = maxSize / pageSize;
    let i = 0;
    if(pageCount<=7) {
      for(i = 0;i<pageCount;i++) {
        pages.push({label: i+1, index: i, active: false})
      }
      for(i;i<7;i++) {
        pages.push({label: '', index: -1, active: false})
      }
    } else {
      for(i = 0;i<3;i++) {
        pages.push({label: i+1, index: i, active: false})
      }
      pages.push({label: '...', index: '...', active: false})
      for(i=2;i>=0;i--) {
        pages.push({label: pageCount - i, index: pageCount - i, active: false})
      }
    }

    pages[0].active = true;

    return (
      <View style={[style.container, this.props.style]}>
        {
          pages.map((item)=>(
            <TouchableOpacity  style={style.button} onPress={this.onClick.bind(this, item)}>
              <Text style={[style.buttonLabel, item.active && style.buttonLabelActive]}>{item.label}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }

  onClick(item) {

  }

}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  button: {
    flex:1,
    marginHorizontal: 2,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },

  buttonLabel: {
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.gray86,
  },

  buttonLabelActive: {
    color: colors.gray52,
  },


});