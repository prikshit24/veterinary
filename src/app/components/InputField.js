import React from 'react'

function InputField({ type, placeholder, value, onChange, name, error }) {
    return (
        <div>
            <input
            className={`formInput`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
            {error && <p className={`textErr title14`} style={{paddingLeft:'10px'}}>{error}</p>}
        </div>
    )
}

export default InputField
