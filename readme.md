# remark-language-server

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

A language server to lint and format markdown files with **[remark][]**.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [language server][] which can lint and format markdown files
using remark.

## When should I use this?

You can use this package when you want to enhance your editor with linting and
formatting of markdown files.
Some editors can consume this package directly, others need a plugin in order to
consume this package.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install remark-language-server
```

## Use

Usage of this package depends on your editor integration.
Because this is based on
[`unified-languageserver-node`][unified-languageserver-node], the same features
are supported.

`remark-language-server` uses the same configuration files as
[`remark-cli`][remark-cli].

## Examples

### Atom

The [`linter-remark`][linter-remark] plugin for Atom uses remark language server.
It can be installed with:

```sh
apm install linter-remark
```

### Emacs

Use [`lsp-mode`][lsp-mode] to use the remark language server with Emacs.

### Neovim

Use [`nvim-lspconfig`][nvim-lspconfig] to use the remark language server with
Neovim.
It’s enabled by default.

### vim-lsp

The remark language server can be used with [`vim-lsp`][vim-lsp].
You can configure it to be started when a markdown file is opened.

```viml
if (executable('remark-language-server'))
  au User lsp_setup call lsp#register_server({
  \ 'name': 'remark',
  \ 'cmd': {server_info->['remark-language-server', '--stdio']},
  \ 'allowlist': ['markdown'],
  \ })
endif
```

It has also been registered with [`vim-lsp-settings`][vim-lsp-settings].
If you use this, you will be prompted to use the remark language server when a
markdown file is opened.

### Visual Studio Code

The [remark extension for Visual Studio Code][vscode-remark] uses remark
language server under the hood.

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
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

[downloads-badge]: https://img.shields.io/npm/dm/remark-language-server.svg

[downloads]: https://www.npmjs.com/package/remark-language-server

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/main/contributing.md

[linter-remark]: https://github.com/wooorm/linter-remark

[lsp-mode]: https://github.com/emacs-lsp/lsp-mode

[support]: https://github.com/remarkjs/.github/blob/main/support.md

[coc]: https://github.com/remarkjs/.github/blob/main/code-of-conduct.md

[license]: https://github.com/remarkjs/remark-language-server/blob/main/license

[author]: https://github.com/remcohaszing

[npm]: https://docs.npmjs.com/cli/install

[nvim-lspconfig]: https://github.com/neovim/nvim-lspconfig

[language server]: https://microsoft.github.io/language-server-protocol/

[remark]: https://github.com/remarkjs/remark

[remark-cli]: https://github.com/remarkjs/remark/tree/main/packages/remark-cli

[unified-languageserver-node]: https://github.com/unifiedjs/unified-language-server

[vim-lsp]: https://github.com/prabirshrestha/vim-lsp

[vim-lsp-settings]: https://github.com/mattn/vim-lsp-settings

[vscode-remark]: https://github.com/remarkjs/vscode-remark
