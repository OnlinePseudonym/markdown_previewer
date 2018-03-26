import React from 'react';

const Editor = (props) => {
    return (
        <textarea name="editor" id="editor" cols="30" rows="10" value={props.input} onChange={props.handleChange}></textarea>
    )
}

export default Editor;