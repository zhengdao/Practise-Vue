import {Loading} from 'element-ui'

var unique

export default {
  show () {
    let opt = {
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    }
    if (!unique) {
      unique = Loading.service(opt)
    }
  },
  resolve (resolve) {
    return function (component) {
      if (unique) {
        unique.close()
        unique = null
      }
      resolve(component)
    }
  }
}
