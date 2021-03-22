import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  ScrollView,
  Platform
} from 'react-native';
import {
  colors,
  metrics,
  styles,
  fonts,
} from '../../themes/index';
import Icon from "../common/Icon";
import SortBox from "../common/SortBox";
import Separator from "../common/Separator";
import FilterBox from "../common/FilterBox";
import Button from "../common/Button";

import {BlurView} from 'react-native-blur';

import {
  CategotyFilterItem
} from '../../dummyData'


export default class FilterForm extends Component {

  state = {
    modalVisible: false,
    viewRef: null,
    time: 0,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  closeModal() {
    this.setState({modalVisible: false});
  }

  toggle() {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  setViewRef(viewRef) {
    // this.setState({viewRef:viewRef});
  }

  render() {
    return (
      <View style={style.container}>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisible}>
          {Platform.OS === 'ios'&&<BlurView blurType="light" blurAmount={5} style={{width: '100%', height: '100%', position: 'absolute'}}/>}
          {Platform.OS === 'android'&&<View style={{top: 0, left: 0, right: 0, bottom: 0, position: 'absolute', backgroundColor: '#00000044'}}/>}
          <ScrollView>
            <View>
              <View style={style.modalHeader}>
                <Text style={style.modalTitle}>Filters & Sorting</Text>
                <Icon
                  onPress={this.closeModal.bind(this)}
                  width={30}
                  image={require("../../resources/icons/ic_check_box_outline_blank.png")}
                  color={colors.primaryColor}
                />
              </View>
              <View style={style.modalBody}>
                <SortBox type="Popularity"/>
                <Separator marginHorizontal={-metrics.baseMargin}/>
                <FilterBox type="CATEGORY"
                           title="Speed Reducers"
                           items={CategotyFilterItem}
                />
                <Separator marginHorizontal={-metrics.baseMargin}/>
                <FilterBox type="FRAME SIZE"
                           title="Speed Reducers"
                           // items={CategotyFilterItem}
                />
                <Separator marginHorizontal={-metrics.baseMargin}/>
                <FilterBox type="HP"
                           title="Speed Reducers"
                           // items={CategotyFilterItem}
                />
                <Separator marginHorizontal={-metrics.baseMargin}/>
                <FilterBox type="RPM"
                           title="Speed Reducers"
                           // items={CategotyFilterItem}
                />
                <Separator marginHorizontal={-metrics.baseMargin}/>
                <FilterBox type="FRAME"
                           title="Speed Reducers"
                           // items={CategotyFilterItem}
                />
                <Separator marginHorizontal={-metrics.baseMargin}/>
                <Button text="Apply" styleButton={style.button} onPress={this.closeModal.bind(this)}/>
              </View>

            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  }

}

const style = StyleSheet.create({
  container: {},

  modalHeader: {
    padding: metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  modalTitle: {
    flex: 1,
    ...fonts.style.t12,
    ...fonts.style.bold,
    color: colors.black,
  },

  modalBody: {
    backgroundColor: colors.background,
    padding: metrics.baseMargin,
  },

  button: {
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    height: 50,
    marginTop: metrics.doubleBaseMargin,
    marginBottom: metrics.baseMargin,
  },

});
