import {Platform,AsyncStorage} from 'react-native'
import NetworkHelper from './NetworkHelper'
var Api = require("./Api")

class Services {
  static generateUrl(url,params){
    var arr = [];
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        arr.push(key + '=' + params[key]);
      }
    }
    return url+arr.join("&");
  }

  static getCategories() {
    return new Promise((resolve, reject) => {
      // if (!global.isConnected) {
      //   reject(Languages.MESSAGE_NO_INTERNET)
      //   return
      // }

      NetworkHelper.requestGet(Api.CATEGORIES_API)
        .then((responseData) => {
          if (responseData.hasOwnProperty("objects")) {
            resolve(responseData.objects)
          }else{
            reject("Json is invalid")
          }
        })
        .catch((error) => {
          reject("Can not connect to server.")
        });
    });
  }

}

export default Services
