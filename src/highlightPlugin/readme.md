# draft-js-highlight-plugin

A simple draft-js plugin to highlight text, created as part of writing a [tutorial on how to get started with draft-js-plugins](reactrocket.com/post/getting-started-with-draft-js-plugins/). This plugin is compatible with draft-js-plugins.

![Draft-js highlight plugin](/getting-started-with-draft-js-plugins/blob/master/src/highlightPlugin/draft-js-plugins-purple-highlight.gif)


## Usage

`createHighlightPlugin(style?: Object)`
- style is a plain javascript object containing css rules that define the highlight style.

Default style:
```js
{
  background: 'blue',
  padding: '0 .3em',
  color: '#fff',
}
```

## Example

```js
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import createHighlightPlugin from 'draft-js-highlight-plugin';

const highlightPlugin = createHighlightPlugin({
  background: 'purple',
  color: 'yellow',
  border: '1px solid black',
});

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
    }
  }

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={[highlightPlugin]}
        />
      </div>
    );
  }
};
```
