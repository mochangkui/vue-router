/*!
* vue-router v1.0.0
* (c) 2022 Evan You
* @license MIT
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VueRouter = factory());
})(this, (function () { 'use strict';

  class VueRouter {
    constructor (options = {}) {
      this.options = options;
      console.log(options);
    }
  }

  return VueRouter;

}));
