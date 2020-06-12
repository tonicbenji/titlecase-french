const clipboardy = require('clipboardy');

const table = "fr";

const input = clipboardy.readSync();

const output = input.split("\n").map(line => line.replace(/'(.*)' => '(.*)',/gi, `INSERT INTO ${table} VALUES ('$1', '$2');`)).join("\n");

console.log(output);
clipboardy.writeSync(output);
