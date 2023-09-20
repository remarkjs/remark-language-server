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
In Node.js (version 14.14+, 16.0+, or 18.0+), install with [npm][]:

```sh
npm install remark-language-server
```

## Use

Usage of this package depends on your editor integration.
Because this is based on
[`vscode-languageserver-node`][vscode-languageserver-node], the same transports
are supported.

Practical examples are coming soon.

`remark-language-server` uses the same configuration files as
[`remark-cli`][remark-cli].
These files are:

*   `.remarkrc`
*   `.remarkrc.cjs`
*   `.remarkrc.js`
*   `.remarkrc.json`
*   `.remarkrc.mjs`
*   `.remarkrc.yaml`
*   `.remarkrc.yml`
*   `package.json`

Language clients should notify the language server if these files change.
They are looked up starting at the folder where the checked markdown file
exists.

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 14.14+, 16.0+, and 18.0+.
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

[support]: https://github.com/remarkjs/.github/blob/main/support.md

[coc]: https://github.com/remarkjs/.github/blob/main/code-of-conduct.md

[license]: https://github.com/remarkjs/remark-language-server/blob/main/license

[author]: https://github.com/remcohaszing

[npm]: https://docs.npmjs.com/cli/install

[language server]: https://microsoft.github.io/language-server-protocol/

[remark]: https://github.com/remarkjs/remark

[remark-cli]: https://github.com/remarkjs/remark/tree/main/packages/remark-cli

[vscode-languageserver-node]: https://github.com/microsoft/vscode-languageserver-node/tree/main/server
