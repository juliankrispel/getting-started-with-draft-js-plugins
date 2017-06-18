import  { RichUtils } from 'draft-js';

export default () => {
  return {
    customStyleMap: {
      'HIGHLIGHT': {
        background: 'blue',
        padding: '0 .3em',
        color: '#fff',
      }
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
