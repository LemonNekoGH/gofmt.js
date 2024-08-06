import gofmt from './main.js';

const codeNotFormatted = `type Person struct { 
Name string \`json:"name"\`
Age int \`json:"age"\`
}`

const expectedFormatted = `type Person struct {
\tName string \`json:"name"\`
\tAge  int    \`json:"age"\`
}`

const [ actualFormatted, shouldNullError ] = gofmt.format(codeNotFormatted);

console.assert(actualFormatted === expectedFormatted, 'Expected code to be formatted');
console.assert(shouldNullError === "", 'Expected no error');

const codeNotValid = `type Person struct {`
const [ result, shouldNotNullError ] = gofmt.format(codeNotValid);

const expectedError = '1:31: expected \'}\', found \'EOF\''

console.assert(result === "", 'Expected null result');
console.assert(shouldNotNullError === expectedError, 'Expected error: ' + expectedError);
