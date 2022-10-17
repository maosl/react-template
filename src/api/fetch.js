import {baseUrl} from './config';
import {getData} from '../storage';
import qs from 'qs';
import {timeout} from './config';
import {Alert} from 'react-native';
import rootStore from '../mobx/index';
class httpUtils {
  constructor() {}
  getRequest = async (url, params) => {
    const timeOut = new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = {error_message: '请求超时'};
        reject(data);
      }, timeout);
    });
    if (params) {
      url += '?' + params;
    }
    let token;
    try {
      token = await getData('userToken');
    } catch (error) {}
    let tokenType;
    try {
      tokenType = await getData('tokenType');
    } catch (error) {}
    let getFetch = new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: tokenType + ' ' + token,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.error_code === 'A0301') {
            Alert.alert('提示', 'Token已过期，请重新登录', [
              {
                text: '确认',
                onPress: () => {
                  const {loginStore} = rootStore;
                  loginStore.setAccessToken(null);
                },
              },
            ]);
            return;
          }
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
    return Promise.race([timeOut, getFetch]).then(result => {
      return result;
    });
  };

  postRequest = async (url, body, contentType) => {
    const timeOut = new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = {error_message: '请求超时'};
        reject(data);
      }, timeout);
    });
    let token;
    try {
      token = await getData('userToken');
    } catch (error) {}
    let tokenType;
    try {
      tokenType = await getData('tokenType');
    } catch (error) {}

    let _headers = new Headers({
      'Content-Type': contentType || 'application/json',
    });
    if (url !== '/user/login') {
      _headers.append('Authorization', tokenType + ' ' + token);
    }
    let postFetch = new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: 'POST',
        headers: _headers,
        body: contentType ? qs.stringify(body) : JSON.stringify(body),
      })
        .then(response => response.json())
        .then(result => {
          if (result.error_code === 'A0301') {
            Alert.alert('提示', 'Token已过期，请重新登录', [
              {
                text: '确认',
                onPress: () => {
                  const {loginStore} = rootStore;
                  console.log('loginStore:', loginStore);
                  loginStore.setAccessToken(null);
                },
              },
            ]);
            return;
          }
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
    return Promise.race([timeOut, postFetch]).then(result => {
      return result;
    });
  };

  putRequest = async (url, body) => {
    const timeOut = new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = {error_message: '请求超时'};
        reject(data);
      }, timeout);
    });
    let token;
    try {
      token = await getData('userToken');
    } catch (error) {}
    let tokenType;
    try {
      tokenType = await getData('tokenType');
    } catch (error) {}

    let putFetch = new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: tokenType + ' ' + token,
        }),
        body: JSON.stringify(body),
      })
        .then(response => response.json())
        .then(result => {
          if (result.error_code === 'A0301') {
            Alert.alert('提示', 'Token已过期，请重新登录', [
              {
                text: '确认',
                onPress: () => {
                  const {loginStore} = rootStore;
                  loginStore.setAccessToken(null);
                },
              },
            ]);
            return;
          }
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
    return Promise.race([timeOut, putFetch]).then(result => {
      return result;
    });
  };

  uploadFileRequest = async (url, formData) => {
    const timeOut = new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = {error_message: '请求超时'};
        reject(data);
      }, timeout);
    });
    let token;
    try {
      token = await getData('userToken');
    } catch (error) {}
    let tokenType;
    try {
      tokenType = await getData('tokenType');
    } catch (error) {}
    let uploadFetch = new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'multipart/form-data',
          Authorization: tokenType + ' ' + token,
        }),
        body: formData,
      })
        .then(response => response.json())
        .then(result => {
          if (result.error_code === 'A0301') {
            Alert.alert('提示', 'Token已过期，请重新登录', [
              {
                text: '确认',
                onPress: () => {
                  const {loginStore} = rootStore;
                  loginStore.setAccessToken(null);
                },
              },
            ]);
            return;
          }
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
    return Promise.race([timeOut, uploadFetch]).then(result => {
      return result;
    });
  };

  deleteRequest = async url => {
    const timeOut = new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = {error_message: '请求超时'};
        reject(data);
      }, timeout);
    });
    let token;
    try {
      token = await getData('userToken');
    } catch (error) {}
    let tokenType;
    try {
      tokenType = await getData('tokenType');
    } catch (error) {}

    let deleteFetch = new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: tokenType + ' ' + token,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.error_code === 'A0301') {
            Alert.alert('提示', 'Token已过期，请重新登录', [
              {
                text: '确认',
                onPress: () => {
                  const {loginStore} = rootStore;
                  loginStore.setAccessToken(null);
                },
              },
            ]);
            return;
          }
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
    return Promise.race([timeOut, deleteFetch]).then(result => {
      return result;
    });
  };
}
export default new httpUtils();
