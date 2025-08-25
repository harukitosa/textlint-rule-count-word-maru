# textlint-rule-count-word-maru

日本語の一文（句点「。」まで）の文字数をカウントして、指定した上限を超えた場合に警告するtextlintプラグインです。

## Install

Install with [npm](https://www.npmjs.com/):

```bash
npm install textlint-rule-count-word-maru
```

## Usage

### Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "count-word-maru": true
    }
}
```

### カスタム設定

文字数の上限を変更したい場合：

```json
{
    "rules": {
        "count-word-maru": {
            "maxCharacters": 100
        }
    }
}
```

### Via CLI

```bash
textlint --rule count-word-maru README.md
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| maxCharacters | number | 80 | 一文の最大文字数 |

## Examples

### NG（エラーになる例）

```markdown
これは非常に長い日本語の文章で、デフォルトの80文字制限を確実に超えてしまうため、textlintのルールで警告が出るはずですね、本当にそうなのでしょうか、とても気になります。
```

**Error:** 日本語の一文が長すぎます。現在87文字、上限80文字。

### OK（正常な例）

```markdown
これは短い文です。これは長い文章ですが文字数制限以内に収まっているので問題ありません。
```

## Development

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

```bash
npm run build
```

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

```bash
npm test
```

## License

MIT © Haruki Tosa
