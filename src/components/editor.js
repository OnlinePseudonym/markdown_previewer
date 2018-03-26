import React from 'react';

const Editor = (props) => {
    return (
        <textarea name="editor" id="editor" className="editor" cols="80" rows="25" value={props.input} onChange={props.handleChange}></textarea>
    )
}

export default Editor;