import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

/* eslint-disable */
function loadLocaleMessages () {
  const locales = require.context('./lang', true, /[A-Za-z0-9-_,\s]+\.js[on]?$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  debugger
  return messages
}

/* eslint-disable */
const messages = {
  en_US: require('./lang/en_US'),
  zh_CN: require('./lang/zh_CN')
}

export default new VueI18n({
  locale: process.env.locale || 'zh_CN',
  fallbackLocale: process.env.locale || 'zh_CN',
  // messages: loadLocaleMessages()
  messages
})
