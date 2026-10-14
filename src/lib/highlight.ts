/**
 * Minimal syntax colouring for the cURL, JavaScript, Python and JSON snippets on
 * the site. Returns [{ text, kind }] where kind is "key", "string", "number",
 * "keyword", "comment" or null.
 */
export type TokenKind = "key" | "string" | "number" | "keyword" | "comment" | null;

export interface Token {
  text: string;
  kind: TokenKind;
}

const TOKEN =
  /("(?:[^"\\\n]|\\.)*"|'[^'\n]*')|(\b\d+(?:\.\d+)?\b)|(\b(?:import|from|const|await|for|in|print|curl|true|false|null|None|True|False|string|integer|number|boolean|array|object)\b)|((?:#|\/\/).*$)/gm;

export function highlight(code: string): Token[] {
  const tokens: Token[] = [];
  let last = 0;
  for (const match of code.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) tokens.push({ text: code.slice(last, index), kind: null });
    const [text, string, number, keyword] = match;
    let kind: TokenKind = "comment";
    if (string) {
      // A quoted string followed by a colon is an object key.
      const isKey = /^\s*:/.test(code.slice(index + text.length));
      kind = isKey ? "key" : "string";
    } else if (number) kind = "number";
    else if (keyword) kind = "keyword";
    tokens.push({ text, kind });
    last = index + text.length;
  }
  if (last < code.length) tokens.push({ text: code.slice(last), kind: null });
  return tokens;
}
