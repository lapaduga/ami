$(document).ready(function () {
	const orderCall = document.querySelector('.header__order-call');
	const body = document.body;
	const callback = document.querySelector('#callback');
	const close = document.querySelector('.popup__close');
	const popupArea = document.querySelector('.popup__area');
	const form = document.getElementById('form');
	const alert = document.querySelector('.popup__alert');


	//burger
	$('.header__burger').click(function () {
		$('.header__burger, .header__menu').toggleClass('active');
		$('.header__city').fadeOut(300);
		body.classList.toggle('lock');
	});


	//callback popup
	orderCall.onclick = function () {
		callback.classList.add('active');
		body.classList.add('lock');
	}
	close.onclick = function () {
		if ($('.header__menu').hasClass('active')) {
			callback.classList.remove('active');
		} else {
			callback.classList.remove('active');
			body.classList.remove('lock');
		}
	}
	popupArea.onclick = function () {
		if ($('.header__menu').hasClass('active')) {
			callback.classList.remove('active');
		} else {
			callback.classList.remove('active');
			body.classList.remove('lock');
		}
	}


	//form validation
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			alert.classList.remove('active');
			form.reset();
		} else {
			alert.classList.add('active');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}


	//choosing city function
	$('.header__arrow').on('click', function () {
		$('.header__city').fadeToggle(300);
	});
});