'use strict';

var Fetch                   = require("node-fetch");
var Bs_node_fetch           = require("../src/bs_node_fetch.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function unwrapUnsafely(param) {
  if (param) {
    return param[0];
  } else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "unwrapUnsafely called on None"
        ];
  }
}

var Option = /* module */[/* unwrapUnsafely */unwrapUnsafely];

Fetch("https://dog.ceo/api/breeds/list/all").then((function (prim) {
          return prim.text();
        })).then((function (text) {
        return Promise.resolve((console.log(text), /* () */0));
      }));

Fetch("https://dog.ceo/api/breeds/list/all", Bs_node_fetch.RequestInit[/* make */0](/* Some */[/* Post */2], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* () */0)).then((function (prim) {
          return prim.text();
        })).then((function (text) {
        return Promise.resolve((console.log(text), /* () */0));
      }));

exports.Option = Option;
/*  Not a pure module */
