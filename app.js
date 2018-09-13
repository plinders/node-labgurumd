const yargs = require('yargs');

const translate = require('./translate.js');

const argv = yargs
    .options({
        j: {
            alias: 'json',
            describe: 'JSON file to translate to Markdown',
            string: true
        },
        m: {
            alias: 'markdown',
            describe: 'MD file to translate to JSON',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .demandCommand(1)
    .argv;

if (argv.json) {
    translate.toMD(argv.json);
};

if (argv.markdown) {
    translate.toJSON(argv.markdown)
};