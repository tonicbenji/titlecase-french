const  titleCaseFrench = require ("titlecase-french");
const clipboardy = require('clipboardy');

const inputText = "lire l'article";

const titlecasedInput = (() => {
    var input = "";
    var args = process.argv.slice(2);
    if (args.length > 2) {
        input = args.join("");
    } else {
        input = inputText;
    }
    return titleCaseFrench.convert(input);
})();

clipboardy.writeSync(titlecasedInput);
console.log(titlecasedInput);
