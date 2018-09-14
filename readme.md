# node-labguruMD

Collection of functions for bidirectional transfer of [Labguru experiment objects](https://github.com/plinders/node-labguruconnect) to Markdown files.

## Getting Started


### Prerequisites

You will need to use `node-labguruconnect` to generate Labguru experiment objects.

### Installing


```
git clone git@github.com:plinders/node-labguruconnect.git
npm i
```

### Running

**Usage:**

```
$ node app.js -m <input>.md, --markdown <input>.md
```

Or

```
$ node app.js -j <input>.json, --json <input>.json
```

For help:

```
$ node app.js -h, --help
```

## Authors

* **Peter Linders** - *Initial work* - [plinders](https://github.com/plinders)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Todo

* Include images inline
* Work out how to include samples (e.g. plasmids, primers)