import type { TextlintRuleModule } from "@textlint/types";

export interface Options {
    // Maximum number of characters allowed in a Japanese sentence (before "。")
    maxCharacters?: number;
}

const report: TextlintRuleModule<Options> = (context, options = {}) => {
    const { Syntax, RuleError, report, getSource, locator } = context;
    const maxCharacters = options.maxCharacters ?? 80;
    return {
        [Syntax.Str](node) { // "Str" node
            const text = getSource(node); // Get text
            
            // Find sentences ending with 。
            const sentenceRegex = /[^。]*。/g;
            let match;
            
            while ((match = sentenceRegex.exec(text)) !== null) {
                const sentence = match[0];
                const sentenceWithoutPeriod = sentence.slice(0, -1).trim();
                
                if (sentenceWithoutPeriod.length > maxCharacters) {
                    const startIndex = match.index;
                    const endIndex = match.index + sentenceWithoutPeriod.length;
                    const matchRange = [startIndex, endIndex] as const;
                    const ruleError = new RuleError(
                        `日本語の一文が長すぎます。現在${sentenceWithoutPeriod.length}文字、上限${maxCharacters}文字。`, 
                        {
                            padding: locator.range(matchRange)
                        }
                    );
                    report(node, ruleError);
                }
            }
        }
    }
};

export default report;
