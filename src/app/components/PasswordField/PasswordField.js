import React from 'react'
import styles from './styles.module.css'

function PasswordField({ password, onChange, showPass, setShowPass }) {
    return (
        <div className={styles.passwordBox}>
            <input
                className={styles.passwordInput}
                placeholder="Password"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => {
                    onChange(e);
                }}
            // autocomplete="on"
            />
            <img onClick={() => setShowPass(!showPass)} src={showPass ? "./authIcon/eye.png" : "./authIcon/eyeSlash.png"} />
        </div>
    )
}

export default PasswordField
