'use strict'
const path = require('path')
const test = require('tap').test
const files = require('./parsers-and-data.js').files
const parsers = require('./parsers-and-data.js').parsers

Object.keys(parsers).forEach(modname => {
  runtest(test, modname, parsers[modname].parse, files)
})

function runtest (test, modname, parse, files) {
  test(modname, function (t) {
    t.plan(Object.keys(files).length)
    Object.keys(files).forEach(function (filename) {
      var value = parse(files[filename].data)
      t.isDeeply(value, files[filename].orig, filename)
    })
    t.done()
  })
}
