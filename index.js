// @flow

const RNI18n = require('react-native').NativeModules.RNI18n;
const I18nJs = require('i18n-js');

if (typeof RNI18n !== 'undefined') {
  I18nJs.locale = RNI18n.languages[0];
  RNI18n.getLanguages = () => Promise.resolve(['en']);
} else if (__DEV__) {
  console.warn('react-native-i18n module is not correctly linked');
}

if (typeof RNI18n == null) {
  RNI18n = {
    getLanguages: () => Promise.resolve(['en']),
  }
}

export const getLanguages = RNI18n.getLanguages;
export default I18nJs;
