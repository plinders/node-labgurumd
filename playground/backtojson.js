const showdown = require('showdown');
const fs = require('fs');
const cheerio = require('cheerio')


showdown.setFlavor('github');
showdown.setOption('tables', true);

const inputString = fs.readFileSync('input.md', 'UTF8');

var converter = new showdown.Converter();

var html = converter.makeHtml(inputString);

const $ = cheerio.load(html, {
    xmlMode: true, 
    decodeEntities: false
});

// console.log($('h2').nextAll().html());

$('h2').each(function(i, elem) {
    console.log(`====== ${$(this).text()}`);
});


//fs.writeFileSync('out.html', html);
