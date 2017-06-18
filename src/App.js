import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createHighlightPlugin from './highlightPlugin';
import 'draft-js-emoji-plugin/lib/plugin.css'

const highlightPlugin = createHighlightPlugin();
const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  }

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={[highlightPlugin, emojiPlugin]}
        />
        <EmojiSuggestions />
      </div>
    );
  }
}

export default App;
