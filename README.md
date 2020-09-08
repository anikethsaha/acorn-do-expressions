# acorn-do-expressions

Acorn plugin for parsing [do-expressions](https://github.com/tc39/proposal-do-expressions) proposal.

> Unstable, as this proposal is still in stage-1, it might get changed.

> Also this plugin is a part of my learning process of acorn and parsing js code. So it may not be a recommended way to do the parsing.

## Usage

This module provides a plugin that can be used to extend the Acorn `Parser` class to parse do expressions.

```javascript
const { Parser } = require('acorn');
const doExpressions = require('acorn-do-expressions');
Parser.extend(doExpressions).parse(
  `let x = do {
    h1()
  };`
);
```
