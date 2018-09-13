const fs = require('fs');
const JFile = require('jfile');
const path = require('path');
const TurndownService = require('turndown');

const makeObj = require('./make_obj.js');

// Import plugins from turndown-plugin-gfm
var turndownPluginGfm = require('turndown-plugin-gfm')
var gfm = turndownPluginGfm.gfm
var tables = turndownPluginGfm.tables
var strikethrough = turndownPluginGfm.strikethrough
var turndownService = new TurndownService({
    'headingStyle': 'atx'
});
turndownService.keep(['sup', 'sub']);
// Use the gfm plugin
turndownService.use(gfm)

// Use the table and strikethrough plugins only
turndownService.use([tables, strikethrough])

const toJSON = (file) => {
    const filename = path.parse(file).name;
    const openFile = new JFile(file);
    var obj = makeObj.makeExperimentObj(openFile);
    fs.writeFileSync(`${filename}.json`, JSON.stringify(obj, undefined, 2))
};

const toMD = (file) => {
    var jsonFile = fs.readFileSync(file, 'UTF8');
    const filename = path.parse(file).name;
    var data = JSON.parse(jsonFile);
    var title = `<h1>${data.title}</h1>`;
    var doc = title;

    for (section of data.procedures) {
        var sectionText = '';
        var sectionTitle = `<h2>${section.sectionName}</h2>`;
        for (element of section.elements) {
            var elementText = '';
            var elementBody = element.data;
            elementText += elementBody;
            sectionText += elementText;
        };
        doc += sectionTitle + sectionText;
    };

    var markdown = turndownService.turndown(doc);

    fs.writeFileSync(`${filename}.md`, markdown);
};

module.exports = {
    toJSON,
    toMD
};