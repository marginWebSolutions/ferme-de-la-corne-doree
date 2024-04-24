import { useState } from 'react';
import "./Select.scss";

export default function Select({ label, name, value, handleChange, placeholder, required, options }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <div className={`select-wrapper ${isOpen ? 'open' : 'close'}`}>
                <select name={name} id={name} value={value} onClick={handleClick} onChange={handleChange} required={required}>
                    <option value=''>{placeholder}</option>
                    {options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </>
    )
}