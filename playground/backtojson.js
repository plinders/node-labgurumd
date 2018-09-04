const fs = require('fs');
const JFile = require('jfile');

const translate = require('../translate.js');
const parseMD = require('../parseMD.js');


const file = new JFile('input.md');


var obj = translate.makeExperimentObj(file);
console.log(JSON.stringify(obj, undefined, 2));
