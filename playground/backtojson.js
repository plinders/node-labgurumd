const fs = require('fs');
const JFile = require('jfile');

const translate = require('../translate.js');
const parseMD = require('../parseMD.js');


const file = new JFile('../180821\ PL040\.1.md');


var obj = translate.makeExperimentObj(file);
fs.writeFileSync('exp.json', JSON.stringify(obj, undefined, 2));


