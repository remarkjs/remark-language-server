#!/usr/bin/env node
import process from 'node:process'
import {createUnifiedLanguageServer} from 'unified-language-server'

process.title = 'remark-language-server'

createUnifiedLanguageServer({
  ignoreName: '.remarkignore',
  packageField: 'remarkConfig',
  pluginPrefix: 'remark',
  processorName: 'remark',
  processorSpecifier: 'remark',
  rcName: '.remarkrc'
})
