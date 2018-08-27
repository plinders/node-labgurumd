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

var tableFile = fs.readFileSync('./table.txt', 'UTF8');

var markdown = turndownService.turndown(tableFile);

fs.writeFileSync('table.md', markdown);