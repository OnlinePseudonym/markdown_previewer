import React, { Component } from 'react';
import Editor from './editor';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            input: '# H1/n## H2/n### H3/n####H4/n##### H5###### H6',
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
            </div>
        )
    }
}

export default App;