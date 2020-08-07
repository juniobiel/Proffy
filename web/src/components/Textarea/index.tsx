import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea:React.FunctionComponent<TextareaProps> = (props, ...rest) => {
    return(
        <div className="textarea-block">
            <label htmlFor={props.name}>{props.label}</label>
            <textarea id={props.name} {...rest} />
        </div>

    );
}

export default Textarea;