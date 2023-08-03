const {readFileSync, writeFileSync} = require('fs')
//Same as below
//const fs = require('fs)
//fs.readFileSync()
//fs.writeFileSync()

const path = require('path')

console.log('start');
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second} `, {flag: 'a'})


console.log('done with the task');
console.log('starting with the next one');