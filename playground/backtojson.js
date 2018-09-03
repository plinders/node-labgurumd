const showdown = require('showdown');
const fs = require('fs');
const JFile = require('jfile');


showdown.setFlavor('github');
showdown.setOption('tables', true);

// const inputString = fs.readFileSync('input.md', 'UTF8');

const file = new JFile('input.md');
// console.log(file.lines);


file.lines.forEach((line, index) => {
    if (line.match(/(^## )/m)) {
        console.log(index, line);
    }
})



// console.log(lines);


//var converter = new showdown.Converter();

//var html = converter.makeHtml(inputString);

