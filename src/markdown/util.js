import { clone, isUndefined } from 'underscore';
import commonmark from 'commonmark';

export const markdown = {
  toHTML: function (mdText) {
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer({safe: true, smart: true});
    const parsed = reader.parse(mdText);
    return writer.render(parsed);
  }
};


/**
 * Helper class for rendering Markdown into HTML.
 *
 * This abstracts over the commonmark library to provide a simpler interface
 * for tweaking options in your md renderer.
 */
export class MarkdownRenderer {

  /**
   * Create the Markdown renderer.
   * @param {Object} options The options to pass into HtmlRenderer
   */
  constructor(options = {}) {
    this._options = clone(options);

    if (isUndefined(options.safe)) {
      this._options.safe = true;
    }
    if (isUndefined(options.smart)) {
      this._options.smart = true;
    }
  }

  /**
   * Render mdText into compatible HTML using the options set.
   * @param {string} mdText The markdown text to render.
   *
   * @returns {string} The HTML output string.
   */
  render(mdText) {
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer(this._options);
    const parsed = reader.parse(mdText);
    return writer.render(parsed);
  }

  /**
   * Return the given option value.
   * @param {string} key The key to return the value for.
   */
  getOption(key) {
    return this._options[key];
  }

  /**
   * Set option on HtmlRenderer by key/value.
   * @param {string} key The option to set.
   * @param {Any} value The value to set on the options.
   */
  setOption(key, value) {
    this._options[key] = value;
  }
}