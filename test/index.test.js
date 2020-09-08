const acorn = require('acorn');
const doExpression = require('../src');

const Parser = acorn.Parser.extend(doExpression);

function test(text, additionalOptions = {}) {
  it(text, function() {
    const result = Parser.parse(
      text,
      Object.assign(
        { ecmaVersion: 9, plugins: { doExpression: true } },
        additionalOptions
      )
    );
    console.log(result);
    expect(result.body[0]).toMatchSnapshot();
  });
}

describe('acorn do expression', () => {
  test('let x = do { h() }');
  test(`let x = do {
  let tmp = f();
  tmp * tmp + 1
};`);
});
