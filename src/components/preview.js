import React from 'react';
import marked from 'marked';

const Preview = (props) => {
    const getMarkdown = () => {
        const markdown = marked(props.input, {sanitize: true});
        return { __html: markdown };
    }

    return (
        <div id="preview" className="preview" dangerouslySetInnerHTML={getMarkdown()} />
    )
}

export default Preview;