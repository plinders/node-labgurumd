const fs = require('fs');
const JFile = require('jfile');
const path = require('path');

const makeObj = require('../make_obj.js');

const toJSON = (file) => {
    const filename = path.parse(filename).name;
    const openFile = new JFile(file);
    var obj = makeObj.makeExperimentObj(openFile);
    fs.writeFileSync(`${filename}.json`, JSON.stringify(obj, undefined, 2))
};

module.exports = {
    toJSON
};