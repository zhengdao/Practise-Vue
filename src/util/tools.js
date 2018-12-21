/* eslint-disable */

const _typeof = function (o) {
  let s = Object.prototype.toString.call(o)
  return s.substring(8, s.length - 1).toLowerCase()
}

/**
 * Return the type of the specified object
 *
 * typeOf("te") === "string"
 * typeOf(1234) === "number"
 * typeOf(true) === "boolean"
 * typeOf({})   === "object"
 * typeOf([])   === "array"
 * typeOf(null) === "null"
 * typeOf( )    === "undefined"
 * typeOf(window) === "global"
 * typeOf(function(){}) === "function"
 * typeOf(document) === "htmldocument"
 *
 */
export const typeOf = function (o) {
  return (o === null) ? 'null' :
    (o === undefined) ? 'undefined' :
      isHtmlElement(o) ?
        'html' + o.tagName.toLowerCase() + 'element' :
        _typeof(o)
}

/**
 * Test if the specified object is a Date.
 *
 * Specially in Firefox, Chrome and Safari, when we attempt to
 * parse an invalid date string as a Date object. An valid Date
 * object will be returned but it indicates an invalid Date.
 *
 * e.g.
 * new Date("13").toString() //"Invalid Date"
 *
 * e.g.
 * var d = new Date("January 1, 2012 16:00:00 AM")
 * typeof(d) == "date" //true
 * isNaN(d) //true
 */
export const isDate = function (o) {
  return typeOf(o) === 'date' && !isNaN(o)
}

/**
 * Test if the specified object is an Array
 */
export const isArray = function (o) {
  return typeOf(o) === 'array'
}

/**
 * Test if the specified object is a string
 */
export const isString = function (o) {
  return typeof o === 'string'
}

/**
 * Test if the specified object is a number
 */
export const isNumber = function (o) {
  return !isNaN(o) && (typeof o === 'number')
}

/**
 * Test if the specified object is an object
 */
export const isObject = function (o) {
  return typeOf(o) === 'object'
}

/**
 * Test if the specified object is a pure object other than a Class object.
 */
export const isPureObject = function (o) {
  return isObject(o) && (o.constructor === Object)
}

/**
 * Test if the specified object is a Boolean
 */
export const isBoolean = function (o) {
  return typeof o === 'boolean'
}

/**
 * Test if the specified object is null
 */
export const isNull = function (o) {
  return typeOf(o) === 'null'
}

/**
 * Test if the specified object is undefined
 */
export const isUndefined = function (o) {
  return typeOf(o) === 'undefined'
}

/**
 * Test if the specified object is a function
 */
export const isFunction = function (o) {
  return typeof o === 'function'
}

/**
 * Test if the specified object is a valid value, that means
 * it is not null or undefined
 */
export const isValid = function (o) {
  return (o != null) && (o != undefined)
}

/**
 * Test if the specified object is a html element
 */
export const isHtmlElement = function (o) {
  return o ? !!o.tagName : false
}

/**
 * Checks if the given string is the valid JSON string.
 *
 * @param str: String to check type of.
 */
export const isJSON = function (str) {
  if (!isString(str) || str.length == 0) {
    return false
  }

  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}

/**
 * Check whether the specified object is one of the given type.
 *
 * @param {Mixed} o {String / Object} The object to check.
 * @param {String} type The specified type to ref.
 *
 * @return {Boolean} true is the object is of the given type.
 */
export const is = function (o, type) {
  let b = false
  if (!isString(type) || type.length == 0) {
    return isValid(o)
  }

  type = type.toLowerCase()
  switch (type) {
    case 'number':
      b = isNumber(o)
      break
    case 'date':
      b = isDate(o)
      break
    default:
      b = (typeOf(o) === type)
      break
  }

  return b
}

export default {
  typeOf,
  isDate,
  isArray,
  isString,
  isNumber,
  isObject,
  isPureObject,
  isBoolean,
  isNull,
  isUndefined,
  isFunction,
  isValid,
  isHtmlElement,
  isJSON,
  is
}
