import React, {useState} from "react";

const TextBox = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        console.log('coming in onChange', event.target.value)
        setValue(event.target.value)
    };

    return (
        <>
        <input type={"text"} value={value}  onChange={handleChange} data-testid={'input-element'}/>

        </>
    )
};

export default TextBox
