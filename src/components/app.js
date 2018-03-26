import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            input: '# H1/n## H2/n### H3/n####H4/n##### H5###### H6',
        })
    }
    render() {
        return (
            <div className="text">Hello World</div>
        )
    }
}

export default App;