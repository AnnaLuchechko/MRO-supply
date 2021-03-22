import React from 'react'
import {
  StyleSheet,
  View,
  ActivityIndicator
}from 'react-native'

class BaseView extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        {this.renderContent()}
        {this.props.isShowProgress && (
          <View style={styles.indicatorContainer}>
            <ActivityIndicator
              animating={true}
              size="large"
              color="blue"
            />
          </View>
        )}
      </View>
    )
  }

  renderContent(){

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    top:0,
    left:0,
    bottom:0,
    right:0,
    position: 'absolute',
    backgroundColor:'rgba(255,255,255,0.5)'
  }
});

export default BaseView
