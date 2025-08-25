import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // short sentence
        "これは短い文です。",
        // just under limit (default 80 characters)
        "これは長い文章ですが文字数制限以内に収まっているので問題ありません。約70文字程度の文章です。",
        // custom limit allowing longer sentences
        {
            text: "これは100文字を超える非常に長い日本語の文章です。通常の文字数制限では引っかかりますが、カスタム設定により許可されています。",
            options: {
                maxCharacters: 120
            }
        }
    ],
    invalid: [
        // single long sentence (default 80 character limit)
        {
            text: "これは非常に長い日本語の文章で、デフォルトの80文字制限を確実に超えてしまうため、textlintのルールで警告が出るはずですね、本当にそうなのでしょうか、とても気になります。",
            errors: [
                {
                    message: "日本語の一文が長すぎます。現在87文字、上限80文字。",
                    range: [0, 87]
                }
            ]
        },
        // multiple long sentences - simplified test  
        {
            text: "これは80文字の制限を確実に超えるように作られた非常に長いテスト用の日本語文章なのですが、確実に超えているはずですね、そうに違いありませんよね、本当にその通りです。これも80文字の制限を確実に超えるように作られた非常に長いテスト用の日本語文章なのですが、確実に超えているはずですね、そうに違いありませんよね、本当にその通りですね。",
            errors: [
                {
                    message: "日本語の一文が長すぎます。現在81文字、上限80文字。",
                    range: [0, 81]
                },
                {
                    message: "日本語の一文が長すぎます。現在82文字、上限80文字。",
                    range: [82, 164]
                }
            ]
        },
        // custom limit
        {
            text: "これは30文字制限の場合に確実に引っかかる非常に長い文章ですね。",
            options: {
                maxCharacters: 30
            },
            errors: [
                {
                    message: "日本語の一文が長すぎます。現在31文字、上限30文字。",
                    range: [0, 31]
                }
            ]
        }
    ]
});
