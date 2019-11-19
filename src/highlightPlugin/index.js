import  { RichUtils, KeyBindingUtil } from 'draft-js';

const { hasCommandModifier } = KeyBindingUtil;
const defaultStyle = {
  background: 'blue',
  padding: '0 .3em',
  color: '#fff',
};

export default (style = {}) => {
  return {
    customStyleMap: {
      'HIGHLIGHT': {
        ...defaultStyle,
        ...style,
      },
    },
    keyBindingFn: (e) => {
      if (hasCommandModifier(e) && e.key === 72) {
        return 'highlight';
      }
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === 'highlight') {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'));
        return true;
      }
    },
  };
};
