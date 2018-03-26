import React, { Component } from 'react';
import Editor from './editor';
import Preview from './preview';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            input: `# H1
## H2
### H3
const something = me
\`const something = me\`
##### H5
###### H6`,
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

export default App;