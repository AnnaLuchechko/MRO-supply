
class NetworkHelper {
  static requestPost(url,params,headers=null){
    return new Promise((resolve,reject)=>{
        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+headers
          },
          body: JSON.stringify(params)
          })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log("params: ",params);
          console.log("response: ",responseJson);
          console.log("****************End****************");
          if (responseJson.hasOwnProperty("error")) {
            reject(responseJson.error)
          }else{
            resolve(responseJson)
          }
        })
        .catch((error) => {
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log("params: ",params);
          console.log("Request error: ",error);
          console.log("****************End****************");
          reject(error)
        });
    });
  }

  static requestGet(url,headers=null){
    return new Promise((resolve,reject)=>{
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Bearer '+headers
        }
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log('header: ',headers);
          console.log("response: ",responseJson);
          console.log("****************End****************");
          if (responseJson.hasOwnProperty("error")) {
            reject(responseJson.error)
          }else{
            resolve(responseJson)
          }
        })
        .catch((error) => {
          console.log("****************Request****************");
          console.log("url: ",url);
          console.log('header: ',headers);
          console.log("Request error: ",error);
          console.log("****************End****************");
          reject(error)
        });
    });
  }
}

export default NetworkHelper
