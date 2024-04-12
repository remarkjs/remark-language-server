# remark-language-server

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

A language server to lint and format markdown files with **[remark][]**.

## Contents

* [What is this?](#what-is-this)
* [When should I use this?](#when-should-i-use-this)
* [Install](#install)
* [Use](#use)
  * [Configuration file](#configuration-file)
  * [Settings](#settings)
* [Examples](#examples)
  * [Emacs](#emacs)
  * [Neovim](#neovim)
  * [vim-lsp](#vim-lsp)
  * [Visual Studio Code](#visual-studio-code)
* [Compatibility](#compatibility)
* [Contribute](#contribute)
* [License](#license)

## What is this?

This package is a [language server][] which can lint and format markdown files
using remark.

## When should I use this?

You can use this package when you want to enhance your editor with linting and
formatting of markdown files.
Some editors can consume this package directly, others need a plugin in order to
consume this package.

## Install

This package is [ESM only][].
In Node.js (version 16.0+, or 18.0+), install with [npm][]:

```sh
npm install remark-language-server
```

## Use

Usage of this package depends on your editor integration.
Because this is based on
[`unified-languageserver-node`][unified-languageserver-node], the same features
are supported.

### Configuration file

`remark-language-server` uses the same configuration files as
[`remark-cli`][remark-cli].
These files are:

* `.remarkrc`
* `.remarkrc.cjs`
* `.remarkrc.js`
* `.remarkrc.json`
* `.remarkrc.mjs`
* `.remarkrc.yaml`
* `.remarkrc.yml`
* `package.json`

Language clients should notify the language server if these files change.
They are looked up starting at the folder where the checked markdown file
exists.

### Settings

This language server supports the following settings:

* `remark.requireConfig` (`boolean`, default: `false`) — If true, only perform
  actions if a [configuration file][configuration-file] is found.

## Examples

### Emacs

Use [`lsp-mode`][lsp-mode] to use the remark language server with Emacs.

### Neovim

The remark language server is part of [`nvim-lspconfig`][nvim-lspconfig], a
collection of common configurations for Neovim’s built-in language server
client.
This means you can add remark language server in one line:

```lua
require'lspconfig'.remark_ls.setup {
  settings = {
    requireConfig = true
  }
}
```

`nvim-lspconfig` has
[detailed installation instructions][nvim-lspconfig-instructions] such as
configuration options.

### vim-lsp

The remark language server can be used with [`vim-lsp`][vim-lsp].
You can configure it to be started when a markdown file is opened.

```viml
if (executable('remark-language-server'))
  au User lsp_setup call lsp#register_server({
  \ 'name': 'remark',
  \ 'cmd': {server_info->['remark-language-server', '--stdio']},
  \ 'allowlist': ['markdown'],
  \ 'config': lsp_settings#get('remark-language-server', 'config', lsp_settings#server_config('remark-language-server')),
  \ 'workspace_config': lsp_settings#get('remark-language-server', 'workspace_config', {
  \   'requireConfig': v:true,
  \ }),
  \ })
endif
```

Otherwise, if you use [`vim-lsp-settings`][vim-lsp-settings], you will be asked
to use the remark language server automatically when a markdown file is opened.

### Visual Studio Code

Use [`vscode-remark`][vscode-remark] to use the remark language server with
Visual Studio Code.

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 16.0+, and 18.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.
Join us in [Discussions][chat] to chat with the community and contributors.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Remco Haszing][author]

<!-- Definitions -->

[build-badge]: https://github.com/remarkjs/remark-language-server/workflows/main/badge.svg

[build]: https://github.com/remarkjs/remark-language-server/actions

[configuration-file]: #configuration-file

[downloads-badge]: https://img.shields.io/npm/dm/remark-language-server.svg

[downloads]: https://www.npmjs.com/package/remark-language-server

[esm only]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/main/contributing.md

[lsp-mode]: https://github.com/emacs-lsp/lsp-mode

[support]: https://github.com/remarkjs/.github/blob/main/support.md

[coc]: https://github.com/remarkjs/.github/blob/main/code-of-conduct.md

[license]: https://github.com/remarkjs/remark-language-server/blob/main/license

[author]: https://github.com/remcohaszing

[npm]: https://docs.npmjs.com/cli/install

[nvim-lspconfig]: https://github.com/neovim/nvim-lspconfig

[nvim-lspconfig-instructions]: https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#remark_ls

[language server]: https://microsoft.github.io/language-server-protocol/

[remark]: https://github.com/remarkjs/remark

[remark-cli]: https://github.com/remarkjs/remark/tree/main/packages/remark-cli

[unified-languageserver-node]: https://github.com/unifiedjs/unified-language-server

[vim-lsp]: https://github.com/prabirshrestha/vim-lsp

[vim-lsp-settings]: https://github.com/mattn/vim-lsp-settings

[vscode-remark]: https://github.com/remarkjs/vscode-remark
