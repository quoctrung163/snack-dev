import * as React from 'react';
import './InputField.Styles.css';

const InputField = ({ name, text, onChange, value, placeholder }: any) => {
    return (
        <>
            <p
                style={{
                    margin: '3px',
                    padding: 0,
                    color: '#999999',
                    fontSize: '0.666rem',
                    fontWeight: 'lighter',
                }}
            >
                {text}
            </p>
            <input
                type="text"
                name={name}
                onChange={onChange}
                value={value}
                className="input-focus"
                placeholder={placeholder}
            />
        </>
    );
};

export default InputField;