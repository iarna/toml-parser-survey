'use strict'

const fs = require('fs')
const path = require('path')
const TOML = require('@iarna/toml')
const toml = require('toml')
const tomlrj04 = require('toml-j0.4')
const tomljs = require('tomljs')
const tomlParser = require('toml-parser')
const parsers = {
  'toml': { parse: d => toml.parse(d) },
  'toml-j0.4': { parse: d => tomlrj04.parse(d.toString()) },
//  'toml-js': { parse: d => toml$js.parse(d.toString()) }, // broken, uses eval
//  'topl': { parse: d => topl.parse(d) }, // only supports through 0.2.0
//  'toml-node' // wip, only implmenets a lexer
  'tomljs': { parse: d => tomljs(d) }, // broken
  'toml-parser': { parse: d => tomlParser(d.toString()) }, // broken
}
const filenames = ['example-v0.3.0.toml', 'example-v0.4.0.toml', 'example.toml', 'hard_example.toml', 'hard_example_unicode.toml']
const files = {}
filenames.forEach(n => {
  files[n] = { data: fs.readFileSync(path.join(__dirname, n)) }
  files[n].orig = TOML.parse(files[n].data)
})

exports.parsers = parsers
exports.files = files
