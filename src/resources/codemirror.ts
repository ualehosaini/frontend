import { HighlightStyle, tags } from "@codemirror/highlight";
import { EditorView as CMEditorView } from "@codemirror/view";
import { StreamLanguage } from "@codemirror/stream-parser";
import { jinja2 } from "@codemirror/legacy-modes/mode/jinja2";
import { yaml } from "@codemirror/legacy-modes/mode/yaml";
import { indentLess, indentMore } from "@codemirror/commands";

export { keymap } from "@codemirror/view";
export { CMEditorView as EditorView };
export { EditorState, Prec, tagExtension } from "@codemirror/state";
export { defaultKeymap } from "@codemirror/commands";
export { lineNumbers } from "@codemirror/gutter";
export { searchKeymap, highlightSelectionMatches } from "@codemirror/search";
export { history, historyKeymap } from "@codemirror/history";

export const langs = {
  jinja2: StreamLanguage.define(jinja2),
  yaml: StreamLanguage.define(yaml),
};

export const tabKeyBindings = [
  { key: "Tab", run: indentMore },
  {
    key: "Shift-Tab",
    run: indentLess,
  },
];

export const theme = CMEditorView.theme({
  $: {
    color: "var(--primary-text-color)",
    backgroundColor:
      "var(--code-editor-background-color, var(--card-background-color))",
    "& ::selection": { backgroundColor: "rgba(var(--rgb-primary-color), 0.3)" },
    height: "var(--code-mirror-height, auto)",
  },

  $content: { caretColor: "var(--secondary-text-color)" },

  $$focused: { outline: "none" },

  "$$focused $cursor": { borderLeftColor: "#var(--secondary-text-color)" },
  "$$focused $selectionBackground, $selectionBackground": {
    backgroundColor: "rgba(var(--rgb-primary-color), 0.3)",
  },

  $panels: {
    backgroundColor: "var(--primary-background-color)",
    color: "var(--primary-text-color)",
  },
  "$panels.top": { borderBottom: "1px solid var(--divider-color)" },
  "$panels.bottom": { borderTop: "1px solid var(--divider-color)" },

  "$panel.search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: "4px",
      margin: 0,
      outline: "none",
      fontSize: "150%",
    },
  },

  $button: {
    border: "1px solid var(--primary-color)",
    padding: "8px",
    textTransform: "uppercase",
    margin: "4px",
    background: "none",
  },

  $textfield: {
    backgroundColor: "var(--secondary-background-color)",
    padding: "8px",
  },

  $selectionMatch: {
    backgroundColor: "rgba(var(--rgb-primary-color), 0.1)",
  },

  $searchMatch: {
    backgroundColor: "rgba(var(--rgb-accent-color), .2)",
    outline: "1px solid rgba(var(--rgb-accent-color), .4)",
  },
  "$searchMatch.selected": {
    backgroundColor: "rgba(var(--rgb-accent-color), .4)",
    outline: "1px solid var(--accent-color)",
  },

  $gutters: {
    backgroundColor:
      "var(--paper-dialog-background-color, var(--primary-background-color))",
    color: "var(--paper-dialog-color, var(--secondary-text-color))",
    border: "none",
    borderRight:
      "1px solid var(--paper-input-container-color, var(--secondary-text-color))",
    paddingRight: "1px",
  },
  "$$focused $gutters": {
    borderRight:
      "2px solid var(--paper-input-container-focus-color, var(--primary-color))",
    paddingRight: "0",
  },
  "$gutterElementags.lineNumber": { color: "inherit" },
});

export const highlightStyle = HighlightStyle.define(
  { tag: tags.keyword, color: "var(--codemirror-keyword, #6262FF)" },
  {
    tag: [
      tags.name,
      tags.deleted,
      tags.character,
      tags.propertyName,
      tags.macroName,
    ],
    color: "var(--codemirror-property, #905)",
  },
  {
    tag: [tags.function(tags.variableName), tags.labelName],
    color: "var(--codemirror-variable, #07a)",
  },
  {
    tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)],
    color: "var(--codemirror-qualifier, #690)",
  },
  {
    tag: [tags.definition(tags.name), tags.separator],
    color: "var(--codemirror-def, #8DA6CE)",
  },
  {
    tag: [
      tags.typeName,
      tags.className,
      tags.number,
      tags.changed,
      tags.annotation,
      tags.modifier,
      tags.self,
      tags.namespace,
    ],
    color: "var(--codemirror-number, #ca7841)",
  },
  {
    tag: [
      tags.operator,
      tags.operatorKeyword,
      tags.url,
      tags.escape,
      tags.regexp,
      tags.link,
      tags.special(tags.string),
    ],
    color: "var(--codemirror-operator, #cda869)",
  },
  { tag: tags.comment, color: "var(--codemirror-comment, #777)" },
  {
    tag: tags.meta,
    color: "var(--codemirror-meta, var(--primary-text-color))",
  },
  { tag: tags.strong, fontWeight: "bold" },
  { tag: tags.emphasis, fontStyle: "italic" },
  {
    tag: tags.link,
    color: "var(--primary-color)",
    textDecoration: "underline",
  },
  { tag: tags.heading, fontWeight: "bold" },
  { tag: tags.atom, color: "var(--codemirror-atom, #F90)" },
  { tag: tags.bool, color: "var(--codemirror-atom, #F90)" },
  {
    tag: tags.special(tags.variableName),
    color: "var(--codemirror-variable-2, #690)",
  },
  { tag: tags.processingInstruction, color: "var(--secondary-text-color)" },
  { tag: tags.string, color: "var(--codemirror-string, #07a)" },
  { tag: tags.inserted, color: "var(--codemirror-string2, #07a)" },
  { tag: tags.invalid, color: "var(--error-color)" }
);
