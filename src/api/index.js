import httpUtils from './fetch';

//登录 /user/login
const login = (url, data) => {
  return httpUtils.postRequest(url, data).then(res => {
    return res;
  });
};
//绑定手机号/user/bindPhone
const bindPhoneNumber = (url, data, contentType) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data, contentType)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
//查看当前⽤户信息/user/info
const getUserInfo = (url, params) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .getRequest(url, params)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
//绑定⼿机号码时发送⼿机验证码 /user/sendCode
const sendCode = (url, data, contentType) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data, contentType)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
//输⼊原密码更新账号密码  /user/updatePassword
const updatePassword = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
// 登出
const logout = (url, data, contentType) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data, contentType)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          console.log(3333, res);
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message || '您的设备未连接移动网络或无线局域网');
      });
  });
};

const updateUserinfo = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .putRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

const uploadFileToAliyun = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .uploadFileRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

// 获取dropDown data
const getDropDownListData = (url, params) => {
  return new Promise((reslove, reject) => {
    httpUtils
      .getRequest(url, params)
      .then(res => {
        if (res.error_code === '00000') {
          reslove(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
// 获取镜片列表
const getGlassList = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
// 根据id查询镜片详情
const queryGlassDetailById = (url, params) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .getRequest(url, params)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

// 获取产品托盘列表
const getTrayList = (url, data, contentType) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data, contentType)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
// 动态获取产品参数下拉数据
const getArgOptByDrop = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

// 通过sku计算产品价格
const getGlassPriceBySku = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

// 加入对比
const addCompareForId = (url, params) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .getRequest(url, params)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

// 取消对比
const cancelCompareForId = (url, params) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .getRequest(url, params)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
// 加入托盘
const addToTray = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
//删除单个
const deleteItemFromTrayById = url => {
  return new Promise((resolve, reject) => {
    httpUtils
      .deleteRequest(url)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

//清空相应类型的托盘（镜片、镜框）
const deleteAllFromTrayByCode = url => {
  return new Promise((resolve, reject) => {
    httpUtils
      .deleteRequest(url)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

//对比详情
const beginCompare = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
//镜框列表
const getFrameList = url => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
// 镜框详情
const queryFrameDetailById = url => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
// 获取镜框sku
const getFrameSku = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
//用镜小调查 - 保存用户调查数据
const saveUserSurvey = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
//保存验光数据
const saveOptometry = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

const getTableDataBySpuid = (url, data, contentType) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data, contentType)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
// 根据spuId查询模拟试戴图组
const getSimulationData = url => {
  return new Promise((resolve, reject) => {
    httpUtils
      .getRequest(url)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
//获取智能推荐产品
const getIntelligentRecommend = (url, data) => {
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
//查询模拟试戴焕色视界
const queryScopeBySkuId = url => {
  return new Promise((resolve, reject) => {
    httpUtils
      .getRequest(url)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

//获取产品推荐-产品家族
const getFamilies = () => {
  const url = '/recommend/families';
  return new Promise((resolve, reject) => {
    httpUtils
      .getRequest(url)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

//获取门店推荐产品信息（含已推荐产品）
const getRecommendList = data => {
  const url = '/recommend/spu';
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

//保存产品推荐
const saveRecommend = data => {
  const url = '/recommend/save';
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

//获取门店已推荐产品
const getHasRecommendList = () => {
  const url = '/recommend/list';
  return new Promise((resolve, reject) => {
    httpUtils
      .getRequest(url)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
//门店取消产品推荐
const cancelRecommend = data => {
  const url = '/recommend/cancel';
  return new Promise((resolve, reject) => {
    httpUtils
      .postRequest(url, data)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
//根据id查询产品参数页面的文本描述及加工表格数据
const getOtherTableDataBySpuid = url => {
  return new Promise((resolve, reject) => {
    httpUtils
      .getRequest(url)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};
const getSkuData = url => {
  return new Promise((resolve, reject) => {
    httpUtils
      .getRequest(url)
      .then(res => {
        if (res.error_code === '00000') {
          resolve(res);
        } else {
          reject(res.error_message);
        }
      })
      .catch(error => {
        reject(error.error_message);
      });
  });
};

module.exports = {
  login,
  bindPhoneNumber,
  getUserInfo,
  sendCode,
  updatePassword,
  logout,
  updateUserinfo,
  uploadFileToAliyun,
  getDropDownListData,
  getGlassList,
  queryGlassDetailById,
  getTrayList,
  addCompareForId,
  cancelCompareForId,
  getGlassPriceBySku,
  addToTray,
  deleteItemFromTrayById,
  deleteAllFromTrayByCode,
  beginCompare,
  getArgOptByDrop,
  getFrameList,
  queryFrameDetailById,
  getFrameSku,
  saveUserSurvey,
  saveOptometry,
  getTableDataBySpuid,
  getSimulationData,
  getIntelligentRecommend,
  getFamilies,
  getRecommendList,
  queryScopeBySkuId,
  saveRecommend,
  getHasRecommendList,
  cancelRecommend,
  getOtherTableDataBySpuid,
  getSkuData,
};
