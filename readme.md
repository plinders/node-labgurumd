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
node app.js -m, --markdown <input>.md
```

Or

```
node app.js -j, --json <input>.json
```

For help:

```
node app.js -h, --help
```

## Authors

* **Peter Linders** - *Initial work* - [plinders](https://github.com/plinders)

## Todo

* Include images inline
* Work out how to include samples (e.g. plasmids, primers)