const  titleCaseFrench = require ("titlecase-french");
const clipboardy = require('clipboardy');

const titlecasedInput = titleCaseFrench.convert(clipboardy.readSync());

clipboardy.writeSync(titlecasedInput);
console.log(titlecasedInput);
