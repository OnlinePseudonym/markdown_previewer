import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Editor from './components/editor';
import Preview from './components/preview';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            input: `
# H1
## H2
[a link](https://www.google.com)
\n\`const code = 'Some code'\`
\`\`\`
const blockedCode = () => {
    return codeBlock;
}
\`\`\`
> And now we have the Blockquote.

* List
* This
\nAnd here is an image: ![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg "Markdown Logo")
\n**That's all folks**
`,
        })

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <Editor handleChange={this.handleChange} input={this.state.input} />
                <Preview input={this.state.input} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
