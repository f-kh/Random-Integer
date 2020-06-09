# Random-Integer

> Simple library for generate random integer in Node.js

## Install 

`$ npm install --save f-kh/Random-Integer`

## Usage 

First require library and call its. There are three way to use: 

1. Without parameters. Returns an integer from 0 to 999.
2. With Maximum parameters. Returns an integer from 0 to Maximum.
3. With Maximum and minimum parameters. Returns an integer from minimum to Maximum.

First number is maximum integer and second number is minimum integer. Default of maxNumber is 999 and minNumber is 0. 

```javascript
var randomInteger = require('Random-Integer');

console.log(randomInteger());
//=> 201

console.log(randomInteger(9));
//=> 4

console.log(randomInteger(8, 2));
//=> 5
```

