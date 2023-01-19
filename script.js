const inputs = [...document.getElementsByTagName('input')]
const password = document.getElementsByName('password')[0]
const confirm_password = document.getElementsByName('confirm_password')[0]
inputs.forEach((input) => {
	input.addEventListener('invalid', () => input.classList.add('error'), false)
})

function confirmPassword() {
	if (
		password.value !== confirm_password.value &&
		confirm_password.value !== ''
	) {
		confirm_password.setCustomValidity("password doesn't matching")
		confirm_password.previousElementSibling.textContent = 'PASSWORD NOT MATCH'
		confirm_password.previousElementSibling.style.color = '#fa4d4d'
		confirm_password.classList.add('error')
	} else {
		confirm_password.setCustomValidity('')
		confirm_password.classList.remove('pseudo-element')
		confirm_password.previousElementSibling.textContent = 'CONFIRM PASSWORD'
		confirm_password.previousElementSibling.style.color = 'black'
		confirm_password.classList.remove('error')
	}
}

password.onchange = confirmPassword
confirm_password.onkeyup = confirmPassword
