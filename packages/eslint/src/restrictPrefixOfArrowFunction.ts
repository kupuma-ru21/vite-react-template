import type { Rule } from 'eslint';

export const restrictPrefixOfArrowFunction = (
  context: Rule.RuleContext
): Rule.RuleListener => {
  return {
    Identifier: (node) => {
      if (node.parent.type !== 'VariableDeclarator') return;
      if (node.parent.init?.type !== 'ArrowFunctionExpression') return;
      if (isValidArrowFunctionName(node.name)) return;
      context.report({ node, message: `is prefix of ${node.name} verb?` });
    },
  };
};

const isValidArrowFunctionName = (arrowFunctionName: string) => {
  return PREFIXES.some(
    (prefix: string) => arrowFunctionName.indexOf(prefix) === 0
  );
};

// NOTE: PREFIXES only include verb
const PREFIXES = ['restrict', 'is'];
