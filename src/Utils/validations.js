let emailFilter=/^.+@.+\..{2,}$/;
let illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]\{\}]/

export const validateUsername = (username) => {
    let validateUsername

    if(username == '') {
        validateUsername = {
            message: 'This field can not be empty',
            status: false,
        }
        return validateUsername
    }

    if(username.match(illegalChars)){
        validateUsername = {
            message: 'Please, insert a valid username',
            status: false,
        }
        return validateUsername
    }

    validateUsername = {
        message: '',
        status: true,
    }
    return validateUsername
}


export const validateEmail = (email) => {
    let validateEmail

    if(email == '') {
        validateEmail = {
            message: 'This field can not be empty',
            status: false,
        }
        return validateEmail
    }

    if( !(emailFilter.test(email)) || email.match(illegalChars)) {
        validateEmail = {
            message: 'Please, insert a valid email',
            status: false,
        }
        return validateEmail
    }

    validateEmail = {
        message: '',
        status: true
    }
    return validateEmail
}

export const validatePassword = (password) => {
    const numbers = /([0-9])/;
	const alphabet = /([a-zA-Z])/;
	const specialCharacters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    let validatePassword

    if(password == '') {
        validatePassword = {
            message: 'This field can not be empty',
            status: false,
        }
        return validatePassword
    }

    if( password.lenght <= 5 || !(password.match(numbers)) || !(password.match(alphabet)) || !(password.match(specialCharacters)) ) {
        validatePassword = {
            message: 'Password must have at least 5 characters with numbers, special characters and letters',
            status: false,
        }
        return validatePassword
    }

    validatePassword = {
        message: '',
        status: true,
    }
    return validatePassword
}

