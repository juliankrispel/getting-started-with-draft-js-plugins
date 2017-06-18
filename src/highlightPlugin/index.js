import  { RichUtils } from 'draft-js';

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
      if (e.metaKey && e.key === 'h') {
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
