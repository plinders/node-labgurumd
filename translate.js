const showdown = require('showdown');

const parseMD = require('./parseMD.js');

showdown.setFlavor('github');
showdown.setOption('tables', true);

const converter = new showdown.Converter();

const makeElementObj = (section) => {
    var sectionName = converter.makeHtml(section[0]);
    if (section[0].match(/(^## Results)/)) {
        var sectionType = "results";
    } else if (section[0].match(/(^## Conclusion)/)) {
        var sectionType = "conclusion";
    } else {
        var sectionType = "description";
    }
    var elements = [];

    // first element
    var sectionLines = section.slice(1, -1);
    var sectionText = sectionLines.join('\n');

    var firstObj = {
        "position": 1,
        "type": "text",
        "containerType": "ExperimentProcedure",
        "fieldName": "procedure",
        "data": converter.makeHtml(sectionText)
    };

    elements.push(firstObj);

    // this is not working, need fix
    var elementList = section[-1];
    if (Array.isArray(elementList)) {
        for (i = 0; i < elementList.length; i++) {
            var position = (i + 2) // as the 1st position is always taken
            var joinedData = elementList[i].join('\n');
            var data = converter.makeHtml(joinedData);
    
            var element = {
                position,
                "type": "text",
                "containerType": "ExperimentProcedure",
                "fieldName": "procedure",
                data
            };
            elements.push(element);
        };
    }; 

    var sectionObj = {
        sectionName,
        sectionType,
        elements
    }

    return sectionObj;
};


const makeExperimentObj = (file) => {
    var sections = parseMD.splitH2Headings(file);
    var title = parseMD.getTitle(file);

    var procedures = sections.map(section => makeElementObj(section));
    var experimentObj = {
        "title": converter.makeHtml(title),
        procedures 
    };

    return experimentObj;
};

module.exports = {
    makeExperimentObj
};