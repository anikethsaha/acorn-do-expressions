const tt = require('acorn').tokTypes;

function handleDoExpression(acorn, Parser) {
  return class extends Parser {
    parseExprAtom(refDestructuringErrors) {
      if (this.type === tt._do) {
        let node = this.startNode();
        this.next();
        node.body = this.parseStatement('do');
        return node;
      }
      return super.parseExprAtom(refDestructuringErrors);
    }
  };
}

module.exports = function doExpression(Parser) {
  const acorn = Parser.acorn || require('acorn');

  return handleDoExpression(acorn, Parser);
};
