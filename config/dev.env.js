'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  locale: '"zh_CN"',
  routerMode: '"hash"',
  baseUrl: '"/api"'
})
