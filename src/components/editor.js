import React from 'react';

const Editor = (props) => {
    return (
        <textarea name="editor" id="editor" className="editor" value={props.input} onChange={props.handleChange}></textarea>
    )
}

export default Editor;