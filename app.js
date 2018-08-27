const fs = require('fs');
const TurndownService = require('turndown');

// Import plugins from turndown-plugin-gfm
var turndownPluginGfm = require('turndown-plugin-gfm')
var gfm = turndownPluginGfm.gfm
var tables = turndownPluginGfm.tables
var strikethrough = turndownPluginGfm.strikethrough
var turndownService = new TurndownService();
turndownService.keep(['sup', 'sub']);
// Use the gfm plugin
turndownService.use(gfm)

// Use the table and strikethrough plugins only
turndownService.use([tables, strikethrough])

var jsonFile = fs.readFileSync('obj.json', 'UTF8');

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

fs.writeFileSync('obj.md', markdown);



