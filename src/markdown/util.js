import commonmark from 'commonmark';

export const markdown = {
  toHTML: function(mdText) {
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer({safe: true, smart: true});
    const parsed = reader.parse(mdText);
    return writer.render(parsed);
  }
};
