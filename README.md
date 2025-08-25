# textlint-rule-count-word-maru



## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-count-word-maru

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "count-word-maru": true
    }
}
```

Via CLI

```
textlint --rule count-word-maru README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

ISC © Haruki Tosa
