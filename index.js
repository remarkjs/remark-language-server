#!/usr/bin/env node
import process from 'node:process'
import {remark} from 'remark'
import {createUnifiedLanguageServer} from 'unified-language-server'

process.title = 'remark-language-server'

createUnifiedLanguageServer({
  configurationSection: 'remark',
  defaultProcessor: remark,
  ignoreName: '.remarkignore',
  packageField: 'remarkConfig',
  pluginPrefix: 'remark',
  processorName: 'remark',
  processorSpecifier: 'remark',
  rcName: '.remarkrc'
})
