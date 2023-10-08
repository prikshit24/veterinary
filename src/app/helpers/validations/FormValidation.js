export const validatefield = (field) => {
    if (field === null || field === undefined || field === '') {
        return (true)
    } else {
        return (false)
    }
}

export const validateOnlyAlpha = (field) => {
    if (field === null || field === undefined || field === '') {
        return (true)
    } else if (/^[aA-zZ\s]+$/.test(field) === false) {
        return (true)
    } else {
        return (false)
    }
}

export const validateEmail = (email) => {
    if (email === null || email === undefined || email === '') {
        return (true)
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
        return (true)
    } else {
        return (false)
    }
}

export const validatePhone = (phone) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone === null || phone === undefined || phone === '') {
        return (true);
    } else if (phoneno.test(Number(phone))) {
        return (false)
    } else {
        return (true)
    }
}

export const validatePassword = (password) => {
    const regex = /^[a-zA-Z0-9!@#$%^&*]{8,25}$/;
    if (regex.test(password) === false) {
        return true
    }
    return false
}