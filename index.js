#!/usr/bin/env node
import process from 'process'
import {createUnifiedLanguageServer} from 'unified-language-server'

process.title = 'remark-language-server'

createUnifiedLanguageServer({
  ignoreName: '.remarkignore',
  packageField: 'remarkConfig',
  pluginPrefix: 'remark',
  plugins: ['remark-parse', 'remark-stringify'],
  rcName: '.remarkrc'
})
