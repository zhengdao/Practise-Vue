/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
import jquery from 'jquery'

import tools from '@/util/tools'

const baseUrl = process.env.baseUrl

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = baseUrl

// POST传参序列化
axios.interceptors.request.use(
  (config) => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 返回状态判断
axios.interceptors.response.use(
  (res) => {
    if (res.status < 200 || res.status > 300
      || !tools.isPureObject(res.data)) {
      return Promise.reject(res)
    }

    return res
  },
  (error) => {
    // 404等问题可以在这里处理
    return Promise.reject(error)
  }
)

/* 通用异步数据请求提交接口：fetch */
export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

/* 同步数据请求提交接口：synfetch */
export function synfetch (url, params) {
  let rst = null
  jquery.ajax({
    url: baseUrl + url,
    type: 'POST',
    async: false,
    data: params,
    timeout: 5000,
    dataType: 'json',
    success: function (data) {
      rst = data
    },
    error: function (xhr, statusText) {
      // rst = Promise.reject({
      //   type: statusText,
      //   msg: xhr.responseText
      // })
    }
  })

  return rst
}

const api = function (method, url, params) {
  return new Promise((resolve, reject) => {
    axios.request({
      method: method ? method : 'GET',
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default {
  fetch,
  synfetch,

  get: function (url, params, resolve, reject) {
    return api('GET', url, params, resolve, reject)
  },
  post: function (url, params, resolve, reject) {
    return api('POST', url, params, resolve, reject)
  },
  put: function (url, params, resolve, reject) {
    return api('PUT', url, params, resolve, reject)
  },
  delete: function (url, params, resolve, reject) {
    return api('DELETE', url, params, resolve, reject)
  }
}
