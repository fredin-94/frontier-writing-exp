import React, {useState, useRef} from 'react';
import JoditEditor from 'jodit-react';

const Jodit = () => {
	const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
        readonly: false,
        height: 1000
	}
	
	return (
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		tabIndex={1}
		onBlur={newContent => setContent(newContent)}
                onChange={newContent => {}}
            />
        );
}

export default Jodit;