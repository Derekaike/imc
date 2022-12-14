import { Modal } from './modal.js'
import { AlertError } from './alert.js'
import { IMC, notAnumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')

form.onsubmit = function(event) {
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notAnumber(weight) || notAnumber(height)

    if (showAlertError) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de: ${result}`

    Modal.message.innerText = message
    Modal.open()
}


