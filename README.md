# gofmt.js
A gofmt tool compiled by GopherJS.

## Get started
Install by npm:
```shell
npm install @lemonneko/gofmt.js
```
If you use commonjs:
```javascript
const gofmt = require('@lemonneko/gofmt.js')

console.log(gofmt.format(`type Person struct { 
Name string \`json:"name"\`
Age int \`json:"age"\`
}`))
```
If you use esm:
```javascript
import gofmt from '@lemonneko/gofmt.js'

console.log(gofmt.format(`type Person struct { 
Name string \`json:"name"\`
Age int \`json:"age"\`
}`))
```
The result should be:
```javascript
[
  'type Person struct {\n' +
    '\tName string `json:"name"`\n' +
    '\tAge  int    `json:"age"`\n' +
    '}',
  ''
]
```
