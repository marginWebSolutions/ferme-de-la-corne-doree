import React from 'react'

export const FIELD_TYPES = {
    INPUT_TEXT: 1,
    INPUT_EMAIL: 2,
    TEXTAREA: 3,
};

export default function Field({ type = FIELD_TYPES.INPUT_TEXT, label, name, value, handleChange, placeholder, required }) {
    let component;
    switch (type) {
        case FIELD_TYPES.INPUT_TEXT:
            component = (
                <input type='text' name={name} id={name} value={value} onChange={handleChange} placeholder={placeholder} required={required} />
            );
            break;
        case FIELD_TYPES.INPUT_EMAIL:
            component = (
                <input type='email' name={name} id={name} value={value} onChange={handleChange} placeholder={placeholder} required={required} />
            );
            break;
        case FIELD_TYPES.TEXTAREA:
            component = <textarea name={name} id={name} value={value} onChange={handleChange} placeholder={placeholder} required={required} />;
            break;
        default:
            component = (
                <input type='text' name={name} id={name} value={value} onChange={handleChange} placeholder={placeholder} required={required} />
            )
    }

    return (
        <>
            <label htmlFor={name}>{label}</label>
            {component}
        </>
  )
}
