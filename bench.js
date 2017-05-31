'use strict'

const assert = require('assert')
const Benchmark = require('benchmark')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const files = require('./parsers-and-data.js').files
const parsers = require('./parsers-and-data.js').parsers

const WARN_RANGE = 5

const suite = new Benchmark.Suite({
  onCycle (event) {
    const bench = event.target
    console.log(`     ${bench.name}`)
    console.log('------------------------------------------------')
    if (bench.error) {
      console.log('Error:', bench.error.message || bench.error)
    } else {
      console.log(`  ${
        bench.hz.toFixed(bench.hz < 100 ? 2 : 0)
      } ops/s @ ~${
        (bench.stats.mean * 1000).toFixed(3)
      }ms/op`)
      console.log(`  Sampled ${
        bench.stats.sample.length
      } in ${
        bench.times.elapsed.toFixed(2)}s.`)
    }
    console.log('================================================')
  }
})

Object.keys(parsers).forEach(modname => {
  suite.add(modname, () => {
    Object.keys(files).forEach(function (filename) {
      var value = parsers[modname].parse(files[filename].data)
      assert(Object.keys(value).length <= Object.keys(files[filename].orig).length)
    })
  })
})


suite.run({async: true})
