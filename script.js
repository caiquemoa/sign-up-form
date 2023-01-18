const inputs = [...document.getElementsByTagName('input')]
const password = document.getElementsByName('password')[0]
const password_confirmation = document.getElementsByName('confirm_password')[0]
inputs.forEach((input) => {
	input.addEventListener('invalid', () => input.classList.add('error'), false)
})

function confirmPassword() {
	if (
		password.value !== password_confirmation.value &&
		password_confirmation.value !== ''
	) {
		password_confirmation.setCustomValidity('password not matching')
		password_confirmation.previousElementSibling.textContent =
			'PASSWORD NOT MATCH'
		password_confirmation.previousElementSibling.style.color = '#fa4d4d'
	} else {
		password_confirmation.setCustomValidity('')
		password_confirmation.classList.remove('pseudo-element')
		password_confirmation.previousElementSibling.textContent =
			'CONFIRM PASSWORD'
		password_confirmation.previousElementSibling.style.color = 'black'
	}
}

password.onchange = confirmPassword
password_confirmation.onkeyup = confirmPassword
