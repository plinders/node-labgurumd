const showdown = require('showdown');
const fs = require('fs');
const JFile = require('jfile');

const parseMD = require('../parseMD.js')


showdown.setFlavor('github');
showdown.setOption('tables', true);

const file = new JFile('input.md');

// var sections = parseMD.splitH2Headings(file);
// console.log(sections);

var title = parseMD.getTitle(file);
console.log(title);


