export const inputsValidation = () => {
    const errors = [];
    const name = nameElem.value
    const agree = agreeElem.value

    const object = {name: '',
        agree: ""
    }

    if (name.value !== ''){
        button.style.backgroundColor = 'red'
    }
    if (name.length < 2) {
        errors.push('imie za krótkie')
    }

    if (errors.length > 0) {
        errorMessageElem.innerText = errors.join(', ')
    } else {
        errorMessageElem.innerText = 'wysłane'
        object.name = name
        object.agree = agree
        nameElem.value = ''

    }

    console.log(object)

}
