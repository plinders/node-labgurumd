const splitH3Headings = (arr) => {
    var h3Headings = [];
    arr.forEach((line, index) => {
        if (line.match(/(^### )/)) {
            h3Headings.push(index);
        }
    });
    var elements = [];
    for (var i = 0; i < h3Headings.length; i++) {
        var element = arr.slice(h3Headings[i], h3Headings[i+1]);
        elements.push(element);
    }
    return {elements, h3Headings};
};

const splitH2Headings = (file) => {
    var h2Headings = [];
    file.lines.forEach((line, index) => {
        if (line.match(/(^## )/)) {
            h2Headings.push(index);
        }
    });

    var sections = [];
    for (var i = 0; i < h2Headings.length; i++) {
        var section = file.lines.slice(h2Headings[i], h2Headings[i+1]);
        var headingsObj = splitH3Headings(section);
        var elements = headingsObj.elements;
        var indices = headingsObj.h3Headings;

        if (elements.length > 0) {
            var endIndex = Math.min.apply(null, indices);
            section = section.slice(0, endIndex)
            section.push(elements);
        }
        sections.push(section);
    }
    return sections;
};

const getTitle = (file) => {
    var title = '';
    file.lines.forEach((line) => {
        if (line.match(/(^# )/m)) {
            title += line;
        }
    });
    return title;
};

module.exports = {
    splitH2Headings,
    splitH3Headings,
    getTitle
};