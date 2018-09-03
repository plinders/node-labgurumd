const showdown = require('showdown');
const fs = require('fs');

showdown.setFlavor('github');
showdown.setOption('tables', true);

const inputString = fs.readFileSync('input.md', 'UTF8');

var converter = new showdown.Converter();

var html = converter.makeHtml(inputString);

console.log(html);
fs.writeFileSync('out.html', html);
