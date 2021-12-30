#!/usr/bin/env node
import process from 'node:process'
import {remark} from 'remark'
import {createUnifiedLanguageServer} from 'unified-language-server'

process.title = 'remark-language-server'

createUnifiedLanguageServer({
  ignoreName: '.remarkignore',
  packageField: 'remarkConfig',
  pluginPrefix: 'remark',
  processor: remark,
  rcName: '.remarkrc'
})
